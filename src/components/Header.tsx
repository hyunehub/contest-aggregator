"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#101922] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#137fec] rounded-lg text-white">
              <span className="material-symbols-outlined block text-2xl">rocket_launch</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">학생 공모전 실시간 모아보기</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-[10px] uppercase font-bold text-slate-400">최근 업데이트</span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">오전 10:30</span>
            </div>
            <button aria-label="새로고침" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined">refresh</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
