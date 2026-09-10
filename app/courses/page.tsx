'use client';

import React, { useState } from 'react';
import { CourseStudioView } from '@/components/courses/CourseStudioView';
import { ScenarioPlayerModal } from '@/components/scenario/ScenarioPlayerModal';
import { INITIAL_COURSES, INITIAL_SCENARIOS } from '@/lib/sample-data';
import { Course } from '@/lib/types';
import { SharedHeader } from '@/components/layout/SharedHeader';
import { SharedFooter } from '@/components/layout/SharedFooter';
import { useRouter } from 'next/navigation';
import { NavTab } from '@/components/Navbar';
import { getRouteForTab } from '@/lib/navigation';

export default function CoursesPage() {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [scenarios] = useState(INITIAL_SCENARIOS);
  const [activeScenarioId, setActiveScenarioId] = useState<string>(INITIAL_SCENARIOS[0].id);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleUpdateCourse = (updated: Course) => {
    setCourses((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  };

  const handleAddCourse = (newCourse: Course) => {
    setCourses((prev) => [newCourse, ...prev]);
  };

  const handleLaunchScenario = (scenarioId: string) => {
    if (scenarioId) {
      setActiveScenarioId(scenarioId);
    }
    setIsPlayerOpen(true);
  };

  const handleNavigateToTab = (tab: NavTab) => {
    router.push(getRouteForTab(tab));
  };

  const currentScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <div className="bg-[#0c1626]">
        <SharedHeader
          currentTab="courses"
          onNavigateToTab={handleNavigateToTab}
        />
      </div>
      <div className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CourseStudioView
          courses={courses}
          onUpdateCourse={handleUpdateCourse}
          onAddCourse={handleAddCourse}
          onLaunchScenario={handleLaunchScenario}
        />
      </div>
      <SharedFooter onNavigateToTab={handleNavigateToTab} />
      <ScenarioPlayerModal
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
        scenario={currentScenario}
      />
    </div>
  );
}
