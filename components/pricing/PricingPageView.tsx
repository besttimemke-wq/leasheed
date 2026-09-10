'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, BarChart3, Sparkles, Cpu, Check } from 'lucide-react';
import { NavTab } from '@/components/Navbar';
import { AuthUser } from '@/components/auth/AuthModal';
import { SharedHeader } from '@/components/layout/SharedHeader';
import { SharedFooter } from '@/components/layout/SharedFooter';

interface PricingPageViewProps {
  onNavigateToTab: (tab: NavTab) => void;
  onOpenAuth?: (mode: 'signin' | 'signup', gateMessage?: string) => void;
  currentUser?: AuthUser | null;
}

export const PricingPageView: React.FC<PricingPageViewProps> = ({
  onNavigateToTab,
  onOpenAuth,
  currentUser,
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-blue-100 selection:text-blue-700">
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
            currentTab="pricing"
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
                  PLANS &amp; PRICING
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight text-white leading-[1.02]">
                Simple, transparent pricing.
                <br />
                <span className="text-[#34d399]">No hidden fees.</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
                Choose the plan that fits your business. All plans include core features, with advanced options for growing salons and multi-location operations.
              </p>

              {/* Billing Period Toggle */}
              <div className="pt-2">
                <div className="inline-flex items-center p-1.5 bg-slate-900/80 backdrop-blur-sm border border-slate-700/80 rounded-full shadow-inner">
                  <button 
                    onClick={() => setBillingPeriod('monthly')}
                    className={`px-5 py-2 text-sm font-bold rounded-full cursor-pointer transition ${billingPeriod === 'monthly' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'}`}
                    type="button"
                  >
                    Monthly
                  </button>
                  <button 
                    onClick={() => setBillingPeriod('yearly')}
                    className={`px-5 py-2 text-sm font-bold flex items-center gap-2 cursor-pointer transition ${billingPeriod === 'yearly' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-300 hover:text-white'}`}
                    type="button"
                  >
                    Yearly
                    <span className="inline-block bg-emerald-400 text-slate-950 text-[11px] font-extrabold px-2 py-0.5 rounded-full">Save 20%</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right column empty - natural hero image shows */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
          </div>
        </div>
      </header>
      {/* END: Hero & Top Navigation */}

      <main className="flex-grow pt-12">
        {/* BEGIN: PricingCardsSection */}
        <section className="max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:-translate-y-1 transition-transform duration-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Starter</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                    {billingPeriod === 'monthly' ? '$49' : '$39'}
                  </span>
                  <span className="ml-1 text-sm font-medium text-slate-500">/month</span>
                </div>
                <p className="mt-2 text-xs text-slate-500 min-h-[32px]">Perfect for solo groomers or small teams.</p>
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <ul className="space-y-3.5 text-sm text-slate-600">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Up to 2 staff members</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Online booking</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Client &amp; pet profiles</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Basic reporting</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-4">
                <button 
                  onClick={() => onOpenAuth ? onOpenAuth('signup', 'Sign up to activate your Starter plan') : onNavigateToTab('auth')}
                  className="block w-full text-center py-2.5 px-4 rounded-lg border border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Professional Plan (Featured) */}
            <div className="relative bg-white rounded-2xl border-2 border-blue-600 p-6 flex flex-col justify-between shadow-lg shadow-blue-50 hover:-translate-y-1 transition-transform duration-200">
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Most Popular
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Professional</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                    {billingPeriod === 'monthly' ? '$99' : '$79'}
                  </span>
                  <span className="ml-1 text-sm font-medium text-slate-500">/month</span>
                </div>
                <p className="mt-2 text-xs text-slate-500 min-h-[32px]">Ideal for growing businesses.</p>
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <ul className="space-y-3.5 text-sm text-slate-600">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Up to 10 staff members</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Advanced scheduling</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Inventory management</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Payment processing</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Detailed reports</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-4">
                <button 
                  onClick={() => onOpenAuth ? onOpenAuth('signup', 'Sign up to start your 14-day trial of Professional') : onNavigateToTab('auth')}
                  className="block w-full text-center py-2.5 px-4 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:-translate-y-1 transition-transform duration-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Business</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                    {billingPeriod === 'monthly' ? '$149' : '$119'}
                  </span>
                  <span className="ml-1 text-sm font-medium text-slate-500">/month</span>
                </div>
                <p className="mt-2 text-xs text-slate-500 min-h-[32px]">For multi-location or high-volume salons.</p>
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <ul className="space-y-3.5 text-sm text-slate-600">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Unlimited staff members</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Multi-location support</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Payroll integration</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Custom branding</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-4">
                <button 
                  onClick={() => onOpenAuth ? onOpenAuth('signup', 'Sign up to start your Business plan') : onNavigateToTab('auth')}
                  className="block w-full text-center py-2.5 px-4 rounded-lg border border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:-translate-y-1 transition-transform duration-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Enterprise</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">Custom</span>
                </div>
                <p className="mt-2 text-xs text-slate-500 min-h-[32px]">For large organizations and franchises.</p>
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <ul className="space-y-3.5 text-sm text-slate-600">
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Everything in Business</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>White-label options</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>24/7 support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-4">
                <button 
                  onClick={() => onNavigateToTab('support')}
                  className="block w-full text-center py-2.5 px-4 rounded-lg border border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* END: PricingCardsSection */}

        {/* BEGIN: AddOnsSection with Sleek Icons */}
        <section className="max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Add-Ons &amp; Additional Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">Additional Location</p>
                  <p className="text-xs text-slate-500">$25/month per location</p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">Advanced Analytics</p>
                  <p className="text-xs text-slate-500">$30/month</p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">AI Assistant</p>
                  <p className="text-xs text-slate-500">$15/month</p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">Custom Integrations</p>
                  <p className="text-xs text-slate-500">$50/month</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER & IMPACT SECTION (EXACT AS ACADEMY) */}
      <SharedFooter onNavigateToTab={onNavigateToTab} />
    </div>
  );
};

