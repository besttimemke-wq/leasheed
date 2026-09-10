'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { NavTab } from '@/components/Navbar';
import { AuthUser } from '@/components/auth/AuthModal';
import { SharedHeader } from '@/components/layout/SharedHeader';
import { SharedFooter } from '@/components/layout/SharedFooter';

interface ResourcesPageViewProps {
  onNavigateToTab: (tab: NavTab) => void;
  onOpenAuth?: (mode: 'signin' | 'signup', gateMessage?: string) => void;
  currentUser?: AuthUser | null;
}

export const ResourcesPageView: React.FC<ResourcesPageViewProps> = ({
  onNavigateToTab,
  onOpenAuth,
  currentUser,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="bg-[#f8fafc] text-slate-800 font-sans min-h-screen flex flex-col justify-between selection:bg-blue-100 selection:text-blue-700">
      {/* Universal Top Navigation Header */}
      <SharedHeader
        currentTab="resources"
        onNavigateToTab={onNavigateToTab}
        onOpenAuth={onOpenAuth}
        currentUser={currentUser}
      />

      {/* BEGIN: HeroSection - EXACT MATCH WITH ACADEMY */}
      <section className="relative w-full overflow-hidden bg-gray-900 border-b border-gray-200">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/hero-ALLPAGES.jpeg"
            alt="Pet grooming professional with golden retriever"
            fill
            priority
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-right sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded bg-[#0066cc]/90 text-white text-xs uppercase font-extrabold tracking-wider mb-4 shadow-sm">
              RESOURCES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold text-white tracking-tight mb-4">
              All Resources &amp; Guides.<br className="hidden sm:inline" /> Real Tools for Real Growth.
            </h1>
            <p className="text-base text-gray-200 leading-relaxed mb-8 drop-shadow">
              Explore our library of free templates, operational guides, pet grooming business checklists, and safety documentation.
            </p>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Search className="h-4 w-4" />
                </span>
                <input
                  className="block w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-gray-200 bg-white placeholder-gray-400 text-gray-900 focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] shadow-md"
                  placeholder="Search resources, templates, or guides..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="sm:w-48">
                <select
                  className="block w-full py-2.5 pl-3 pr-8 text-sm rounded-lg border border-gray-200 bg-white text-gray-700 font-medium focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] shadow-md"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="getting-started">Getting Started</option>
                  <option value="training">Training &amp; Education</option>
                  <option value="business">Business &amp; Ops</option>
                  <option value="equipment">Tools &amp; Equipment</option>
                  <option value="safety">Safety &amp; Compliance</option>
                  <option value="templates">Templates &amp; Forms</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar Navigation / Category Filters */}
            <aside className="lg:col-span-3 space-y-1.5 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm" data-purpose="category-filters">
              {/* Active Filter Button */}
              <button 
                onClick={() => setActiveCategory('all')}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold rounded-xl shadow-sm transition-colors text-left cursor-pointer ${activeCategory === 'all' ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-current opacity-80" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                  All Resources
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${activeCategory === 'all' ? 'bg-white/20' : 'bg-slate-100'}`}>18</span>
              </button>
              {/* Filter Item */}
              <button 
                onClick={() => setActiveCategory('getting-started')}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-left cursor-pointer ${activeCategory === 'getting-started' ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Getting Started
                </span>
              </button>
              {/* Filter Item */}
              <button 
                onClick={() => setActiveCategory('training')}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-left cursor-pointer ${activeCategory === 'training' ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Training &amp; Education
                </span>
              </button>
              {/* Filter Item */}
              <button 
                onClick={() => setActiveCategory('business')}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-left cursor-pointer ${activeCategory === 'business' ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Business Growth
                </span>
              </button>
              {/* Filter Item */}
              <button 
                onClick={() => setActiveCategory('marketing')}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-left cursor-pointer ${activeCategory === 'marketing' ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Marketing
                </span>
              </button>
              {/* Filter Item */}
              <button 
                onClick={() => setActiveCategory('operations')}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-left cursor-pointer ${activeCategory === 'operations' ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Operations
                </span>
              </button>
              {/* Filter Item */}
              <button 
                onClick={() => setActiveCategory('compliance')}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-left cursor-pointer ${activeCategory === 'compliance' ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Compliance &amp; Legal
                </span>
              </button>
              {/* Filter Item */}
              <button 
                onClick={() => setActiveCategory('guides')}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-left cursor-pointer ${activeCategory === 'guides' ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Product Guides
                </span>
              </button>
              {/* Filter Item */}
              <button 
                onClick={() => setActiveCategory('videos')}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-left cursor-pointer ${activeCategory === 'videos' ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Video Tutorials
                </span>
              </button>
            </aside>

            {/* Right Content Grid: Resource Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-purpose="resource-cards-grid">
              {/* Card 1: Getting Started Guide */}
              <article className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">Getting Started Guide</h2>
                    <p className="text-sm text-slate-500 leading-relaxed">Step-by-step setup for your Leashed.io account.</p>
                  </div>
                </div>
                <div className="pt-6">
                  <button onClick={() => alert('Downloading Getting Started Guide PDF...')} className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer">
                    Download PDF <span className="ml-1.5">→</span>
                  </button>
                </div>
              </article>

              {/* Card 2: Salon Setup Checklist */}
              <article className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">Salon Setup Checklist</h2>
                    <p className="text-sm text-slate-500 leading-relaxed">Everything you need before your first appointment.</p>
                  </div>
                </div>
                <div className="pt-6">
                  <button onClick={() => alert('Downloading Salon Setup Checklist PDF...')} className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer">
                    Download PDF <span className="ml-1.5">→</span>
                  </button>
                </div>
              </article>

              {/* Card 3: Business Plan Template */}
              <article className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">Business Plan Template</h2>
                    <p className="text-sm text-slate-500 leading-relaxed">Build your dream with a proven template.</p>
                  </div>
                </div>
                <div className="pt-6">
                  <button onClick={() => alert('Downloading Business Plan Template PDF...')} className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer">
                    Download PDF <span className="ml-1.5">→</span>
                  </button>
                </div>
              </article>

              {/* Card 4: Marketing Toolkit */}
              <article className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">Marketing Toolkit</h2>
                    <p className="text-sm text-slate-500 leading-relaxed">Attract and retain more clients with these ready-to-use tools.</p>
                  </div>
                </div>
                <div className="pt-6">
                  <button onClick={() => alert('Downloading Marketing Toolkit ZIP...')} className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer">
                    Download ZIP <span className="ml-1.5">→</span>
                  </button>
                </div>
              </article>

              {/* Card 5: Grooming Best Practices */}
              <article className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">Grooming Best Practices</h2>
                    <p className="text-sm text-slate-500 leading-relaxed">Keep pets safe, healthy, and looking their best.</p>
                  </div>
                </div>
                <div className="pt-6">
                  <button onClick={() => onNavigateToTab('training')} className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer">
                    View Guide <span className="ml-1.5">→</span>
                  </button>
                </div>
              </article>

              {/* Card 6: Video Tutorials */}
              <article className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-200 transition-all flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">Video Tutorials</h2>
                    <p className="text-sm text-slate-500 leading-relaxed">Short, easy-to-follow videos for common tasks.</p>
                  </div>
                </div>
                <div className="pt-6">
                  <button onClick={() => onNavigateToTab('academy')} className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group-hover:translate-x-1 duration-200 cursor-pointer">
                    Watch Now <span className="ml-1.5">→</span>
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* END: MainContentGrid */}
      </main>

      {/* FOOTER & IMPACT SECTION (EXACT AS ACADEMY) */}
      <SharedFooter onNavigateToTab={onNavigateToTab} />
    </div>
  );
};
