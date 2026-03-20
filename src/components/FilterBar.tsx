"use client";

export default function FilterBar() {
  return (
    <div className="space-y-6 mb-10">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-slate-400">search</span>
        </div>
        <input 
          type="text" 
          className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm focus:ring-2 focus:ring-[#137fec] focus:border-[#137fec] text-lg outline-none transition-all" 
          placeholder="공모전 명칭 또는 주최 기관 검색" 
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <button className="px-5 py-2 rounded-full bg-[#137fec] text-white text-sm font-semibold whitespace-nowrap">전체</button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#137fec] hover:text-[#137fec] transition-all text-sm font-semibold whitespace-nowrap">초등학생 가능</button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#137fec] hover:text-[#137fec] transition-all text-sm font-semibold whitespace-nowrap">중학생 이상</button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#137fec] hover:text-[#137fec] transition-all text-sm font-semibold whitespace-nowrap">접수 중</button>
          <button className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#137fec] hover:text-[#137fec] transition-all text-sm font-semibold whitespace-nowrap">마감 임박</button>
        </div>
        <div className="flex items-center gap-2 min-w-[160px]">
          <span className="text-sm font-medium text-slate-500 whitespace-nowrap">정렬 기준</span>
          <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm py-2 px-3 focus:ring-[#137fec] focus:border-[#137fec] outline-none">
            <option>최신순</option>
            <option>마감일순</option>
            <option>인기순</option>
          </select>
        </div>
      </div>
    </div>
  );
}
