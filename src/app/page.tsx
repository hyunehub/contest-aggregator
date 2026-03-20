"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import FilterBar from "@/components/FilterBar";
import ContestCard from "@/components/ContestCard";
import SidePanel from "@/components/SidePanel";
import LoadingState from "@/components/LoadingState";
import EmptyState from "@/components/EmptyState";
import ErrorState from "@/components/ErrorState";

const MOCK_DATA = [
  { id: "1", title: "제 12회 전국 초등학생 창의력 과학 경진대회", host: "한국과학창의재단", period: "2024.06.01 - 2024.07.15", posterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZobui5IcgsEq7Tav17rTnkgys1KuQUKWYI92wnJiaq0rMaUNYLB8L7GwS9h9k5lmMqx8aZ6MQivFW4bJPHGwvWXR3Jd8hlgRKS_m0F59jW-pKtaKT7QAPVrpSqT_ESxgJdjmV48CftOu1s2SjoExYCUf-DXpHacH8wiHO1PYIOOQLJm3ldHGzl8Eh6tdfJOH--qtS3YslAOVMgvWrI_ieV2vRS20oEoD4XU-CKpfmcGt4lVN06H-CGAFT9ZjQ_4jFX15kj4-_ng", ageBadgeText: "초등학생 가능", ageBadgeColor: "bg-[#26C6DA]", statusBadgeText: "D-15", statusBadgeColor: "text-[#137fec] border-[#137fec]/20" },
  { id: "2", title: "전국 청소년 디지털 미디어 콘텐츠 공모전", host: "방송통신위원회", period: "2024.05.10 - 2024.06.30", posterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk82SXvNHcNLWTBhQ6u8X3OJQhiKxvCDWzzilW3kUVrwPLjUMGNz1T9COgsUwaA9l58Q4kxukO9fSY_mDyx1h5ABHRlhNbSqYtdc1lmx6UFnG6nV4JD-io8xtXkzLpER_Tws2lCdpBAZIrzwoPgJiAcuvGSlJt579mJcHLdaN1WGPUe-hb0G-Qdf_-4qVsl9Al2aOnILYelj-TEAao-ukAtGtNWVhkkCLhMqkpcSgsJVOEiQKKUdu8MpRnA5JnPVPBw_CeJvoI_w", ageBadgeText: "중학생 이상", ageBadgeColor: "bg-[#1A237E]", statusBadgeText: "D-3", statusBadgeColor: "text-rose-600 border-rose-200" },
  { id: "3", title: "제 5회 꿈나무 글짓기 및 독후감 경진대회", host: "국립중앙도서관", period: "2024.06.15 - 2024.08.10", posterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4o7qs1c7yROcN-fZbFkDgqKuDTeUn6sfV1mHLkilAwvWaI-D8iduCgsw8BdsBFA_3TL1rJpL9uy3_s89flw7jqCnSaLhTAzzT1VFvXe9cBvoT2OdCiozrIIv8qv76Pz09haZznw7VQyowCWCxzJ3rsZ30EOdLwIdF5a8Q7HLued3tAbIx-O13HQ41Fm6Zduzsbmzu_lndfhJVj_MVI1V2zkXY9jXh2J64uZQ99_SioIzqtbci2GBriEvztzVm_9Wg5rJ7xPynJg", ageBadgeText: "초등학생 가능", ageBadgeColor: "bg-[#26C6DA]", statusBadgeText: "D-21", statusBadgeColor: "text-[#137fec] border-[#137fec]/20" },
  { id: "4", title: "청소년 AI 알고리즘 코딩 챌린지 2024", host: "소프트웨어협회", period: "2024.07.01 - 2024.09.15", posterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9h7fRsDgU3CgE6OrKXKsYtVf5GoZm47QgdVhVrBK8fSZ3K86SC2nP4Q3MGdMviNS9LDXqU-kogumZbkWDO5_iZfKYWzu3yvPFbb-ZhrTFgYpv0geyNmk9T2g3dROtR3WxFxijQAwvUtulNYhyVQCHeEQn0D-YEbK7SuwZZTyu3BdL7foHsqYxGN0WV-h9vjA-nAris9qsnqJI6M-m2Y9IoEjrqqsk_nN0nsgQf9rdHPrlaVZSWSwNyzreOVamhwq9rLZ0DGvWyQ", ageBadgeText: "중학생 이상", ageBadgeColor: "bg-[#1A237E]", statusBadgeText: "D-45", statusBadgeColor: "text-[#137fec] border-[#137fec]/20" },
  { id: "5", title: "우리 동네 생태 사진 공모전 (초등부)", host: "환경운동연합", period: "2024.04.20 - 2024.06.25", posterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA17u7WccPLSVY3M78zp5965cb1vgG2fCCu7dHarSH1fCt7vxe2bb0vkM97xbkG1H3ypjjUaY5Ju-cJOhMcM4vXEYWmqTyY4kWEWe1jpi9Pyo6uYEgs_zrCxNcT75JQ_yZ3-ty96Zo5BhBSUiB7GCgtZ11BLgccp8WCUTYpzrSSgkWmwD_C8NtNq57AnkdGnzRZCu0KF638RCcvKQZGePyTlvafsA0BGBpTNeD3QHORsA4u9dEen-xqO8MYsMCU8_KNNGtCAZi_ag", ageBadgeText: "초등학생 가능", ageBadgeColor: "bg-[#26C6DA]", statusBadgeText: "D-1", statusBadgeColor: "text-rose-600 border-rose-200" },
  { id: "6", title: "제 3회 전국 중·고교생 창업 아이디어 경진대회", host: "창업진흥원", period: "2024.06.10 - 2024.07.31", posterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFvHy20BQHBptRBEc4UioiitdaG4oijlN5IVGa1JsKrF6wSb6togj_3UEuszi5aYZ2_QgWxg04WuQrvawlb898hdwwCN8yCtyOcUDWQGNoGCKt8eA-2Xy3eE-gxah8ra9vuO-Z2PzVuXTAFjoMT3v6Tv_WVVDK3VyBVeLQpsq56MfGbryCJYaxcl5EKqRd9UilwedhV1tXW2_tCCMEr51yk9uagXZAHQLWswTuBvkKSPfNzMVN2lfN6dK-cBbs1ROR0_Yqkz-18w", ageBadgeText: "중학생 이상", ageBadgeColor: "bg-[#1A237E]", statusBadgeText: "D-30", statusBadgeColor: "text-[#137fec] border-[#137fec]/20" },
];

export default function Home() {
  const [viewState, setViewState] = useState<'loading' | 'results' | 'empty' | 'error'>('loading');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    // Initial loading simulation
    const timer = setTimeout(() => {
      setViewState('results');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const selectedContest = MOCK_DATA.find(c => c.id === selectedId);

  // Demo controls to showcase UI states to User
  const triggerError = () => setViewState('error');
  const triggerEmpty = () => { setViewState('empty'); setSelectedId(null); };
  const triggerLoading = () => { setViewState('loading'); setSelectedId(null); setTimeout(() => setViewState('results'), 1500); };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Demo Controls Bar */}
      <div className="bg-slate-800 text-slate-300 p-2 flex flex-wrap justify-center items-center gap-4 text-xs font-mono w-full">
         <strong className="text-white">UI 테스터:</strong>
         <button onClick={triggerLoading} className="py-1 px-3 border border-slate-600 rounded hover:bg-slate-700 transition">로딩 상태 보기</button>
         <button onClick={() => {setViewState('results'); setSelectedId(null);}} className="py-1 px-3 border border-slate-600 rounded hover:bg-slate-700 transition">정상 목록 보기</button>
         <button onClick={triggerEmpty} className="py-1 px-3 border border-slate-600 rounded hover:bg-slate-700 transition">빈 결과 상태 보기</button>
         <button onClick={triggerError} className="py-1 px-3 border border-slate-600 rounded hover:bg-slate-700 transition">에러 상태 보기</button>
      </div>

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col relative">
        {(viewState === 'loading' || viewState === 'results') && <FilterBar />}
        
        {/* Main Content Area: Conditional Split layout */}
        <div className={`flex flex-1 gap-8 transition-all duration-300 ${selectedId ? 'h-[75vh]' : 'h-auto'}`}>
          
          {/* Left Grid Area */}
          <div className={`${selectedId ? 'w-full lg:w-[60%] lg:border lg:border-slate-200 dark:border-slate-800 rounded-2xl p-6 bg-slate-50 dark:bg-slate-900/50 overflow-y-auto no-scrollbar' : 'w-full'} transition-all`}>
            {viewState === 'loading' && <LoadingState />}
            {viewState === 'empty' && <EmptyState onReset={() => setViewState('results')} />}
            {viewState === 'error' && <ErrorState onRetry={triggerLoading} />}
            
            {viewState === 'results' && (
              <div className={`grid gap-8 transition-all ${selectedId ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                {MOCK_DATA.map((contest) => (
                  <ContestCard 
                    key={contest.id}
                    {...contest}
                    isSelected={selectedId === contest.id}
                    onClick={() => setSelectedId(contest.id === selectedId ? null : contest.id)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Detail Panel - Desktop Only */}
          {selectedId && (
            <div className="hidden lg:block w-[40%] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm relative relative top-0 right-0 h-full">
               <SidePanel contest={selectedContest} onClose={() => setSelectedId(null)} />
            </div>
          )}
        </div>
        
        {/* Detail Panel - Mobile Overlay */}
        {selectedId && (
          <div className="lg:hidden fixed inset-0 z-[100] bg-white dark:bg-slate-900 overflow-hidden flex flex-col pt-safe-top">
             <SidePanel contest={selectedContest} onClose={() => setSelectedId(null)} />
          </div>
        )}
      </main>
    </div>
  );
}
