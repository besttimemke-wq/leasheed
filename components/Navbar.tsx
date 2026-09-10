'use client';

import React from 'react';
import { 
  GitFork, 
  BookOpen, 
  Compass, 
  BarChart3, 
  Layers, 
  Sparkles, 
  Clock, 
  Play,
  Share2,
  CheckCircle2,
  Laptop,
  Users
} from 'lucide-react';
import { AuthUser } from '@/components/auth/AuthModal';

export type NavTab = 
  | 'home' 
  | 'academy' 
  | 'landing' 
  | 'catalog' 
  | 'courses' 
  | 'training' 
  | 'paths' 
  | 'software' 
  | 'pricing' 
  | 'about' 
  | 'resources' 
  | 'support' 
  | 'scenario-builder' 
  | '72h-plan' 
  | 'analytics' 
  | 'library' 
  | 'google-workspace' 
  | 'auth';

interface NavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenQuickGenerate: () => void;
  onPlayCurrentScenario: () => void;
  currentUser?: AuthUser | null;
  onOpenAuth?: (mode: 'signin' | 'signup') => void;
  onSignOut?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenQuickGenerate,
  onPlayCurrentScenario,
  currentUser,
  onOpenAuth,
  onSignOut,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onSelectTab('landing')}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-teal-800 text-white shadow-md shadow-slate-200">
            {/* Paw print logo */}
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
              <ellipse cx="6.5" cy="5" rx="2" ry="2.8" />
              <ellipse cx="11.5" cy="3.5" rx="2" ry="2.8" />
              <ellipse cx="16.5" cy="5" rx="2" ry="2.8" />
              <ellipse cx="20.5" cy="9.5" rx="1.8" ry="2.5" />
              <path d="M12 9.5c-3.5 0-6.2 2.5-6.2 5.8 0 3.3 2.9 6.2 6.2 8.7 3.3-2.5 6.2-5.4 6.2-8.7 0-3.3-2.7-5.8-6.2-5.8zm0 7.8c-.8-.7-2.2-1.9-2.2-3.1 0-.9.7-1.6 1.6-1.6.5 0 1 .2 1.3.6.3-.4.8-.6 1.3-.6.9 0 1.6.7 1.6 1.6 0 1.2-1.4 2.4-2.2 3.1z" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 tracking-tight text-lg">Leashed.io</span>
              <span className="rounded-md bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-700 border border-teal-200/60 uppercase tracking-wider">
                Social Impact LMS
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
              Skills. Stability. Second Chances.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80">
          <button
            id="nav-tab-home"
            onClick={() => onSelectTab('home')}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'home'
                ? 'bg-white text-teal-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span>Home</span>
          </button>

          <button
            id="nav-tab-academy"
            onClick={() => onSelectTab('academy')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'academy' || activeTab === 'landing'
                ? 'bg-white text-teal-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span>🐾 Academy</span>
          </button>

          <button
            id="nav-tab-catalog"
            onClick={() => onSelectTab('catalog')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'catalog' || activeTab === 'courses'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5 text-slate-500" />
            Courses
          </button>

          <button
            id="nav-tab-training"
            onClick={() => onSelectTab('training')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'training'
                ? 'bg-white text-teal-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Training
          </button>

          <button
            id="nav-tab-paths"
            onClick={() => onSelectTab('paths')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'paths'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Compass className="h-3.5 w-3.5 text-slate-500" />
            Pathways
          </button>

          <button
            id="nav-tab-software"
            onClick={() => onSelectTab('software')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'software'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Laptop className="h-3.5 w-3.5 text-blue-500" />
            Software
          </button>

          <button
            id="nav-tab-pricing"
            onClick={() => onSelectTab('pricing')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'pricing'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Pricing
          </button>

          <button
            id="nav-tab-about"
            onClick={() => onSelectTab('about')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'about'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            About
          </button>

          <button
            id="nav-tab-workspace"
            onClick={() => onSelectTab('google-workspace')}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'google-workspace'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50/80 bg-white/70'
            }`}
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Workspace
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            id="btn-quick-ai-gen"
            onClick={onOpenQuickGenerate}
            className="flex items-center gap-1.5 rounded-lg bg-indigo-50 border border-indigo-200/80 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors shadow-xs cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span className="hidden sm:inline">AI Scenario Gen</span>
            <span className="sm:hidden">AI Gen</span>
          </button>

          <button
            id="btn-play-simulation"
            onClick={onPlayCurrentScenario}
            className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-all shadow-xs hover:shadow active:scale-98 cursor-pointer"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            <span>Simulate</span>
          </button>

          {/* User Auth Section */}
          {currentUser ? (
            <div className="flex items-center gap-2 border-l border-slate-200 pl-2 ml-1">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-xs text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-semibold text-slate-900 hidden lg:inline max-w-[120px] truncate">{currentUser.name}</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 uppercase tracking-wider">{currentUser.role}</span>
              </div>
              <button
                type="button"
                onClick={onSignOut}
                className="text-xs text-slate-500 hover:text-rose-600 px-2 py-1 rounded hover:bg-slate-100 transition-colors cursor-pointer"
                title="Sign Out"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 border-l border-slate-200 pl-2 ml-1">
              <button
                type="button"
                onClick={() => onOpenAuth?.('signin')}
                className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => onOpenAuth?.('signup')}
                className="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile nav subbar */}
      <div className="md:hidden flex items-center gap-1 overflow-x-auto border-t border-slate-100 px-3 py-2 bg-slate-50/90 scrollbar-none">
        <button
          onClick={() => onSelectTab('landing')}
          className={`flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-semibold ${
            activeTab === 'landing' ? 'bg-teal-700 text-white' : 'text-slate-600'
          }`}
        >
          <span>🐾</span>
          Home
        </button>
        <button
          onClick={() => onSelectTab('courses')}
          className={`flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-bold ${
            activeTab === 'courses' ? 'bg-teal-600 text-white' : 'text-teal-700 bg-teal-50'
          }`}
        >
          <BookOpen className="h-3 w-3 text-teal-600" />
          Academy
        </button>
        <button
          onClick={() => onSelectTab('software')}
          className={`flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-bold ${
            activeTab === 'software' ? 'bg-blue-600 text-white' : 'text-blue-700 bg-blue-50'
          }`}
        >
          <Laptop className="h-3 w-3 text-blue-600" />
          Software
        </button>
        <button
          onClick={() => onSelectTab('scenario-builder')}
          className={`flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium ${
            activeTab === 'scenario-builder' ? 'bg-indigo-600 text-white' : 'text-slate-600'
          }`}
        >
          <GitFork className="h-3 w-3" />
          Scenario Builder
        </button>
        <button
          onClick={() => onSelectTab('72h-plan')}
          className={`flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium ${
            activeTab === '72h-plan' ? 'bg-blue-600 text-white' : 'text-slate-600'
          }`}
        >
          <Clock className="h-3 w-3" />
          72h Plan
        </button>
        <button
          onClick={() => onSelectTab('paths')}
          className={`flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium ${
            activeTab === 'paths' ? 'bg-slate-800 text-white' : 'text-slate-600'
          }`}
        >
          <Compass className="h-3 w-3" />
          Paths
        </button>
        <button
          onClick={() => onSelectTab('analytics')}
          className={`flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium ${
            activeTab === 'analytics' ? 'bg-slate-800 text-white' : 'text-slate-600'
          }`}
        >
          <BarChart3 className="h-3 w-3" />
          Analytics
        </button>
        <button
          onClick={() => onSelectTab('library')}
          className={`flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium ${
            activeTab === 'library' ? 'bg-slate-800 text-white' : 'text-slate-600'
          }`}
        >
          <Layers className="h-3 w-3" />
          Templates
        </button>
        <button
          onClick={() => onSelectTab('google-workspace')}
          className={`flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-xs font-medium ${
            activeTab === 'google-workspace' ? 'bg-indigo-600 text-white' : 'text-indigo-600 font-semibold'
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Workspace Hub
        </button>
      </div>
    </header>
  );
};
