'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, ArrowRight } from 'lucide-react';
import { NavTab } from '@/components/Navbar';
import { AuthUser } from '@/components/auth/AuthModal';
import { SharedHeader } from '@/components/layout/SharedHeader';
import { SharedFooter } from '@/components/layout/SharedFooter';

interface SupportPageViewProps {
  onNavigateToTab: (tab: NavTab) => void;
  onOpenAuth?: (mode: 'signin' | 'signup', gateMessage?: string) => void;
  currentUser?: AuthUser | null;
}

export const SupportPageView: React.FC<SupportPageViewProps> = ({
  onNavigateToTab,
  onOpenAuth,
  currentUser,
}) => {
  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased min-h-screen flex flex-col justify-between font-sans selection:bg-blue-100 selection:text-blue-700">
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
            currentTab="support"
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
                  HELP CENTER &amp; ASSISTANCE
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight text-white leading-[1.02]">
                We&apos;re Here When
                <br />
                <span className="text-[#34d399]">You Need Us.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                Get the guidance you need, when you need it. Our dedicated support team is committed to your success — with multiple direct ways to reach us.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="mailto:support@leashed.io"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold bg-[#0070f3] hover:bg-blue-600 text-white shadow-md transition-all duration-150 group"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
                <button 
                  onClick={() => {
                    const el = document.getElementById('topics-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-white transition-all duration-150 cursor-pointer"
                >
                  Explore Help Center
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

        {/* BEGIN: SupportChannelsGrid */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between text-center items-center group transition-all duration-300 hover:shadow-xl hover:border-blue-100">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Help Center</h3>
                  <p className="text-sm text-slate-600 px-2">Browse our knowledge base for quick answers.</p>
                </div>
                <button 
                  onClick={() => {
                    const el = document.getElementById('topics-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Visit Help Center →
                </button>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between text-center items-center group transition-all duration-300 hover:shadow-xl hover:border-blue-100">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Live Chat</h3>
                  <p className="text-sm text-slate-600 px-2">Chat with our support team during business hours.</p>
                </div>
                <a 
                  href="mailto:support@leashed.io?subject=Live%20Chat%20Inquiry"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  Start Chat →
                </a>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between text-center items-center group transition-all duration-300 hover:shadow-xl hover:border-blue-100">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Email Support</h3>
                  <p className="text-sm text-slate-600 px-2">Send us a message and we&apos;ll get back to you.</p>
                </div>
                <a 
                  href="mailto:support@leashed.io"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  Email Us →
                </a>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between text-center items-center group transition-all duration-300 hover:shadow-xl hover:border-blue-100">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Phone Support</h3>
                  <p className="text-sm text-slate-600 px-2">Speak with a real person for urgent issues.</p>
                </div>
                <a 
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm" 
                  href="tel:18005550133"
                >
                  Call 1-800-555-0133
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* END: SupportChannelsGrid */}

        {/* BEGIN: TopicsAndAssistance */}
        <section id="topics-section" className="py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Popular Help Topics */}
              <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Popular Help Topics</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {/* Topic 1 */}
                    <div className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group cursor-pointer">
                      <span className="text-blue-500 font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span className="text-sm font-medium">Getting Started</span>
                    </div>
                    {/* Topic 2 */}
                    <div className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group cursor-pointer">
                      <span className="text-blue-500 font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span className="text-sm font-medium">Reports &amp; Analytics</span>
                    </div>
                    {/* Topic 3 */}
                    <div className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group cursor-pointer">
                      <span className="text-blue-500 font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span className="text-sm font-medium">Scheduling Appointments</span>
                    </div>
                    {/* Topic 4 */}
                    <div className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group cursor-pointer">
                      <span className="text-blue-500 font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span className="text-sm font-medium">Integrations</span>
                    </div>
                    {/* Topic 5 */}
                    <div className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group cursor-pointer">
                      <span className="text-blue-500 font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span className="text-sm font-medium">Processing Payments</span>
                    </div>
                    {/* Topic 6 */}
                    <div className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group cursor-pointer">
                      <span className="text-blue-500 font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span className="text-sm font-medium">Troubleshooting</span>
                    </div>
                    {/* Topic 7 */}
                    <div className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group cursor-pointer">
                      <span className="text-blue-500 font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span className="text-sm font-medium">Managing Inventory</span>
                    </div>
                    {/* Topic 8 */}
                    <div className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group cursor-pointer">
                      <span className="text-blue-500 font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span className="text-sm font-medium">Billing &amp; Subscription</span>
                    </div>
                    {/* Topic 9 */}
                    <div className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group cursor-pointer">
                      <span className="text-blue-500 font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span className="text-sm font-medium">Staff &amp; Permissions</span>
                    </div>
                    {/* Topic 10 */}
                    <div className="flex items-center space-x-3 text-slate-700 hover:text-blue-600 transition-colors group cursor-pointer">
                      <span className="text-blue-500 font-bold group-hover:translate-x-0.5 transition-transform">›</span>
                      <span className="text-sm font-medium">Account Security</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Need Additional Help */}
              <div className="lg:col-span-4 bg-gradient-to-b from-blue-50 to-indigo-50/40 p-8 sm:p-10 rounded-3xl border border-blue-100/70 flex flex-col justify-center items-center text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-white shadow-sm border border-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM6.5 5C5.4 5 4.5 5.9 4.5 7C4.5 8.1 5.4 9 6.5 9C7.6 9 8.5 8.1 8.5 7C8.5 5.9 7.6 5 6.5 5ZM17.5 5C16.4 5 15.5 5.9 15.5 7C15.5 8.1 16.4 9 17.5 9C18.6 9 19.5 8.1 19.5 7C19.5 5.9 18.6 5 17.5 5ZM12 7.5C9.5 7.5 7.5 9.5 7.5 12C7.5 13.8 8.6 15.4 10.2 16.1C10.7 16.3 11 16.8 11 17.3V21C11 21.6 11.4 22 12 22C12.6 22 13 21.6 13 21V17.3C13 16.8 13.3 16.3 13.8 16.1C15.4 15.4 16.5 13.8 16.5 12C16.5 9.5 14.5 7.5 12 7.5Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Need additional help?</h3>
                <p className="text-sm text-slate-600 mb-8 max-w-xs leading-relaxed">
                  Our support team is available <br className="hidden sm:block" />Monday – Friday, 8am – 6pm EST.
                </p>
                <a 
                  href="mailto:support@leashed.io"
                  className="w-full max-w-xs inline-flex items-center justify-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors"
                >
                  Contact Support →
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* END: TopicsAndAssistance */}

        {/* BEGIN: BannerCTA */}
        <section className="pb-16 pt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJhko5mXT3hxlDGYMsTI3zdn_wP0NviXvXcBIzjUu7fuvVW3364RMI1FsD5w9J3RrwZ4FnJ9masiKJ3G3Sh64m5HakrxTEfFgeP9s_m_3FF53q-9EmatMMLlkrLID842WZf4c1fJnYCJVZXg84N4WnUwgSe9grHSstiHA2-qrid5kt5QZjyG-rwrnUP3Tq7FarLz6EVHk5RJEW_NcNUl9sairmfcTnTjLBvFskuX5vmwk1lAeRT8ekxSzfhQYM6VP2Pg" 
                  alt="Pet grooming care" 
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover object-right"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b132b] via-[#0b132b]/90 to-transparent"></div>
              </div>
              <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 max-w-2xl">
                <span className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2">Always by your side</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">Your Success. Our Mission.</h2>
                <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">Questions? We&apos;re here to help. Get the answers you need and keep your business running smoothly.</p>
                <a 
                  href="mailto:support@leashed.io"
                  className="inline-flex items-center justify-center py-3.5 px-8 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-xl shadow-lg transition-all duration-200"
                >
                  Contact Support →
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* END: BannerCTA */}
      </main>

      {/* FOOTER & IMPACT SECTION (EXACT AS ACADEMY) */}
      <SharedFooter onNavigateToTab={onNavigateToTab} />
    </div>
  );
};
