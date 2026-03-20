"use client";

interface ContestCardProps {
  id: string;
  title: string;
  host: string;
  period: string;
  posterImage: string;
  ageBadgeText: string;
  ageBadgeColor: string;
  statusBadgeText: string;
  statusBadgeColor: string;
  onClick: () => void;
  isSelected?: boolean;
}

export default function ContestCard({
  title,
  host,
  period,
  posterImage,
  ageBadgeText,
  ageBadgeColor,
  statusBadgeText,
  statusBadgeColor,
  onClick,
  isSelected
}: ContestCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group bg-white dark:bg-slate-900 border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer ${isSelected ? 'border-[#137fec] ring-2 ring-[#137fec] ring-opacity-50' : 'border-slate-200 dark:border-slate-800'}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={posterImage} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2.5 py-1 text-white text-[10px] font-bold uppercase rounded tracking-wider ${ageBadgeColor}`}>
            {ageBadgeText}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm font-bold text-xs rounded-full border ${statusBadgeColor}`}>
            {statusBadgeText}
          </span>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-2 mb-2 group-hover:text-[#137fec] transition-colors leading-snug">
          {title}
        </h3>
        <div className="mt-auto space-y-2">
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">corporate_fare</span>
            {host}
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            {period}
          </p>
        </div>
      </div>
    </div>
  );
}
