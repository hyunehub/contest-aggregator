"use client";

export default function LoadingState() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="h-6 w-32 bg-gray-200 rounded skeleton-shimmer"></div>
        <div className="h-8 w-24 bg-gray-200 rounded skeleton-shimmer"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-5 space-y-4 overflow-hidden shadow-sm">
            <div className="w-full h-40 bg-gray-200 dark:bg-slate-800 rounded-lg skeleton-shimmer"></div>
            <div className="h-4 w-1/4 bg-gray-100 dark:bg-slate-700 rounded skeleton-shimmer"></div>
            <div className="space-y-2">
              <div className="h-5 w-full bg-gray-200 dark:bg-slate-800 rounded skeleton-shimmer"></div>
              <div className="h-5 w-3/4 bg-gray-200 dark:bg-slate-800 rounded skeleton-shimmer"></div>
            </div>
            <div className="pt-4 flex justify-between items-center border-t border-gray-50 dark:border-slate-800">
              <div className="h-4 w-20 bg-gray-100 dark:bg-slate-700 rounded skeleton-shimmer"></div>
              <div className="h-6 w-12 bg-gray-100 dark:bg-slate-700 rounded-full skeleton-shimmer"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]">
        <div className="bg-slate-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-slate-700">
          <svg className="animate-spin-slow h-5 w-5 text-[#137fec]" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-sm font-medium tracking-wide">데이터를 불러오는 중입니다...</span>
        </div>
      </div>
    </>
  );
}
