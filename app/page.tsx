'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from '@/components/Navbar';
import { HomePageView } from '@/components/home/HomePageView';
import { CourseCatalogPageView } from '@/components/catalog/CourseCatalogPageView';
import { TrainingPageView } from '@/components/training/TrainingPageView';
import { PathwaysPageView } from '@/components/pathways/PathwaysPageView';
import { PricingPageView } from '@/components/pricing/PricingPageView';
import { AboutPageView } from '@/components/about/AboutPageView';
import { ResourcesPageView } from '@/components/resources/ResourcesPageView';
import { SupportPageView } from '@/components/support/SupportPageView';
import { ScenarioBuilderView } from '@/components/scenario/ScenarioBuilderView';
import { Roadmap72HourView } from '@/components/roadmap/Roadmap72HourView';
import { CourseStudioView } from '@/components/courses/CourseStudioView';
import { LearningPathsView } from '@/components/paths/LearningPathsView';
import { AnalyticsReportsView } from '@/components/analytics/AnalyticsReportsView';
import { CourseLibraryView } from '@/components/library/CourseLibraryView';
import { WorkspaceHubView } from '@/components/workspace/WorkspaceHubView';
import { LandingPageView } from '@/components/landing/LandingPageView';
import { SoftwarePageView } from '@/components/software/SoftwarePageView';
import { ScenarioPlayerModal } from '@/components/scenario/ScenarioPlayerModal';
import { AIGenerateScenarioModal } from '@/components/scenario/AIGenerateScenarioModal';
import { AuthPageView, AuthUser } from '@/components/auth/AuthPageView';
import { 
  INITIAL_SCENARIOS, 
  INITIAL_COURSES, 
  INITIAL_LEARNING_PATHS, 
  INITIAL_LEARNER_REPORTS 
} from '@/lib/sample-data';
import { Scenario, Course, LearningPath, LearnerReport } from '@/lib/types';

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [scenarios, setScenarios] = useState<Scenario[]>(INITIAL_SCENARIOS);
  const [activeScenarioId, setActiveScenarioId] = useState<string>(INITIAL_SCENARIOS[0].id);
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [paths, setPaths] = useState<LearningPath[]>(INITIAL_LEARNING_PATHS);
  const [reports, setReports] = useState<LearnerReport[]>(INITIAL_LEARNER_REPORTS);

  // Auth and Gating state (lazy initialized from localStorage)
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('leashed_auth_user');
        return stored ? JSON.parse(stored) : null;
      } catch {
        return null;
      }
    }
    return null;
  });
  const [authMode, setAuthMode] = useState<'welcome' | 'signin' | 'signup'>('welcome');
  const [authGateMessage, setAuthGateMessage] = useState<string | undefined>(undefined);
  const [pendingTab, setPendingTab] = useState<NavTab | null>(null);

  // Global modal triggers
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isAIGenOpen, setIsAIGenOpen] = useState(false);

  const currentScenario = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];

  const handleOpenAuth = (mode: 'welcome' | 'signin' | 'signup' = 'welcome', gateMessage?: string) => {
    setAuthMode('welcome');
    setAuthGateMessage(gateMessage);
    setActiveTab('auth');
  };

  const handleSelectTab = (tab: NavTab) => {
    if (tab === 'auth') {
      handleOpenAuth('welcome');
      return;
    }

    setActiveTab(tab);
  };

  const handleAuthSuccess = (user: AuthUser) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('leashed_auth_user', JSON.stringify(user));
    } catch (e) {
      console.error('Error storing session:', e);
    }

    if (pendingTab && pendingTab !== 'auth' && pendingTab !== 'landing') {
      setActiveTab(pendingTab);
      setPendingTab(null);
    } else {
      setActiveTab('courses');
    }
  };

  const handleSignOut = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('leashed_auth_user');
    } catch (e) {
      console.error('Error removing session:', e);
    }
    setActiveTab('landing');
  };

  const handleUpdateScenario = (updated: Scenario) => {
    setScenarios(prev => prev.map(s => s.id === updated.id ? updated : s));
  };

  const handleCreateScenario = (newScenario: Scenario) => {
    setScenarios(prev => [newScenario, ...prev]);
    setActiveScenarioId(newScenario.id);
    setActiveTab('scenario-builder');
  };

  const handleUpdateCourse = (updated: Course) => {
    setCourses(prev => prev.map(c => c.id === updated.id ? updated : c));
  };

  const handleAddCourse = (newCourse: Course) => {
    setCourses(prev => [newCourse, ...prev]);
  };

  const handleLaunchScenario = (scenarioId?: string) => {
    if (scenarioId) {
      setActiveScenarioId(scenarioId);
    }
    setIsPlayerOpen(true);
  };

  return (
    <div className="min-h-screen w-full m-0 p-0 bg-slate-100/60 font-sans text-slate-900 flex flex-col">
      {activeTab === 'home' ? (
        <HomePageView
          onNavigateToTab={handleSelectTab}
          onOpenAuth={handleOpenAuth}
          currentUser={currentUser}
        />
      ) : activeTab === 'academy' || activeTab === 'landing' ? (
        <LandingPageView
          onNavigateToTab={handleSelectTab}
          onLaunchScenario={handleLaunchScenario}
          onOpenAuth={handleOpenAuth}
          currentUser={currentUser}
        />
      ) : activeTab === 'catalog' ? (
        <CourseCatalogPageView
          courses={courses}
          onNavigateToTab={handleSelectTab}
          onOpenAuth={handleOpenAuth}
          currentUser={currentUser}
          onLaunchScenario={handleLaunchScenario}
        />
      ) : activeTab === 'training' ? (
        <TrainingPageView
          onNavigateToTab={handleSelectTab}
          onOpenAuth={handleOpenAuth}
          currentUser={currentUser}
        />
      ) : activeTab === 'paths' ? (
        <PathwaysPageView
          onNavigateToTab={handleSelectTab}
          onOpenAuth={handleOpenAuth}
          currentUser={currentUser}
        />
      ) : activeTab === 'pricing' ? (
        <PricingPageView
          onNavigateToTab={handleSelectTab}
          onOpenAuth={handleOpenAuth}
          currentUser={currentUser}
        />
      ) : activeTab === 'about' ? (
        <AboutPageView
          onNavigateToTab={handleSelectTab}
          onOpenAuth={handleOpenAuth}
          currentUser={currentUser}
        />
      ) : activeTab === 'resources' ? (
        <ResourcesPageView
          onNavigateToTab={handleSelectTab}
          currentUser={currentUser}
        />
      ) : activeTab === 'support' ? (
        <SupportPageView
          onNavigateToTab={handleSelectTab}
          currentUser={currentUser}
        />
      ) : activeTab === 'software' ? (
        <SoftwarePageView
          onNavigateToTab={handleSelectTab}
          onOpenAuth={handleOpenAuth}
          currentUser={currentUser}
        />
      ) : activeTab === 'auth' ? (
        <AuthPageView
          key={`${authMode}-${pendingTab || ''}`}
          onSuccess={handleAuthSuccess}
          onNavigateToTab={handleSelectTab}
          initialMode={authMode}
          gateMessage={authGateMessage}
          targetTab={pendingTab}
        />
      ) : (
        <>
          {/* Global Navigation Bar for LMS Studio */}
          <Navbar
            activeTab={activeTab}
            onSelectTab={handleSelectTab}
            onOpenQuickGenerate={() => setIsAIGenOpen(true)}
            onPlayCurrentScenario={() => setIsPlayerOpen(true)}
            currentUser={currentUser}
            onOpenAuth={handleOpenAuth}
            onSignOut={handleSignOut}
          />

          {/* Main Container - Full Bleed Edge to Edge */}
          <main className="flex-1 w-full p-4 sm:p-6 lg:p-8">
            {activeTab === 'scenario-builder' && (
              <ScenarioBuilderView
                scenarios={scenarios}
                activeScenarioId={activeScenarioId}
                onSelectScenario={setActiveScenarioId}
                onUpdateScenario={handleUpdateScenario}
                onCreateScenario={handleCreateScenario}
              />
            )}

            {activeTab === '72h-plan' && (
              <Roadmap72HourView />
            )}

            {activeTab === 'courses' && (
              <CourseStudioView
                courses={courses}
                onUpdateCourse={handleUpdateCourse}
                onAddCourse={handleAddCourse}
                onLaunchScenario={handleLaunchScenario}
              />
            )}

            {activeTab === 'analytics' && (
              <AnalyticsReportsView reports={reports} />
            )}

            {activeTab === 'library' && (
              <CourseLibraryView />
            )}

            {activeTab === 'google-workspace' && (
              <WorkspaceHubView scenarios={scenarios} courses={courses} />
            )}
          </main>

          {/* Studio Footer */}
          <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
            <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">Leashed.io Social Impact LMS</span>
                <span>•</span>
                <span>Skills. Stability. Second Chances.</span>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-slate-500">
                <button
                  onClick={() => setActiveTab('landing')}
                  className="text-teal-600 font-semibold hover:underline cursor-pointer"
                >
                  &larr; Return to Landing Page
                </button>
                <span>•</span>
                <span>Powered by Gemini 2.5 Flash</span>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* Global Modals for simulation & generation */}
      {currentScenario && (
        <ScenarioPlayerModal
          scenario={currentScenario}
          isOpen={isPlayerOpen}
          onClose={() => setIsPlayerOpen(false)}
        />
      )}

      <AIGenerateScenarioModal
        isOpen={isAIGenOpen}
        onClose={() => setIsAIGenOpen(false)}
        onScenarioGenerated={handleCreateScenario}
      />
    </div>
  );
}
