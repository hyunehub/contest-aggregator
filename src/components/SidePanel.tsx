"use client";

import type { Contest } from "@/types/contest";

interface SidePanelProps {
  contest?: Contest;
  onClose: () => void;
}

export default function SidePanel({ contest, onClose }: SidePanelProps) {
  if (!contest) return null;

  return (
    <div className="w-full h-full overflow-y-auto bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col shadow-[-10px_0_25px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur z-10">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-1">{contest.title}</h3>
        <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined text-slate-500">close</span>
        </button>
      </div>

      <div className="relative w-full aspect-[4/3] bg-slate-200 dark:bg-slate-800">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${contest.posterImage}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${contest.ageBadgeColor.replace('text-', 'bg-').replace('border-', '')}`}>{contest.ageBadgeText}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border bg-white/10 backdrop-blur-md ${contest.statusBadgeColor}`}>
              {contest.statusBadgeText}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white leading-tight">{contest.title}</h1>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">주최 기관</span>
            <p className="text-slate-900 dark:text-white font-medium">{contest.host}</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">접수 기간</span>
            <p className="text-slate-900 dark:text-white font-medium">{contest.period}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white border-t border-slate-100 dark:border-slate-800 pt-6">공모전 요약</h4>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
            {contest.title}은 학생들의 창의적인 참여를 독려하는 훌륭한 대회입니다. 올콘에서 수집된 상세 공고 원문과 제출 가이드를 꼭 확인하시기 바랍니다. 포스터의 응모 기한 및 참가 자격을 주의 깊게 살펴보세요.
          </p>
        </div>

        <div className="flex gap-4 py-4 mt-4">
          <a href="#" target="_blank" className="flex-1 bg-[#137fec] hover:bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">open_in_new</span>
            원문 공고 열기
          </a>
        </div>
      </div>
    </div>
  );
}
