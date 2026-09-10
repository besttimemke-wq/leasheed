'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, BookOpen, Users, Sparkles, Award, ArrowRightCircle } from 'lucide-react';
import { NavTab } from '@/components/Navbar';
import { AuthUser } from '@/components/auth/AuthModal';
import { SharedHeader } from '@/components/layout/SharedHeader';
import { SharedFooter } from '@/components/layout/SharedFooter';

interface TrainingPageViewProps {
  onNavigateToTab: (tab: NavTab) => void;
  onOpenAuth?: (mode: 'signin' | 'signup', gateMessage?: string) => void;
  currentUser?: AuthUser | null;
}

export const TrainingPageView: React.FC<TrainingPageViewProps> = ({
  onNavigateToTab,
  onOpenAuth,
  currentUser,
}) => {
  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased min-h-screen flex flex-col justify-between selection:bg-blue-100 selection:text-blue-700">
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
            currentTab="training"
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
                  INDUSTRY ACCREDITED CURRICULUM
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight text-white leading-[1.02]">
                Real Skills.
                <br />
                Real Support.
                <br />
                <span className="text-[#34d399]">Real Opportunities.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                Our training program combines expert instruction, hands-on practice, and AI-powered learning tools to help you gain the skills, certifications, and confidence to build a career or launch your own business in the pet care industry.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button 
                  onClick={() => onNavigateToTab('academy')}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold bg-[#0070f3] hover:bg-blue-600 text-white shadow-md transition-all duration-150 cursor-pointer group"
                >
                  Explore Training
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => onNavigateToTab('academy')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm shadow-sm transition-all duration-150 cursor-pointer group"
                >
                  <BookOpen className="w-4 h-4 mr-2 text-[#34d399]" />
                  Browse 200-Course Catalog
                </button>
                <div className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 px-5 py-3 rounded-full text-xs font-semibold text-slate-200 shadow">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>Accredited Pet Care Curriculum</span>
                </div>
              </div>
            </div>

            {/* Right column empty - natural hero image shows */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
          </div>
        </div>
      </header>
      {/* END: Hero & Top Navigation */}

      <main className="flex-grow">
        {/* BEGIN: FeatureBadges */}
        <section className="border-b border-slate-100 bg-slate-50/50 py-8" data-purpose="feature-highlights">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-start space-x-4">
                <div className="flex-shrink-0 p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">Flexible Learning</h2>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">Learn on your schedule, anywhere.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-start space-x-4">
                <div className="flex-shrink-0 p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">Expert Instructors</h2>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">Get guidance from industry professionals.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-start space-x-4">
                <div className="flex-shrink-0 p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">AI-Powered Support</h2>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">Personalized help when you need it.</p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-start space-x-4">
                <div className="flex-shrink-0 p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">Certification</h2>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">Earn credentials that open doors.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: FeatureBadges */}

        {/* BEGIN: HowItWorks with connecting lines and arrows */}
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden" data-purpose="how-it-works-progression">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">How It Works</h2>
              <p className="text-sm text-slate-500 mt-1">A step-by-step roadmap from enrollment to career acceleration</p>
            </div>
            
            <div className="relative">
              {/* Desktop Connecting Line behind steps */}
              <div className="hidden lg:block absolute top-5 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-blue-300 via-teal-300 to-blue-400 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-start text-left group">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-md mb-4 ring-4 ring-white">
                    1
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <span>Choose Your Path</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline lg:hidden" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Select a pathway that matches your goals.</p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-start text-left group">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-md mb-4 ring-4 ring-white">
                    2
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <span>Complete Courses</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline lg:hidden" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Learn at your own pace with expert content.</p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-start text-left group">
                  <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-sm shadow-md mb-4 ring-4 ring-white">
                    3
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <span>Get Certified</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline lg:hidden" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Prove your skills with industry-recognized credentials.</p>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-start text-left group">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-md mb-4 ring-4 ring-white">
                    4
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                    <span>Launch Career</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden sm:inline lg:hidden" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Get job support or start your own business.</p>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-start text-left group">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-md mb-4 ring-4 ring-white">
                    5
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">Keep Growing</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">Access advanced training and ongoing resources.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: HowItWorks */}

        {/* BEGIN: TrainingOverviewCards */}
        <section className="py-14 bg-slate-50 border-t border-slate-200/60" data-purpose="training-overview-pillars">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Training Overview</h2>
              <p className="text-sm text-slate-500 mt-1">Our comprehensive training program is designed to take you from beginner to business owner.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Life Skills</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">Build the foundation for personal and professional success.</p>
                </div>
                <button 
                  onClick={() => onNavigateToTab('academy')}
                  className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer text-left"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-6.5-1c1.381 0 2.5-1.119 2.5-2.5S6.881 6 5.5 6 3 7.119 3 8.5 4.119 11 5.5 11zm13 0c1.381 0 2.5-1.119 2.5-2.5S19.881 6 18.5 6 16 7.119 16 8.5s1.119 2.5 2.5 2.5zM12 14c-3.314 0-6 2.462-6 5.5 0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5 0-3.038-2.686-5.5-6-5.5z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Pet Grooming &amp; Animal Care</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">Master the skills to care for and groom pets with confidence.</p>
                </div>
                <button 
                  onClick={() => onNavigateToTab('academy')}
                  className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer text-left"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Business &amp; Leadership</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">Gain the knowledge to run and grow a successful business.</p>
                </div>
                <button 
                  onClick={() => onNavigateToTab('academy')}
                  className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer text-left"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">AI &amp; Technology</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">Use modern tools to streamline and grow your reach.</p>
                </div>
                <button 
                  onClick={() => onNavigateToTab('academy')}
                  className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer text-left"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>

            {/* BEGIN: Training Catalog Action Banner (New CTA) */}
            <div className="mt-12 bg-gradient-to-r from-[#0c1626] to-[#1e293b] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700/60">
              <div className="space-y-2 max-w-xl text-center md:text-left">
                <span className="inline-block px-2.5 py-1 rounded bg-[#34d399]/20 text-[#34d399] text-xs font-extrabold tracking-wider uppercase">
                  Complete Curriculum
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Ready to explore all 200 accredited courses?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Browse by pathway, skill level, and capstone project. Each course delivers hands-on practical skills and industry certifications.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={() => onNavigateToTab('academy')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold bg-[#0070f3] hover:bg-blue-600 text-white shadow-md transition cursor-pointer"
                >
                  View Course Catalog (200)
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <button
                  onClick={() => onNavigateToTab('paths')}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition cursor-pointer"
                >
                  Explore 10 Pathways
                </button>
              </div>
            </div>
            {/* END: Training Catalog Action Banner */}
          </div>
        </section>
        {/* END: TrainingOverviewCards */}
      </main>

      {/* FOOTER & IMPACT SECTION (EXACT AS ACADEMY) */}
      <SharedFooter onNavigateToTab={onNavigateToTab} />
    </div>
  );
};

