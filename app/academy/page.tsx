'use client';

import React, { useState } from 'react';
import { CourseCatalogPageView } from '@/components/catalog/CourseCatalogPageView';
import { ScenarioPlayerModal } from '@/components/scenario/ScenarioPlayerModal';
import { INITIAL_COURSES, INITIAL_SCENARIOS } from '@/lib/sample-data';
import { AuthUser } from '@/components/auth/AuthModal';
import { useRouter } from 'next/navigation';
import { NavTab } from '@/components/Navbar';
import { getRouteForTab } from '@/lib/navigation';

export default function AcademyPage() {
  const router = useRouter();
  const [courses] = useState(INITIAL_COURSES);
  const [scenarios] = useState(INITIAL_SCENARIOS);
  const [activeScenarioId, setActiveScenarioId] = useState<string>(INITIAL_SCENARIOS[0].id);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const [currentUser] = useState<AuthUser | null>(() => {
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

  const handleNavigateToTab = (tab: NavTab) => {
    router.push(getRouteForTab(tab));
  };

  const handleLaunchScenario = (scenarioId?: string) => {
    if (scenarioId) {
      setActiveScenarioId(scenarioId);
    }
    setIsPlayerOpen(true);
  };

  const currentScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <>
      <CourseCatalogPageView
        courses={courses}
        onNavigateToTab={handleNavigateToTab}
        onLaunchScenario={handleLaunchScenario}
        currentUser={currentUser}
      />
      <ScenarioPlayerModal
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
        scenario={currentScenario}
      />
    </>
  );
}
