"use client";

export default function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <section className="my-10 min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-xl bg-gray-50/50 dark:bg-slate-800/50">
      <div className="text-center p-8 max-w-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-6">
          <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">데이터를 불러올 수 없습니다</h2>
        <p className="text-gray-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
          일시적인 네트워크 오류이거나 서버와의 연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요.
        </p>
        <button 
          onClick={onRetry}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all"
        >
          <svg className="mr-2 -ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          다시 시도하기
        </button>
      </div>
    </section>
  );
}
