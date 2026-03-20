"use client";

export default function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <section className="min-h-[500px] flex items-center justify-center bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-gray-300 dark:border-slate-700">
      <div className="text-center p-8 max-w-md">
        <div className="relative inline-block mb-6">
          <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-full">
            <svg className="h-20 w-20 text-gray-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 bg-white dark:bg-slate-900 rounded-full p-1 translate-x-1 translate-y-1">
            <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">조건에 맞는 공모전이 없습니다</h3>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          필터를 변경하거나 다른 검색어로 다시 시도해보세요.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={onReset} className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            필터 초기화
          </button>
        </div>
      </div>
    </section>
  );
}
