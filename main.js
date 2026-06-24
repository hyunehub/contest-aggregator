/* eslint-disable @typescript-eslint/no-require-imports */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
const http = require('http');

let mainWindow;
let server;

function isPathInside(parentPath, childPath) {
  const relativePath = path.relative(parentPath, childPath);
  return relativePath === '' || (!relativePath.startsWith('..') && !path.isAbsolute(relativePath));
}

function resolveStaticFilePath(staticRoot, requestUrl = '/') {
  let pathname;

  try {
    pathname = new URL(requestUrl, 'http://127.0.0.1').pathname;
    pathname = decodeURIComponent(pathname);
  } catch {
    return { errorStatus: 400, errorMessage: 'Bad Request' };
  }

  const requestPath = pathname === '/' ? 'index.html' : pathname.replace(/^[/\\]+/, '');
  const filePath = path.resolve(staticRoot, requestPath);

  if (!isPathInside(staticRoot, filePath)) {
    return { errorStatus: 403, errorMessage: 'Forbidden' };
  }

  return { filePath };
}

function sendText(res, statusCode, message) {
  res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
  res.end(message);
}

function sendIndexFallback(staticRoot, res) {
  fs.readFile(path.join(staticRoot, 'index.html'), (err, fallback) => {
    if (err) {
      sendText(res, 500, 'Internal Server Error');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fallback);
  });
}

// Simple static file server to serve the Next.js export
function startServer(staticDir) {
  return new Promise((resolve) => {
    const staticRoot = path.resolve(staticDir);
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
      '.ttf': 'font/ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.otf': 'font/otf',
      '.wasm': 'application/wasm',
      '.map': 'application/json',
      '.txt': 'text/plain',
      '.webp': 'image/webp',
    };

    server = http.createServer((req, res) => {
      const resolvedPath = resolveStaticFilePath(staticRoot, req.url);

      if (resolvedPath.errorStatus) {
        sendText(res, resolvedPath.errorStatus, resolvedPath.errorMessage);
        return;
      }

      const { filePath } = resolvedPath;

      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      fs.readFile(filePath, (err, content) => {
        if (err) {
          if (err.code === 'ENOENT') {
            // Serve index.html for SPA routing
            sendIndexFallback(staticRoot, res);
          } else {
            sendText(res, 500, 'Internal Server Error');
          }
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
        }
      });
    });

    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      console.log(`Static server running on http://127.0.0.1:${port}`);
      resolve(port);
    });
  });
}

async function createWindow() {
  // Determine the path to the 'out' directory
  // In development: ./out
  // When packaged: inside resources/app/out or resources/app.asar/out
  let staticDir;
  if (app.isPackaged) {
    staticDir = path.join(process.resourcesPath, 'app', 'out');
    // If using asar, check in extracted directory
    if (!fs.existsSync(staticDir)) {
      staticDir = path.join(process.resourcesPath, 'out');
    }
  } else {
    staticDir = path.join(__dirname, 'out');
  }

  console.log('Static dir:', staticDir);
  console.log('Static dir exists:', fs.existsSync(staticDir));

  const port = await startServer(staticDir);

  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    title: "학생 공모전 실시간 모아보기",
    icon: path.join(__dirname, 'public', 'favicon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  mainWindow.loadURL(`http://127.0.0.1:${port}`);

  mainWindow.on('page-title-updated', (evt) => {
    evt.preventDefault();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (server) {
    server.close();
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
