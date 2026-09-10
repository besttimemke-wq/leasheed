'use client';

import React from 'react';
import Image from 'next/image';
import { NavTab } from '@/components/Navbar';
import { AuthUser } from '@/components/auth/AuthModal';
import { SharedHeader } from '@/components/layout/SharedHeader';
import { SharedFooter } from '@/components/layout/SharedFooter';

interface PathwaysPageViewProps {
  onNavigateToTab: (tab: NavTab) => void;
  onOpenAuth?: (mode: 'signin' | 'signup', gateMessage?: string) => void;
  currentUser?: AuthUser | null;
}

export const PathwaysPageView: React.FC<PathwaysPageViewProps> = ({
  onNavigateToTab,
  onOpenAuth,
  currentUser,
}) => {
  const pathways = [
    {
      title: 'Life Skills & Personal Readiness',
      desc: 'Build the foundation for success in work and life.',
      iconBg: 'bg-teal-50 text-teal-600',
    },
    {
      title: 'Pet Grooming & Animal Care',
      desc: 'Learn hands-on grooming and animal care skills.',
      iconBg: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Business & Leadership',
      desc: 'Develop the skills to run and grow a business.',
      iconBg: 'bg-sky-50 text-sky-600',
    },
    {
      title: 'Partner Programs & Workforce Transition',
      desc: 'Access partner resources and career transition support.',
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Personal Mastery & Lifelong Growth',
      desc: 'Build confidence and achieve your goals.',
      iconBg: 'bg-rose-50 text-rose-500',
    },
    {
      title: 'Marketing, Branding & SEO Mastery',
      desc: 'Learn to promote your business and grow your audience.',
      iconBg: 'bg-amber-50 text-amber-600',
    },
    {
      title: 'AI & Technology Systems',
      desc: 'Use technology to work smarter and increase efficiency.',
      iconBg: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Financial Mastery, Bookkeeping & Tax Strategy',
      desc: 'Manage your money and plan for long-term success.',
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      title: 'Business Leadership, Operations & Expansion',
      desc: 'Scale your business and lead with confidence.',
      iconBg: 'bg-sky-50 text-sky-600',
    },
    {
      title: 'Legal, Risk, Compliance & Ethical Governance',
      desc: 'Protect your business and build with integrity.',
      iconBg: 'bg-indigo-50 text-indigo-600',
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased min-h-screen flex flex-col font-sans justify-between">
      {/* ========================================================================= */}
      {/* 1. HERO & TOP NAVIGATION (FULL BLEED - EXACT SYMMETRY WITH ACADEMY) */}
      {/* ========================================================================= */}
      <header className="relative w-full bg-[#0c1626] text-white overflow-hidden">
        {/* Hero Background Image & Gradient Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero-ALLPAGES.jpeg"
              alt="Woman grooming golden retriever dog happily"
              fill
              priority
              referrerPolicy="no-referrer"
              className="object-cover object-right-top opacity-75 filter saturate-105"
            />
          </div>
          {/* Soft darkening overlay */}
          <div className="absolute inset-0 hero-gradient-overlay" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Standardized Header */}
          <SharedHeader
            currentTab="paths"
            onNavigateToTab={onNavigateToTab}
            onOpenAuth={onOpenAuth}
            currentUser={currentUser}
          />

          {/* Hero Main Content Area - IDENTICAL SYMMETRY */}
          <div className="py-16 md:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Column: Value Proposition */}
            <div className="lg:col-span-8 xl:col-span-7 space-y-6">
              <div className="inline-block">
                <span className="text-[#34d399] tracking-wider uppercase text-xs sm:text-sm font-extrabold px-1">
                  10 CAREER PATHWAYS
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight text-white leading-[1.02]">
                10 Pathways.
                <br />
                <span className="text-[#34d399]">One Mission.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                Choose from 10 specialized pathways designed to help you build skills, explore opportunities, and create a better future. Each pathway includes 20 courses, 10 modules per course, and hands-on, real-world learning.
              </p>

              {/* Stats Bar */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-slate-700/60 max-w-xl">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">10</p>
                  <p className="text-xs font-medium text-slate-300 mt-0.5">Pathways</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">200</p>
                  <p className="text-xs font-medium text-slate-300 mt-0.5">Total Courses</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">2,000</p>
                  <p className="text-xs font-medium text-slate-300 mt-0.5">Total Modules</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">1,200</p>
                  <p className="text-xs font-medium text-slate-300 mt-0.5">Hours Learning</p>
                </div>
              </div>

              {/* NEW CTA: Hero Pathway CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigateToTab('academy')}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold bg-[#0070f3] hover:bg-blue-600 text-white shadow-md transition cursor-pointer group"
                >
                  <span>Browse 200-Course Directory</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigateToTab('training')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm shadow-sm transition cursor-pointer"
                >
                  View Training Schedule
                </button>
              </div>
            </div>

            {/* Right column empty - natural hero image shows */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
          </div>
        </div>
      </header>
      {/* END: Hero & Top Navigation */}

      <main className="flex-grow">
        {/* BEGIN: ExplorePathwaysSection */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Explore Our Pathways</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {pathways.map((path, idx) => (
              <div
                key={idx}
                onClick={() => onNavigateToTab('academy')}
                className="bg-white border border-slate-200/90 rounded-xl p-5 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition duration-200 cursor-pointer group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg ${path.iconBg} flex items-center justify-center mb-4 font-bold`}>
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-[15px] leading-snug text-slate-900 mb-1.5">{path.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{path.desc}</p>
                </div>
                <div className="pt-5 mt-auto flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>20 courses • 120 hours</span>
                  <span className="text-slate-400 group-hover:text-blue-600 font-bold">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* BEGIN: BottomCalloutBanner (New CTA Banner) */}
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center lg:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded bg-blue-50 text-[#0066cc] text-xs font-bold uppercase tracking-wider">
                10 Pathways • 200 Courses • 2,000 Modules
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Your Career-to-Ownership Journey Starts Today
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl">
                Choose any of our 10 specialized pathways to access 20 comprehensive courses, hands-on simulation modules, and capstone certifications.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button 
                onClick={() => onNavigateToTab('academy')}
                className="inline-flex items-center justify-center bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md cursor-pointer group"
              >
                <span>Browse All 200 Courses</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => onNavigateToTab('training')}
                className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold px-6 py-3.5 rounded-xl transition cursor-pointer"
              >
                <span>View Training Details</span>
              </button>
            </div>
          </div>
          {/* END: BottomCalloutBanner */}
        </div>
      </main>

      {/* FOOTER & IMPACT SECTION (EXACT AS ACADEMY) */}
      <SharedFooter onNavigateToTab={onNavigateToTab} />
    </div>
  );
};

