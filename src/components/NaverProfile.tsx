import React from "react";
import { Instagram, Search, Award, Calendar, User, Heart, Briefcase, ExternalLink, RefreshCw, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface NaverProfileProps {
  onInstagramClick: () => void;
}

export default function NaverProfile({ onInstagramClick }: NaverProfileProps) {
  return (
    <div id="naver-profile-section" className="bg-[#f0f2f5] min-h-screen text-[#1e1e1e] font-sans">
      {/* Naver Style Header */}
      <header className="bg-white border-b border-[#e3e5eb] py-4 px-4 sm:px-8 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full">
            {/* Logo */}
            <span className="text-[#03c75a] font-black text-2xl tracking-tight select-none">NAVER</span>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-lg relative">
              <div className="flex items-center border-2 border-[#03c75a] rounded-sm bg-white overflow-hidden shadow-sm h-10 pr-3">
                <input
                  type="text"
                  value="강서준"
                  readOnly
                  className="w-full pl-3 pr-2 text-sm font-semibold focus:outline-none cursor-default bg-transparent text-gray-800"
                />
                <Search className="text-[#03c75a] w-5 h-5 cursor-pointer hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-gray-500">
            <span>메일</span><span>카페</span><span>블로그</span>
          </div>
        </div>
      </header>

      {/* Naver Navigation Tabs */}
      <div className="bg-white border-b border-[#e3e5eb] px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center gap-6 overflow-x-auto text-[14px] font-semibold text-[#555] py-3 scrollbar-none">
          <span className="text-[#03c75a] border-b-2 border-[#03c75a] pb-3 px-1 whitespace-nowrap cursor-pointer">통합</span>
          <span className="pb-3 px-1 hover:text-black whitespace-nowrap cursor-pointer flex items-center gap-1">인물정보</span>
          <span className="pb-3 px-1 hover:text-black whitespace-nowrap cursor-pointer">이미지</span>
          <span className="pb-3 px-1 hover:text-black whitespace-nowrap cursor-pointer">동영상</span>
          <span className="pb-3 px-1 hover:text-black whitespace-nowrap cursor-pointer">뉴스</span>
          <span className="pb-3 px-1 hover:text-black whitespace-nowrap cursor-pointer">지식in</span>
        </div>
      </div>

      {/* Naver Search Results Body */}
      <main className="max-w-4xl mx-auto p-4 sm:py-6 sm:px-4 grid grid-cols-1 gap-6">
        {/* Profile Card Section */}
        <div className="bg-white rounded-lg border border-[#e3e5eb] shadow-sm overflow-hidden">
          {/* Section Header */}
          <div className="border-b border-[#f0f2f5] px-4 py-3 bg-[#fafbfc] flex justify-between items-center">
            <span className="text-sm font-bold text-gray-800 flex items-center gap-1">
              <span className="text-[#03c75a]">■</span> 인물정보
            </span>
            <span className="text-xs text-[#a0a0a0] flex items-center gap-1">
              본인참여 <span className="text-gray-400">2026.04.10.</span>
            </span>
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Photo & Simple links */}
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-52 bg-gradient-to-tr from-slate-100 to-slate-200 rounded border border-gray-200 overflow-hidden shadow-inner flex items-center justify-center">
                  {/* Styled minimalist face silhouette for actor */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#151c24] text-white">
                    <div className="w-24 h-24 rounded-full bg-slate-700/60 flex items-center justify-center border border-slate-500/30 overflow-hidden relative mb-2">
                      <User className="w-16 h-16 text-slate-300 translate-y-2" />
                    </div>
                    <span className="text-xs tracking-wider text-slate-300 font-medium">HS Entertainment</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">강서준 (영화배우)</span>
                    {/* Atmospheric lighting highlight */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/70 mix-blend-multiply"></div>
                  </div>
                </div>
                <div className="mt-3 text-xs font-semibold text-gray-500 flex items-center gap-1.5 py-1 px-3 bg-gray-50 border border-gray-100 rounded-full">
                  <span>공식 홈페이지</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </div>
              </div>

              {/* Professional Description */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <h1 className="text-2xl font-bold text-[#1e1e1e] tracking-tight">강서준</h1>
                    <span className="text-sm text-[#7f7f7f] font-medium">영화배우, 탤런트</span>
                  </div>

                  {/* Detail list in NAVER columns */}
                  <div className="grid grid-cols-1 gap-2.5 my-4 text-[14px]">
                    <div className="flex">
                      <span className="w-16 text-[#7f7f7f] shrink-0">출생</span>
                      <span className="text-[#2b2b2b] font-medium flex items-center gap-1">
                        1997년 3월 21일 (30세)
                      </span>
                    </div>

                    <div className="flex">
                      <span className="w-16 text-[#7f7f7f] shrink-0">신체</span>
                      <span className="text-[#2b2b2b] font-medium">185cm, 73kg, O형</span>
                    </div>

                    <div className="flex">
                      <span className="w-16 text-[#7f7f7f] shrink-0">소속사</span>
                      <span className="text-[#2b2b2b] font-medium text-[#0066cc] cursor-pointer hover:underline">
                        HS엔터테인먼트
                      </span>
                    </div>

                    <div className="flex">
                      <span className="w-16 text-[#7f7f7f] shrink-0">데뷔</span>
                      <span className="text-[#2b2b2b] font-medium">
                        2020년 웹드라마 《너에게 닿는 거리 10cm》
                      </span>
                    </div>

                    <div className="flex">
                      <span className="w-16 text-[#7f7f7f] shrink-0">MBTI</span>
                      <span className="text-[#2b2b2b] font-semibold bg-[#f0f9ff] text-[#0070f3] px-1.5 py-0.5 rounded text-xs select-none border border-[#d0e6ff]">
                        ENFP
                      </span>
                    </div>

                    {/* SNS INSTAGRAM ICON - Pulsing interactive */}
                    <div className="flex items-center mt-3">
                      <span className="w-16 text-[#7f7f7f] shrink-0">SNS</span>
                      <div className="flex items-center gap-2">
                        <motion.button
                          id="nav-insta-btn"
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={onInstagramClick}
                          className="relative p-2.5 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:shadow-md cursor-pointer flex items-center gap-2 font-bold text-xs"
                        >
                          <Instagram className="w-4 h-4" />
                          <span>서준 인스타그램 이동</span>
                          
                          {/* Pulsing indicator ring to guide action */}
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee2a7b] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ee2a7b]"></span>
                          </span>
                        </motion.button>
                        
                        <div className="hidden sm:flex text-xs text-gray-400 select-none items-center gap-1 ml-1.5 animate-pulse">
                          <span>(이 아이콘을 누르면 인격 소통 시뮬레이터로 진입합니다)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Awards Line */}
                <div className="mt-4 pt-4 border-t border-dashed border-[#e3e5eb]">
                  <div className="flex items-start gap-2 text-[13px]">
                    <span className="w-16 text-[#7f7f7f] shrink-0 font-semibold mt-0.5 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-500" /> 수상
                    </span>
                    <div className="space-y-1 text-gray-700">
                      <p className="font-semibold flex items-baseline gap-1">
                        <span className="text-amber-600">2025</span> 제46회 청룡영화상 남우주연상 (영화 《무경계》)
                      </p>
                      <p className="font-medium flex items-baseline gap-1 text-gray-500">
                        <span className="text-gray-400">2024</span> 백상예술대상 TV부문 남자 신인연기상 (드라마 《붉은 달, 그림자》)
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Quick Naver Ad Placeholder or Quote Card */}
        <div className="bg-gradient-to-r from-[#03c75a]/10 to-teal-50/20 p-4 rounded-lg border border-[#03c75a]/20 flex justify-between items-center gap-4">
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#03c75a]">NAVER 검색 뉴스토픽</h4>
            <p className="text-xs text-gray-600 font-semibold leading-relaxed">
              &ldquo;연애의 온도차&rdquo; 차도윤 본부장역 강서준, 마성의 철벽 로코킹 등극에 스틸컷 무한 폭발 
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-[#03c75a] shrink-0" />
        </div>
      </main>
    </div>
  );
}
