'use client';

import React from 'react';
import Image from 'next/image';
import { NavTab } from '@/components/Navbar';
import { AuthUser } from '@/components/auth/AuthModal';
import { SharedHeader } from '@/components/layout/SharedHeader';
import { SharedFooter } from '@/components/layout/SharedFooter';

interface HomePageViewProps {
  onNavigateToTab: (tab: NavTab) => void;
  onOpenAuth?: (mode: 'signin' | 'signup', gateMessage?: string) => void;
  currentUser?: AuthUser | null;
}

export const HomePageView: React.FC<HomePageViewProps> = ({
  onNavigateToTab,
  onOpenAuth,
  currentUser,
}) => {
  return (
    <div className="bg-[#eef2f6] text-slate-800 font-sans antialiased overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* ========================================================================= */}
      {/* 1. HERO & TOP NAVIGATION (FULL BLEED - EXACT SYMMETRY WITH ACADEMY) */}
      {/* ========================================================================= */}
      <header className="relative w-full bg-[#0c1626] text-white overflow-hidden">
        {/* Hero Background Image & Gradient Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/assets/hero-ALLPAGES.jpeg"
              alt="Hero groomer and dog"
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
          {/* Navigation Bar */}
          <SharedHeader
            currentTab="home"
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
                  THE COMPLETE SOLUTION FOR MODERN GROOMERS
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight text-white leading-[1.02]">
                Train. Manage. Grow.
                <br />
                <span className="text-[#34d399]">All in One Platform.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                <strong className="text-white font-semibold">Leashed.io</strong> gives you the best of both worlds — a world-class academy to build your skills and a powerful groomer management system to run your business. Learn, get certified, and manage your salon with ease.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => onOpenAuth ? onOpenAuth('signup') : onNavigateToTab('auth')}
                  className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold text-[15px] text-white flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
                >
                  <span>Start Your Journey</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                </button>
                <button 
                  onClick={() => onNavigateToTab('academy')}
                  className="px-6 py-3.5 bg-[#0a1b33]/90 hover:bg-[#112440] border border-slate-700/80 rounded-full font-semibold text-[15px] text-slate-200 flex items-center gap-2.5 transition-colors backdrop-blur-sm cursor-pointer"
                >
                  <svg className="w-4 h-4 text-slate-300 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                  <span>Watch How It Works</span>
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
        {/* BEGIN: 5FeatureBar */}
        <section className="bg-white border-b border-slate-200 py-6 px-6 relative z-20 shadow-sm">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {/* Feature 1 */}
            <div 
              onClick={() => onNavigateToTab('academy')}
              className="flex items-start gap-3.5 pt-4 lg:pt-0 lg:px-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full bg-[#5b52e0] flex-shrink-0 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[14.5px] text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">Professional Academy</h4>
                <p className="text-[12.5px] text-slate-500 mt-1 leading-snug">Learn grooming, business, and life skills with expert-led, on-demand training.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div 
              onClick={() => onNavigateToTab('software')}
              className="flex items-start gap-3.5 pt-4 lg:pt-0 lg:px-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full bg-[#00ba88] flex-shrink-0 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[14.5px] text-slate-900 leading-tight group-hover:text-teal-600 transition-colors">Powerful Software</h4>
                <p className="text-[12.5px] text-slate-500 mt-1 leading-snug">Manage clients, appointments, payments, inventory, and more.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div 
              onClick={() => onNavigateToTab('training')}
              className="flex items-start gap-3.5 pt-4 lg:pt-0 lg:px-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full bg-[#0082fb] flex-shrink-0 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[14.5px] text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">Get Certified</h4>
                <p className="text-[12.5px] text-slate-500 mt-1 leading-snug">Earn credentials and unlock new opportunities.</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div 
              onClick={() => onNavigateToTab('paths')}
              className="flex items-start gap-3.5 pt-4 lg:pt-0 lg:px-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full bg-[#f68b1e] flex-shrink-0 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[14.5px] text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">Grow Your Business</h4>
                <p className="text-[12.5px] text-slate-500 mt-1 leading-snug">Launch your salon, mobile unit, or pet care brand.</p>
              </div>
            </div>
            {/* Feature 5 */}
            <div 
              onClick={() => onNavigateToTab('about')}
              className="flex items-start gap-3.5 pt-4 lg:pt-0 lg:px-3 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full bg-[#00a3b4] flex-shrink-0 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[14.5px] text-slate-900 leading-tight group-hover:text-cyan-600 transition-colors">Build Community</h4>
                <p className="text-[12.5px] text-slate-500 mt-1 leading-snug">Join a network of groomers, mentors, and partners.</p>
              </div>
            </div>
          </div>
        </section>
        {/* END: 5FeatureBar */}

        {/* BEGIN: SplitProductSection */}
        <section className="py-16 lg:py-20 px-6 max-w-[1440px] mx-auto" data-purpose="product-presentation">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
            {/* Left Column: Copy & Checklist (3.5 cols) */}
            <div className="xl:col-span-3 space-y-6">
              <h2 className="text-3xl lg:text-[34px] font-extrabold text-[#07162c] leading-[1.2] tracking-tight">
                Everything You Need to Succeed Together
              </h2>
              <p className="text-[14px] leading-relaxed text-slate-600">
                Whether you&apos;re just starting or ready to scale, Leashed.io combines hands-on training with industry-leading management tools to help you build a sustainable business.
              </p>
              {/* Checklist */}
              <ul className="space-y-3.5 pt-1 text-[13.5px] font-medium text-slate-700">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                    </svg>
                  </span>
                  <span>Industry-recognized training &amp; certifications</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                    </svg>
                  </span>
                  <span>All-in-one business management system</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                    </svg>
                  </span>
                  <span>Ongoing support &amp; mentorship</span>
                </li>
              </ul>
              {/* Action Button */}
              <div className="pt-3">
                <button 
                  onClick={() => onNavigateToTab('software')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#07162c] hover:bg-slate-900 text-white rounded-full text-sm font-bold shadow-md shadow-slate-900/20 transition-all cursor-pointer"
                >
                  <span>Explore the Platform</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Center Column: Realistic SaaS Dashboard Mockup (6.5 cols) */}
            <div className="xl:col-span-6 bg-white rounded-2xl shadow-xl shadow-slate-300/60 border border-slate-200 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
              {/* App Mini Sidebar */}
              <aside className="w-full md:w-44 bg-[#0a1829] p-3 text-slate-400 text-xs flex flex-col justify-between flex-shrink-0">
                <div className="space-y-4">
                  {/* Navigation Items */}
                  <nav className="space-y-1">
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-blue-600/30 text-white font-medium cursor-pointer">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      <span>Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded hover:text-white transition-colors cursor-pointer">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      <span>Customers</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded hover:text-white transition-colors cursor-pointer">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      <span>Appointments</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded hover:text-white transition-colors cursor-pointer">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      <span>Pets</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded hover:text-white transition-colors cursor-pointer">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      <span>Services</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded hover:text-white transition-colors cursor-pointer">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      <span>Inventory</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded hover:text-white transition-colors cursor-pointer">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      <span>Payments</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-2.5 py-1.5 rounded hover:text-white transition-colors cursor-pointer">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      <span>Reports</span>
                    </div>
                    <div 
                      onClick={() => onNavigateToTab('academy')}
                      className="flex items-center gap-2.5 px-2.5 py-1.5 rounded hover:text-white transition-colors text-cyan-400 cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                      <span>Academy</span>
                    </div>
                  </nav>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2 px-2 py-1 text-slate-400 hover:text-white cursor-pointer">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <span>Settings</span>
                  </div>
                </div>
              </aside>

              {/* App Main Content Area */}
              <div className="flex-1 bg-[#f9fafc] p-4 flex flex-col justify-between overflow-x-auto">
                {/* Top App Bar */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 leading-none">Good Morning, Taylor!</h3>
                    <p className="text-[10.5px] text-slate-400 mt-0.5">Here&apos;s what&apos;s happening at your salon today.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-[10px] font-bold text-blue-700">TS</div>
                      <div className="text-left">
                        <div className="text-[10px] font-bold leading-tight">Taylor Smith</div>
                        <div className="text-[8px] text-slate-400 leading-none">Salon Owner</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 mt-3">
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs">
                    <span className="text-[9.5px] text-slate-500 font-medium block">Today&apos;s Appointments</span>
                    <div className="text-lg font-extrabold text-slate-800 mt-0.5">12</div>
                    <span className="text-[8.5px] text-emerald-600 font-semibold">+2 from yesterday</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs">
                    <span className="text-[9.5px] text-slate-500 font-medium block">Revenue Today</span>
                    <div className="text-lg font-extrabold text-slate-800 mt-0.5">$842</div>
                    <span className="text-[8.5px] text-emerald-600 font-semibold">+18% from yesterday</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-xs">
                    <span className="text-[9.5px] text-slate-500 font-medium block">New Customers</span>
                    <div className="text-lg font-extrabold text-slate-800 mt-0.5">3</div>
                    <span className="text-[8.5px] text-emerald-600 font-semibold">+50% from last week</span>
                  </div>
                </div>

                {/* Mid Section: Appointments Table + Academy Progress Widget */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-3">
                  {/* Appointments Table */}
                  <div className="md:col-span-7 bg-white rounded-lg border border-slate-200/80 p-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="text-[11px] font-bold text-slate-800">Upcoming Appointments</span>
                      <button onClick={() => onNavigateToTab('software')} className="text-[9.5px] text-blue-600 font-semibold cursor-pointer">View All</button>
                    </div>
                    <div className="divide-y divide-slate-100 text-[10px]">
                      <div className="py-1.5 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-slate-700">9:00 AM</span>
                          <span className="ml-2 font-medium text-slate-800">Luna &amp; Bella</span>
                          <span className="text-slate-400 block text-[8.5px]">Full Grooming</span>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[9px] font-medium">Confirmed</span>
                      </div>
                      <div className="py-1.5 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-slate-700">10:30 AM</span>
                          <span className="ml-2 font-medium text-slate-800">Max</span>
                          <span className="text-slate-400 block text-[8.5px]">Bath &amp; Brush</span>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[9px] font-medium">Confirmed</span>
                      </div>
                      <div className="py-1.5 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-slate-700">12:00 PM</span>
                          <span className="ml-2 font-medium text-slate-800">Daisy</span>
                          <span className="text-slate-400 block text-[8.5px]">Nail Trim</span>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[9px] font-medium">Confirmed</span>
                      </div>
                      <div className="py-1.5 flex items-center justify-between">
                        <div>
                          <span className="font-bold text-slate-700">2:00 PM</span>
                          <span className="ml-2 font-medium text-slate-800">Charlie</span>
                          <span className="text-slate-400 block text-[8.5px]">De-shedding</span>
                        </div>
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded text-[9px] font-medium">Confirmed</span>
                      </div>
                    </div>
                  </div>

                  {/* Academy Progress Gauge Card */}
                  <div className="md:col-span-5 bg-white rounded-lg border border-slate-200/80 p-2.5 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-slate-800 block">Your Academy Progress</span>
                      {/* Circular gauge approximation */}
                      <div className="flex items-center justify-center my-2">
                        <div className="relative w-16 h-16 rounded-full border-4 border-slate-100 border-t-cyan-400 border-r-cyan-400 flex items-center justify-center">
                          <span className="text-xs font-bold text-slate-800">68%</span>
                        </div>
                      </div>
                      <span className="text-[9px] text-slate-400 text-center block">3 of 6 months</span>
                      {/* Modules mini list */}
                      <div className="mt-2 space-y-1 text-[9px]">
                        <div className="flex justify-between text-slate-600">
                          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Life Skills</span>
                          <span className="font-bold">100%</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Pet Grooming</span>
                          <span className="font-bold">72%</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Business</span>
                          <span className="font-bold">45%</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> AI &amp; Tech</span>
                          <span className="font-bold">20%</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => onNavigateToTab('academy')}
                      className="mt-2 w-full py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10px] font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer" 
                      type="button"
                    >
                      <span>Continue Learning</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Quick Actions Grid */}
                <div className="mt-3 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-700 block mb-1.5">Quick Actions</span>
                  <div className="grid grid-cols-4 gap-2 text-center text-[9px]">
                    <div onClick={() => onNavigateToTab('software')} className="bg-slate-50 hover:bg-slate-100 p-1.5 rounded border border-slate-100 cursor-pointer">
                      <div className="w-5 h-5 mx-auto mb-1 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </div>
                      <span className="text-slate-600">New Appt.</span>
                    </div>
                    <div onClick={() => onNavigateToTab('software')} className="bg-slate-50 hover:bg-slate-100 p-1.5 rounded border border-slate-100 cursor-pointer">
                      <div className="w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </div>
                      <span className="text-slate-600">Add Cust.</span>
                    </div>
                    <div onClick={() => onNavigateToTab('software')} className="bg-slate-50 hover:bg-slate-100 p-1.5 rounded border border-slate-100 cursor-pointer">
                      <div className="w-5 h-5 mx-auto mb-1 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </div>
                      <span className="text-slate-600">Add Pet</span>
                    </div>
                    <div onClick={() => onNavigateToTab('software')} className="bg-slate-50 hover:bg-slate-100 p-1.5 rounded border border-slate-100 cursor-pointer">
                      <div className="w-5 h-5 mx-auto mb-1 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                      </div>
                      <span className="text-slate-600">Payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: "Built for Groomers" Features (2.5 cols) */}
            <div className="xl:col-span-3 space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-[#07162c] tracking-tight leading-tight">
                  Built for Groomers,<br />By Groomers.
                </h3>
              </div>
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-blue-600 shadow-xs flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 leading-tight">Easy-to-use interface</h5>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">Spend less time on admin.</p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-blue-600 shadow-xs flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 leading-tight">Secure &amp; reliable</h5>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">Keep your data safe.</p>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-blue-600 shadow-xs flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 leading-tight">Accessible anywhere</h5>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">Work from any device.</p>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-blue-600 shadow-xs flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 leading-tight">Scales with you</h5>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug">From solo groomer to multi-location.</p>
                  </div>
                </div>
              </div>
              {/* Handwritten Script Endorsement */}
              <div className="pt-2">
                <div className="font-handwriting text-2xl text-[#0a192f] leading-snug font-bold">
                  More than software.<br />
                  It&apos;s your business partner. 🐾
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: SplitProductSection */}
      </main>

      {/* FOOTER & IMPACT SECTION (EXACT AS ACADEMY) */}
      <SharedFooter onNavigateToTab={onNavigateToTab} />
    </div>
  );
};

