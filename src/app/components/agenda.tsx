"use client";

import { useMemo, useState, useCallback, memo } from "react";
import Footer from "./Footer";

const EVENT_TIMELINE = [
  { 
    start: "09:30", 
    end: "10:00", 
    title: "Welcome Note", 
    room: "Main Stage",
    date: "Nov 30, 2024",
    duration: "30 Min",
    overview: "Official welcome to DevFest Pune 2024",
    category: "Main Event"
  },
  {
    start: "10:30",
    end: "11:00",
    title:
      "The AI Catalyst: Transforming SDLC with Agent-driven Efficiency and Accuracy",
    speaker: "Vishal Virani",
    org: "DhiWise",
    room: "Main Stage",
    date: "Nov 30, 2024",
    duration: "30 Min",
    overview: "Explore how AI agents are revolutionizing software development lifecycle with enhanced efficiency and accuracy.",
    category: "Technical Session"
  },
  {
    start: "17:30",
    end: "18:00",
    title: "Closing Announcements",
    room: "Main Stage",
    date: "Nov 30, 2024",
    duration: "30 Min",
    overview: "Final announcements and closing remarks for DevFest Pune 2024.",
    category: "Main Event"
  },
];

const TRACK_1 = [
  {
    start: "11:15",
    end: "12:00",
    title: "Session A",
    room: "Track 1",
    speaker: "TBA",
    date: "Nov 30, 2024",
    duration: "45 Min",
    overview: "Track 1 session details coming soon.",
    category: "Track Session"
  },
];
const TRACK_2 = [
  {
    start: "12:15",
    end: "13:00",
    title: "Session B",
    room: "Track 2",
    speaker: "TBA",
    date: "Nov 30, 2024",
    duration: "45 Min",
    overview: "Track 2 session details coming soon.",
    category: "Track Session"
  },
];
const TRACK_3 = [
  {
    start: "14:00",
    end: "14:45",
    title: "Session C",
    room: "Track 3",
    speaker: "TBA",
    date: "Nov 30, 2024",
    duration: "45 Min",
    overview: "Track 3 session details coming soon.",
    category: "Track Session"
  },
];
const LIGHTNING_TALKS = [
  {
    start: "15:00",
    end: "16:00",
    title: "Lightning Talks Round",
    room: "Lightning Talks",
    speaker: "Multiple",
    date: "Nov 30, 2024",
    duration: "60 Min",
    overview: "Quick-fire presentations from multiple speakers on various topics.",
    category: "Lightning Talk"
  },
];
const CAREER_COMPASS = [
  {
    start: "16:15",
    end: "17:00",
    title: "Career Compass: AMA",
    room: "Career Compass",
    speaker: "TBA",
    date: "Nov 30, 2024",
    duration: "45 Min",
    overview: "Ask Me Anything session focused on career guidance and development.",
    category: "Career Session"
  },
];

type ScheduleItem = {
  start: string;
  end: string;
  title: string;
  room?: string;
  speaker?: string;
  org?: string;
  desc?: string;
  date?: string;
  duration?: string;
  overview?: string;
  category?: string;
};

const TABS: { key: TabKey; label: string }[] = [
  { key: "track1", label: "Track 1" },
  { key: "track2", label: "Track 2" },
  { key: "track3", label: "Track 3" },
  { key: "lightning", label: "Lightning Talks" },
  { key: "career", label: "Career Compass" },
];

const SCHEDULES = {
  track1: TRACK_1,
  track2: TRACK_2,
  track3: TRACK_3,
  lightning: LIGHTNING_TALKS,
  career: CAREER_COMPASS,
};

type TabKey = keyof typeof SCHEDULES;

// Event Detail Dialog Component - Memoized to prevent re-renders
const EventDetailDialog = memo(({ 
  item, 
  isOpen, 
  onClose 
}: { 
  item: ScheduleItem | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  if (!item || !isOpen) return null;

  return (
    <>
      {/* Backdrop with blur effect */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {item.title} Details
            </h2>
            
            {/* Schedule Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-700">{item.date}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">
                  {item.start} to {item.end} (GMT +05:30)
                </span>
              </div>
              
              <div className="text-sm text-gray-600 font-medium">
                {item.duration}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
              <p className="text-gray-700">{item.overview}</p>
            </div>
            
            {/* Category Tag */}
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {item.category}
              </span>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-6 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

EventDetailDialog.displayName = 'EventDetailDialog';

// Memoized TimelineItem to prevent unnecessary re-renders
const TimelineItem = memo(({
  item,
  isLast,
  onItemClick,
}: {
  item: ScheduleItem;
  isLast: boolean;
  onItemClick: (item: ScheduleItem) => void;
}) => {
  const handleClick = useCallback(() => {
    onItemClick(item);
  }, [item, onItemClick]);

  return (
    <div className="relative grid grid-cols-[90px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-6">
      <div className="text-right pr-2 md:pr-4">
        <div className="inline-flex items-center gap-1 md:gap-2 rounded-full bg-white border border-gray-200 px-2 py-1 shadow-sm">
          <span className="text-xs md:text-sm font-semibold text-gray-800">
            {item.start}
          </span>
          <span className="text-[10px] md:text-xs text-gray-500">–</span>
          <span className="text-xs md:text-sm font-semibold text-gray-800">
            {item.end}
          </span>
        </div>
      </div>
      <div className="relative pb-8">
        <div
          className={`absolute -left-4 md:-left-6 top-0 h-full w-px ${
            isLast
              ? "bg-gradient-to-b from-orange-300 to-transparent"
              : "bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300"
          }`}
        />
        <div className="absolute -left-[18px] md:-left-[26px] top-1 h-3 w-3 md:h-3.5 md:w-3.5 rounded-full bg-white ring-4 ring-orange-200 shadow-sm">
          <div className="h-full w-full rounded-full bg-orange-500" />
        </div>
        <div 
          className="rounded-xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-[1.02]"
          onClick={handleClick}
        >
          <div className="flex flex-wrap items-center gap-2">
            {item.room && (
              <span className="inline-flex items-center rounded-full bg-orange-50 text-orange-700 border border-orange-200 px-2.5 py-1 text-[10px] md:text-xs font-medium">
                {item.room}
              </span>
            )}
          </div>
          <h3 className="mt-2 text-base md:text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          {(item.speaker || item.org) && (
            <p className="mt-1 text-sm text-gray-600">
              {item.speaker ? item.speaker : ""}
              {item.speaker && item.org ? " · " : ""}
              {item.org ? item.org : ""}
            </p>
          )}
          {item.desc && (
            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
          )}
        </div>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';

// Memoized Timeline component
const Timeline = memo(({ items, onItemClick }: { items: ScheduleItem[]; onItemClick: (item: ScheduleItem) => void }) => {
  const hasItems = Array.isArray(items) && items.length > 0;

  if (!hasItems) {
    return (
      <div>
        <div className="grid grid-cols-1 gap-4">
          <div className="h-20 rounded-xl border border-gray-200 bg-gray-50 animate-pulse" />
          <div className="h-20 rounded-xl border border-gray-200 bg-gray-50 animate-pulse" />
          <div className="h-20 rounded-xl border border-gray-200 bg-gray-50 animate-pulse" />
        </div>
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 bg-white">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="text-sm font-medium text-gray-800">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div role="list" aria-label="Schedule timeline" className="relative">
      {items.map((item, idx) => (
        <TimelineItem
          key={`${item.start}-${item.title}-${idx}`}
          item={item}
          isLast={idx === items.length - 1}
          onItemClick={onItemClick}
        />
      ))}
    </div>
  );
});

Timeline.displayName = 'Timeline';

export default function Agenda() {
  const [activeTab, setActiveTab] = useState<TabKey>("track1");
  const [selectedEvent, setSelectedEvent] = useState<ScheduleItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const activeItems = useMemo<ScheduleItem[]>(
    () => SCHEDULES[activeTab] ?? [],
    [activeTab]
  );

  const handleEventClick = useCallback((item: ScheduleItem) => {
    setSelectedEvent(item);
    setIsDialogOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedEvent(null), 300); // Wait for animation to complete
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="relative px-6 sm:px-8 md:px-10 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-start">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
            Agenda
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Follow code demonstrations by our expert speakers on different
            tracks. Check out the schedule below and don&apos;t forget to mark
            your calendar so that you don&apos;t miss out on any sessions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3 py-1.5">
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
              <span className="text-xs md:text-sm font-semibold text-orange-700">
                Event Timeline
              </span>
            </div>
          </div>
          <Timeline items={EVENT_TIMELINE} onItemClick={handleEventClick} />
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 text-start">
            Tracks
          </h3>

          <div
            role="tablist"
            aria-label="Agenda tracks"
            className="mb-6 inline-flex flex-wrap gap-2 rounded-full bg-gray-100 p-1 w-full justify-center"
          >
            {TABS.map((t) => {
              const isActive = activeTab === t.key;
              return (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${t.key}`}
                  id={`tab-${t.key}`}
                  onClick={() => setActiveTab(t.key)}
                  className={[
                    "px-4 py-2 rounded-full text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
                    isActive
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            <Timeline items={activeItems} onItemClick={handleEventClick} />
          </div>
        </div>
      </section>

      {/* Event Detail Dialog */}
      <EventDetailDialog
        item={selectedEvent}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />

      <Footer />
    </div>
  );
}
