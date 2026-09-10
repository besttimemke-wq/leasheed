'use client';

import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { NavTab } from '@/components/Navbar';
import { AuthUser } from '@/components/auth/AuthModal';

interface SharedHeaderProps {
  currentTab: NavTab;
  onNavigateToTab?: (tab: NavTab) => void;
  onOpenAuth?: (mode: 'signin' | 'signup', gateMessage?: string) => void;
  currentUser?: AuthUser | null;
  onOpenSearch?: () => void;
}

export const SharedHeader: React.FC<SharedHeaderProps> = ({
  currentTab,
  onNavigateToTab,
  onOpenAuth,
  currentUser,
  onOpenSearch,
}) => {
  const handleNav = (tab: NavTab) => {
    if (onNavigateToTab) {
      onNavigateToTab(tab);
    }
  };

  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50 bg-transparent border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          {/* Logo Container */}
          <Link
            href="/"
            onClick={() => handleNav('home')}
            className="flex items-center space-x-2.5 text-white group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 10.5c-.8 0-1.5.7-1.5 1.5 0 1.2 1.5 2.5 1.5 2.5s1.5-1.3 1.5-2.5c0-.8-.7-1.5-1.5-1.5z" />
                <ellipse cx="6.5" cy="8.5" rx="1.8" ry="2.2" transform="rotate(-20 6.5 8.5)" />
                <ellipse cx="10" cy="5.5" rx="1.8" ry="2.2" transform="rotate(-5 10 5.5)" />
                <ellipse cx="14" cy="5.5" rx="1.8" ry="2.2" transform="rotate(5 14 5.5)" />
                <ellipse cx="17.5" cy="8.5" rx="1.8" ry="2.2" transform="rotate(20 17.5 8.5)" />
                <path d="M12 9c-2.8 0-5 2-5 4.5 0 2.2 2 4 5 5.5 3-1.5 5-3.3 5-5.5 0-2.5-2.2-4.5-5-4.5zm0 5.8s-1.8-1.5-1.8-2.8c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c0 1.3-1.8 2.8-1.8 2.8z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">Leashed.io</span>
                <span className="text-[10px] text-gray-300 font-medium -mt-1 tracking-wider">Skills. Stability. Second Chances.</span>
              </div>
            </div>
          </Link>

          {/* Navigation Links - EXACT 9 ITEMS with App Router URLs */}
          <nav className="hidden md:flex items-center space-x-5 text-sm font-medium text-white/80">
            <Link
              href="/"
              onClick={() => handleNav('home')}
              className={
                currentTab === 'home'
                  ? 'text-white font-semibold relative py-1 border-b-2 border-blue-400 cursor-pointer'
                  : 'hover:text-white transition-colors cursor-pointer'
              }
            >
              Home
            </Link>
            <Link
              href="/academy"
              onClick={() => handleNav('academy')}
              className={
                currentTab === 'academy' || currentTab === 'landing'
                  ? 'text-white font-semibold relative py-1 border-b-2 border-blue-400 cursor-pointer'
                  : 'hover:text-white transition-colors cursor-pointer'
              }
            >
              Academy
            </Link>
            <Link
              href="/training"
              onClick={() => handleNav('training')}
              className={
                currentTab === 'training'
                  ? 'text-white font-semibold relative py-1 border-b-2 border-blue-400 cursor-pointer'
                  : 'hover:text-white transition-colors cursor-pointer'
              }
            >
              Training
            </Link>
            <Link
              href="/pathway"
              onClick={() => handleNav('paths')}
              className={
                currentTab === 'paths'
                  ? 'text-white font-semibold relative py-1 border-b-2 border-blue-400 cursor-pointer'
                  : 'hover:text-white transition-colors cursor-pointer'
              }
            >
              Pathway
            </Link>
            <Link
              href="/software"
              onClick={() => handleNav('software')}
              className={
                currentTab === 'software'
                  ? 'text-white font-semibold relative py-1 border-b-2 border-blue-400 cursor-pointer'
                  : 'hover:text-white transition-colors cursor-pointer'
              }
            >
              Software
            </Link>
            <Link
              href="/pricing"
              onClick={() => handleNav('pricing')}
              className={
                currentTab === 'pricing'
                  ? 'text-white font-semibold relative py-1 border-b-2 border-blue-400 cursor-pointer'
                  : 'hover:text-white transition-colors cursor-pointer'
              }
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => handleNav('about')}
              className={
                currentTab === 'about'
                  ? 'text-white font-semibold relative py-1 border-b-2 border-blue-400 cursor-pointer'
                  : 'hover:text-white transition-colors cursor-pointer'
              }
            >
              About
            </Link>
            <Link
              href="/resources"
              onClick={() => handleNav('resources')}
              className={
                currentTab === 'resources'
                  ? 'text-white font-semibold relative py-1 border-b-2 border-blue-400 cursor-pointer'
                  : 'hover:text-white transition-colors cursor-pointer'
              }
            >
              Resources
            </Link>
            <Link
              href="/support"
              onClick={() => handleNav('support')}
              className={
                currentTab === 'support'
                  ? 'text-white font-semibold relative py-1 border-b-2 border-blue-400 cursor-pointer'
                  : 'hover:text-white transition-colors cursor-pointer'
              }
            >
              Support
            </Link>
          </nav>
        </div>

        {/* Right Nav / Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenSearch || (() => handleNav('academy'))}
            aria-label="Search"
            className="text-white/80 hover:text-white p-2 rounded-full transition-colors cursor-pointer hover:bg-white/10"
          >
            <Search className="w-5 h-5" />
          </button>

          {currentUser ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-semibold">{currentUser.name}</span>
                <span className="text-[10px] bg-blue-600 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  {currentUser.role}
                </span>
              </div>
              <Link
                href="/courses"
                onClick={() => handleNav('courses')}
                className="text-sm font-semibold bg-[#0070f3] hover:bg-blue-600 text-white px-4 py-1.5 rounded-full shadow-xs transition-colors duration-150 cursor-pointer"
              >
                Portal &rarr;
              </Link>
            </div>
          ) : (
            <>
              <Link
                href="/auth"
                onClick={() => (onOpenAuth ? onOpenAuth('signin') : handleNav('auth'))}
                className="text-sm font-semibold text-white/90 hover:text-white transition-colors cursor-pointer"
              >
                Sign In
              </Link>
              <Link
                href="/auth"
                onClick={() => (onOpenAuth ? onOpenAuth('signup') : handleNav('auth'))}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all whitespace-nowrap rounded-full cursor-pointer"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

