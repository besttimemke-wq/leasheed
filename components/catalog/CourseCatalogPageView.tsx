'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { NavTab } from '@/components/Navbar';
import { Course } from '@/lib/types';
import { AuthUser } from '@/components/auth/AuthModal';
import { 
  CheckCircle2, 
  Search, 
  BookOpen, 
  Clock, 
  Award, 
  ArrowRight, 
  X, 
  Heart, 
  PawPrint, 
  Briefcase, 
  Users, 
  Sparkles, 
  Megaphone, 
  Zap, 
  Coins, 
  Globe, 
  Scale,
  Play,
  RotateCcw
} from 'lucide-react';
import { SharedHeader } from '@/components/layout/SharedHeader';
import { SharedFooter } from '@/components/layout/SharedFooter';
import { 
  CATALOG_PATHWAYS, 
  COMPLETE_CATALOG_COURSES, 
  CatalogCourse, 
  CatalogPathway 
} from '@/lib/catalog-data';

interface CourseCatalogPageViewProps {
  courses?: Course[];
  onNavigateToTab: (tab: NavTab) => void;
  onSelectCourse?: (course: Course) => void;
  onLaunchScenario?: (scenarioId: string) => void;
  onOpenAuth?: (mode: 'signin' | 'signup', gateMessage?: string) => void;
  currentUser?: AuthUser | null;
}

const PAGE_SIZE = 12;

export const CourseCatalogPageView: React.FC<CourseCatalogPageViewProps> = ({
  onNavigateToTab,
  onLaunchScenario,
  onOpenAuth,
  currentUser,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPathways, setSelectedPathways] = useState<Set<string>>(new Set());
  const [selectedLevels, setSelectedLevels] = useState<Set<number>>(new Set());
  const [sortBy, setSortBy] = useState<'az' | 'pathway' | 'level'>('az');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<CatalogCourse | null>(null);

  const pathwayByCode = useMemo(() => {
    const map: Record<string, CatalogPathway> = {};
    CATALOG_PATHWAYS.forEach(p => {
      map[p.code] = p;
    });
    return map;
  }, []);

  const handleTogglePathway = (code: string) => {
    setCurrentPage(1);
    setSelectedPathways(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  };

  const handleToggleLevel = (lvl: number) => {
    setCurrentPage(1);
    setSelectedLevels(prev => {
      const next = new Set(prev);
      if (next.has(lvl)) {
        next.delete(lvl);
      } else {
        next.add(lvl);
      }
      return next;
    });
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedPathways(new Set());
    setSelectedLevels(new Set());
    setSortBy('az');
    setCurrentPage(1);
  };

  // Filter and Sort Courses
  const filteredCourses = useMemo(() => {
    let list = COMPLETE_CATALOG_COURSES.filter(c => {
      if (selectedPathways.size > 0 && !selectedPathways.has(c.pathway)) {
        return false;
      }
      if (selectedLevels.size > 0 && !selectedLevels.has(c.level)) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const haystack = `${c.code} ${c.title} ${c.description} ${c.pathwayName} ${c.capstone}`.toLowerCase();
        if (!haystack.includes(query)) {
          return false;
        }
      }
      return true;
    });

    if (sortBy === 'az') {
      list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'level') {
      list = [...list].sort((a, b) => a.level - b.level || a.code.localeCompare(b.code));
    } else if (sortBy === 'pathway') {
      list = [...list].sort((a, b) => a.pathwayName.localeCompare(b.pathwayName) || a.level - b.level);
    }

    return list;
  }, [searchQuery, selectedPathways, selectedLevels, sortBy]);

  // Pagination calculation
  const totalCourses = filteredCourses.length;
  const totalPages = Math.max(1, Math.ceil(totalCourses / PAGE_SIZE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * PAGE_SIZE;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + PAGE_SIZE);

  const shownFrom = totalCourses === 0 ? 0 : startIndex + 1;
  const shownTo = Math.min(startIndex + PAGE_SIZE, totalCourses);

  const renderPathwayIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart className="w-6 h-6 fill-current text-teal-600" />;
      case 'paw':
        return <PawPrint className="w-6 h-6 fill-current text-purple-600" />;
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-amber-600" />;
      case 'handshake':
        return <Users className="w-6 h-6 text-cyan-600" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-fuchsia-600" />;
      case 'megaphone':
        return <Megaphone className="w-6 h-6 text-rose-600" />;
      case 'bolt':
        return <Zap className="w-6 h-6 text-sky-600" />;
      case 'coins':
        return <Coins className="w-6 h-6 text-lime-700" />;
      case 'globe':
        return <Globe className="w-6 h-6 text-indigo-600" />;
      case 'scale':
        return <Scale className="w-6 h-6 text-slate-700" />;
      default:
        return <BookOpen className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Universal Top Navigation Header */}
      <SharedHeader
        currentTab="academy"
        onNavigateToTab={onNavigateToTab}
        onOpenAuth={onOpenAuth}
        currentUser={currentUser}
      />

      {/* BEGIN: HeroSection */}
      <section className="relative w-full overflow-hidden bg-gray-900 border-b border-gray-200">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/assets/hero-ALLPAGES.jpeg" 
            alt="Pet grooming professional with golden retriever" 
            fill
            priority
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-right sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded bg-[#0066cc]/90 text-white text-xs uppercase font-extrabold tracking-wider mb-4 shadow-sm">
              COURSES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] leading-tight font-extrabold text-white tracking-tight mb-4">
              All 200 Courses. 10 Pathways.<br className="hidden sm:inline" /> Your Next Skill Awaits.
            </h1>
            <p className="text-base text-gray-200 leading-relaxed mb-8 drop-shadow">
              Explore our complete course catalog. Each course includes 10 modules, interactive activities, assessments, and a capstone project — designed to give you real skills and real results.
            </p>

            {/* Search and Filters In Hero */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Search className="h-4 w-4" />
                </span>
                <input
                  className="block w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-gray-200 bg-white placeholder-gray-400 text-gray-900 focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] shadow-md"
                  placeholder="Search courses, topics, or keywords..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>

              {/* Pathway select in hero */}
              <div className="sm:w-56">
                <select
                  className="block w-full py-2.5 pl-3 pr-8 text-sm rounded-lg border border-gray-200 bg-white text-gray-700 font-medium focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] shadow-md"
                  value={selectedPathways.size === 1 ? Array.from(selectedPathways)[0] : ''}
                  onChange={(e) => {
                    setCurrentPage(1);
                    if (e.target.value) {
                      setSelectedPathways(new Set([e.target.value]));
                    } else {
                      setSelectedPathways(new Set());
                    }
                  }}
                >
                  <option value="">All Pathways ({CATALOG_PATHWAYS.length})</option>
                  {CATALOG_PATHWAYS.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.name} ({p.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Level select in hero */}
              <div className="sm:w-36">
                <select
                  className="block w-full py-2.5 pl-3 pr-8 text-sm rounded-lg border border-gray-200 bg-white text-gray-700 font-medium focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] shadow-md"
                  value={selectedLevels.size === 1 ? Array.from(selectedLevels)[0] : ''}
                  onChange={(e) => {
                    setCurrentPage(1);
                    if (e.target.value) {
                      setSelectedLevels(new Set([Number(e.target.value)]));
                    } else {
                      setSelectedLevels(new Set());
                    }
                  }}
                >
                  <option value="">All Levels</option>
                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                  <option value="400">400 Level</option>
                </select>
              </div>

              {/* Sort select in hero */}
              <div className="sm:w-36">
                <select
                  className="block w-full py-2.5 pl-3 pr-8 text-sm rounded-lg border border-gray-200 bg-white text-gray-700 font-medium focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc] shadow-md"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'az' | 'pathway' | 'level')}
                >
                  <option value="az">Sort by: A-Z</option>
                  <option value="pathway">Sort by: Pathway</option>
                  <option value="level">Sort by: Level</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: MainCatalogContent */}
      <main className="flex-grow bg-slate-50/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* BEGIN: FilterSidebar */}
            <aside aria-label="Course Filters" className="lg:col-span-3 space-y-7">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sticky top-6">
                <h2 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
                  <span>Filter Courses</span>
                  {(selectedPathways.size > 0 || selectedLevels.size > 0 || searchQuery) && (
                    <button
                      onClick={handleResetFilters}
                      className="text-xs font-semibold text-[#0066cc] hover:underline cursor-pointer flex items-center gap-1"
                      type="button"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset
                    </button>
                  )}
                </h2>

                {/* Pathways Multi-select */}
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                    Pathways
                  </span>
                  <div className="space-y-2.5 text-sm">
                    <label className="flex items-start space-x-2.5 cursor-pointer text-gray-700 hover:text-gray-900">
                      <input
                        type="checkbox"
                        checked={selectedPathways.size === 0}
                        onChange={() => {
                          setSelectedPathways(new Set());
                          setCurrentPage(1);
                        }}
                        className="mt-0.5 rounded border-gray-300 text-[#0066cc] focus:ring-[#0066cc]"
                      />
                      <span className="font-semibold text-gray-900">
                        All Pathways <span className="text-gray-400 font-normal">(200)</span>
                      </span>
                    </label>

                    {CATALOG_PATHWAYS.map((p) => {
                      const isChecked = selectedPathways.has(p.code);
                      return (
                        <label
                          key={p.code}
                          className="flex items-start space-x-2.5 cursor-pointer text-gray-600 hover:text-gray-900"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleTogglePathway(p.code)}
                            className="mt-0.5 rounded border-gray-300 text-[#0066cc] focus:ring-[#0066cc]"
                          />
                          <span className="text-xs sm:text-sm leading-snug">
                            {p.name} <span className="text-gray-400 text-xs">({p.count})</span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Level Multi-select */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                    Level
                  </span>
                  <div className="space-y-2.5 text-sm">
                    {[
                      { lvl: 100, label: '100 (Foundation)' },
                      { lvl: 200, label: '200 (Core)' },
                      { lvl: 300, label: '300 (Advanced)' },
                      { lvl: 400, label: '400 (Capstone)' },
                    ].map(({ lvl, label }) => {
                      const isChecked = selectedLevels.has(lvl);
                      return (
                        <label
                          key={lvl}
                          className="flex items-center space-x-2.5 cursor-pointer text-gray-600 hover:text-gray-900"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleToggleLevel(lvl)}
                            className="rounded border-gray-300 text-[#0066cc] focus:ring-[#0066cc]"
                          />
                          <span className="text-xs sm:text-sm">{label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>
            {/* END: FilterSidebar */}

            {/* BEGIN: CourseCardsList */}
            <section aria-label="Available Courses" className="lg:col-span-9 space-y-4">
              {totalCourses === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-base font-bold text-gray-900">No courses match your filters</p>
                  <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
                    Try clearing a filter or searching a different term to explore our 200 accredited courses.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#0066cc] text-white rounded-lg text-sm font-semibold hover:bg-[#0052a3] transition cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {paginatedCourses.map((c) => {
                    const pw = pathwayByCode[c.pathway] || CATALOG_PATHWAYS[0];
                    return (
                      <article
                        key={c.code}
                        className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                      >
                        <div className={`w-full sm:w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 relative flex items-center justify-center border ${pw.badge}`}>
                          {renderPathwayIcon(pw.icon)}
                        </div>

                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border ${pw.badge}`}>
                                {pw.name}
                              </span>
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#0066cc] border border-blue-100">
                                {c.level} Level • {c.levelLabel}
                              </span>
                            </div>
                            <h3 className="text-base font-bold text-gray-900 tracking-tight mb-1">
                              <span className="text-[#0066cc] mr-1.5">{c.code}</span> {c.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 leading-relaxed">
                              {c.description}
                            </p>
                          </div>

                          <div className="pt-3 mt-2 border-t border-gray-100 flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                              <span className="flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4 text-gray-400" />
                                {c.modules.length} modules
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-gray-400" />
                                {c.hours} hours
                              </span>
                              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                Certification Included
                              </span>
                            </div>

                            <button
                              onClick={() => setSelectedCourseForModal(c)}
                              className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0066cc] hover:text-[#0052a3] group cursor-pointer"
                            >
                              View Course
                              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {/* Pagination Bar */}
              {totalCourses > 0 && (
                <div className="pt-4 flex items-center justify-between border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Showing <span className="font-semibold text-gray-900">{shownFrom}</span> to{' '}
                    <span className="font-semibold text-gray-900">{shownTo}</span> of{' '}
                    <span className="font-semibold text-gray-900">{totalCourses}</span> courses
                  </p>
                  <div className="flex items-center space-x-2">
                    <button
                      disabled={safeCurrentPage <= 1}
                      onClick={() => {
                        if (safeCurrentPage > 1) {
                          setCurrentPage(safeCurrentPage - 1);
                          window.scrollTo({ top: 400, behavior: 'smooth' });
                        }
                      }}
                      className="px-3 py-1.5 border border-gray-200 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 cursor-pointer"
                      type="button"
                    >
                      Previous
                    </button>
                    <span className="text-xs font-semibold text-gray-700 px-2">
                      Page {safeCurrentPage} of {totalPages}
                    </span>
                    <button
                      disabled={safeCurrentPage >= totalPages}
                      onClick={() => {
                        if (safeCurrentPage < totalPages) {
                          setCurrentPage(safeCurrentPage + 1);
                          window.scrollTo({ top: 400, behavior: 'smooth' });
                        }
                      }}
                      className="px-3 py-1.5 border border-gray-200 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-50 cursor-pointer"
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </section>
            {/* END: CourseCardsList */}
          </div>
        </div>
      </main>
      {/* END: MainCatalogContent */}

      {/* BEGIN: Course Detail Modal */}
      {selectedCourseForModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gray-950/70 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedCourseForModal(null)}
          />
          <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl max-h-[88vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Sticky Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-start justify-between gap-4 z-10">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  {(() => {
                    const pw = pathwayByCode[selectedCourseForModal.pathway] || CATALOG_PATHWAYS[0];
                    return (
                      <>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold border ${pw.badge}`}>
                          {pw.name}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#0066cc] border border-blue-100">
                          {selectedCourseForModal.level} Level • {selectedCourseForModal.levelLabel}
                        </span>
                      </>
                    );
                  })()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  <span className="text-[#0066cc] mr-2">{selectedCourseForModal.code}</span>
                  {selectedCourseForModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCourseForModal(null)}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                type="button"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5 overflow-y-auto space-y-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                {selectedCourseForModal.description}
              </p>

              {/* 3 Metric cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-50 rounded-xl p-3.5 text-center border border-slate-100">
                  <div className="text-lg font-extrabold text-gray-900">{selectedCourseForModal.modules.length}</div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500 font-semibold mt-0.5">Modules</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3.5 text-center border border-slate-100">
                  <div className="text-lg font-extrabold text-gray-900">{selectedCourseForModal.hours}</div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500 font-semibold mt-0.5">Hours</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-3.5 text-center border border-slate-100">
                  <div className="text-lg font-extrabold text-emerald-600">{selectedCourseForModal.level}</div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500 font-semibold mt-0.5">Level</div>
                </div>
              </div>

              {/* Modules List */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Course Modules &amp; Curriculum (10 Units)
                </p>
                <ol className="space-y-2">
                  {selectedCourseForModal.modules.map((m, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50/80 border border-slate-100 text-sm text-gray-700"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded bg-blue-100 text-[#0066cc] text-[10px] font-extrabold flex items-center justify-center mt-0.5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-medium">{m}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Capstone Box */}
              <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-4">
                <div className="flex items-center gap-2 text-[#0066cc] font-bold text-xs uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  Capstone Artifact
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  {selectedCourseForModal.capstone}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Upon completion of all 10 modules, learners build and submit this verified artifact to earn accredited credentials.
                </p>
              </div>

              {/* Interactive Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedCourseForModal(null);
                    if (onLaunchScenario) {
                      onLaunchScenario('sc-escalation-01');
                    } else {
                      onNavigateToTab('courses');
                    }
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-[#0066cc] hover:bg-[#0052a3] text-white shadow-md transition cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Launch Interactive Simulator
                </button>
                <button
                  onClick={() => {
                    setSelectedCourseForModal(null);
                    if (onOpenAuth) {
                      onOpenAuth('signup', `Enroll in ${selectedCourseForModal.code} - ${selectedCourseForModal.title}`);
                    } else {
                      onNavigateToTab('auth');
                    }
                  }}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition cursor-pointer"
                >
                  Enroll in Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* END: Course Detail Modal */}

      {/* Universal Footer */}
      <SharedFooter onNavigateToTab={onNavigateToTab} />
    </div>
  );
};
