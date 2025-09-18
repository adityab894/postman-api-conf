"use client";

import { useMemo, useState, useCallback, memo } from "react";
import Footer from "./Footer";

const EVENT_TIMELINE = [
  { 
    start: "09:45", 
    end: "10:00",
    title: "Welcome Note" ,
    speaker: "Organizers",
    org: "The API Community",
    date: "Sept 21, 2025",
    duration: "15 Min",
    overview: "Welcome Note",
    category: "Opening Remarks"
  },
  { 
    start: "10:00", 
    end: "10:20",
    title: "Agentic AI for developer, communites & everything in between" ,
    speaker: "Megha Arora",
    org: "DevRelSquad",
    date: "Sept 21, 2025",
    duration: "20 Min",
    overview: "Agentic AI for developer, communites & everything in between",
    category: "Session"
  },
  {
    start: "10:20",
    end: "10:45",
    title: "You Can’t Do AI Without Quality APIs: The MCP Evolution with Postman.",
    speaker: "Aanchal Mishra",
    org: "Postman",
    date: "Sept 21, 2025",
    duration: "25 Min",
    overview: "You Can’t Do AI Without Quality APIs: The MCP Evolution with Postman.",
    category: "Session"
  },
  {
    start: "10:50",
    end: "11:15",
    speaker: "Saurav Jain",
    title: "Build, Deploy, Monetize: The Future of the Developer Economy with APIFY",
    org: "Apify",
    date: "Sept 21, 2025",
    duration: "25 Min",
    overview: "Build, Deploy, Monetize: The Future of the Developer Economy with APIFY",
    category: "Session"
  },
  {
    start: "11:20",
    end: "11:40",
    title: "Build the Future with AI! Lets Vibe-Code a Web App using GitHub.",
    speaker: "Bhawna Chauhan",
    org: "QuillAI Network",
    date: "Sept 21, 2025",
    duration: "20 Min",
    overview: "Build the Future with AI! Lets Vibe-Code a Web App using GitHub.",
    category: "Session"
  },
  {
    start: "11:40",
    end: "12:00",
    title: "From Spec to Visuals: Rapid API Testing with Postman",
    speaker: "Sakshi Nasha",
    org: "Cohesity",
    date: "Sept 21, 2025",
    duration: "20 Min",
    overview: "From Spec to Visuals: Rapid API Testing with Postman",
    category: "Lightning Talk"
  },
  {
    start: "12:00",
    end: "01:15",
    title: "LUNCH",
    speaker: "",
    org: "",
    date: "Sept 21, 2025",
    duration: "1hr 15 Min",
    overview: "",
    category: "Lunch"
  },
  {
    start: "01:15",
    end: "01:45",
    title: "Building Smarter Apps with RelaxAI API – Practical Use Cases and Multi-LLM Examples.",
    speaker: "Simon Hansford",
    org: "Civo",
    date: "Sept 21, 2025",
    duration: "30 Min",
    overview: "Building Smarter Apps with RelaxAI API – Practical Use Cases and Multi-LLM Examples.",
    category: "Session"
  },
  {
    start: "01:45",
    end: "02:10",
    title: "Inside the Mcp server understanding the model context protocols.",
    speaker: "Pranoti Nandurkar",
    org: "Technical Architect",
    date: "Sept 21, 2025",
    duration: "25 Min",
    overview: "Inside the Mcp server understanding the model context protocols.",
    category: "Session"
  },
  {
    start: "02:10",
    end: "02:20",
    title: "Quiz Konfhub",
    speaker: "",
    org: "Konfhub",
    date: "Sept 21, 2025",
    duration: "10 Min",
    overview: "",
    category: "Fun Event"
  },
  {
    start: "02:25",
    end: "02:55",
    title: "Spiritual design patterns for APIs: Applying Ancient Wisdom to modern interfaces",
    speaker: "Savinder Puri",
    org: "Zensar Technologies UK",
    date: "Sept 21, 2025",
    duration: "30 Min",
    overview: "Spiritual design patterns for APIs: Applying Ancient Wisdom to modern interfaces",
    category: "Session"
  },
  {
    start: "03:00",
    end: "03:20",
    title: "AI Agents with self-managing memory",
    speaker: "Nikhlesh Tayal",
    org: "AIMLetc.com",
    date: "Sept 21, 2025",
    duration: "20 Min",
    overview: "AI Agents with self-managing memory",
    category: "Session"
  },
  {
    start: "03:25",
    end: "03:45",
    title: "Long-term memory in LLMs.",
    speaker: "Ali Mustafa",
    org: "Pieces for Developers",
    date: "Sept 21, 2025",
    duration: "20 Min",
    overview: "Long-term memory in LLMs.",
    category: "Lightning Talk"
  },
  {
    start: "03:50",
    end: "04:15",
    title: "Building Resilient APIs: Automated Testing and Monitoring in Cloud-Native Environments.",
    speaker: "Saurabh Mishra",
    org: "TSYS",
    date: "Sept 21, 2025",
    duration: "25 Min",
    overview: "Building Resilient APIs: Automated Testing and Monitoring in Cloud-Native Environments.",
    category: "Lightning Talk"
  },
  {
    start: "04:15",
    end: "04:35",
    title: "Beyond the Spec – Making OpenAPI More Human.",
    speaker: "Eeshan Sawant",
    org: "ONLYOFFICE",
    date: "Sept 21, 2025",
    duration: "20 Min",
    overview: "Beyond the Spec – Making OpenAPI More Human.",
    category: "Lightning Talk"
  },
  {
    start: "04:35",
    end: "05:00",
    title: "Snack & Networking",
    speaker: "",
    org: "",
    date: "Sept 21, 2025",
    duration: "25 Min",
    overview: "",
    category: "Social Networking"
  },
  {
    start: "05:00",
    end: "05:20",
    title: "APIs, Advocacy & Open Source – Driving Real Engagement Through Real-World OSS Projects.",
    speaker: "Abhishek Mankhuskar",
    org: "SWOC",
    date: "Sept 21, 2025",
    duration: "20 Min",
    overview: "APIs, Advocacy & Open Source – Driving Real Engagement Through Real-World OSS Projects.",
    category: "Session"
  },
  {
    start: "05:20",
    end: "06:00",
    title: "Panel Discussion",
    speaker: "",
    org: "",
    date: "Sept 21, 2025",
    duration: "40 Min",
    overview: "Host - Mahaveer Muttha, Panelist - Megha Arora, Savinder Puri, Pranoti Nandurkar, Simon Hansford",
    category: "Main Event"
  },
  {
    start: "06:00",
    end: "06:15",
    title: "Closing Note",
    speaker: "",
    org: "The API Community",
    date: "Sept 21, 2025",
    duration: "15 Min",
    overview: "Closing Note",
    category: "Remarks"
  },
];

const TRACK_1 = [
  {
    start: "02:30",
    end: "03:15",
    title: "Google Cloud APIs Workshop",
    room: "Workshop Room A",
    speaker: "Shagufta Bangi",
    org: "Google",
    date: "Sept 21, 2025",
    duration: "45 Min",
    overview: "Hands-on workshop covering Google Cloud APIs and best practices. Learn to integrate and optimize Google Cloud services in your applications.",
    category: "Workshop"
  },
];
const TRACK_2 = [
  {
    start: "03:15",
    end: "04:00",
    title: "Postman API Development Workshop",
    room: "Workshop Room B",
    speaker: "Sristi Rajbhoge",
    org: "Postman",
    date: "Sept 21, 2025",
    duration: "45 Min",
    overview: "Master Postman for API development and testing. Learn advanced features, automation, and collaboration techniques for efficient API workflows.",
    category: "Workshop"
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
  { key: "track1", label: "Google Workshop" },
  { key: "track2", label: "Postman Workshop" },
];

const SCHEDULES = {
  track1: TRACK_1,
  track2: TRACK_2,
};

type TabKey = keyof typeof SCHEDULES;

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
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {item.title} Details
            </h2>
            
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
          
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Overview</h3>
              <p className="text-gray-700">{item.overview}</p>
            </div>
            
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {item.category}
              </span>
            </div>
          </div>
          
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
          {/* <div className="flex flex-wrap items-center gap-2">
            {item.room && (
              <span className="inline-flex items-center rounded-full bg-orange-50 text-orange-700 border border-orange-200 px-2.5 py-1 text-[10px] md:text-xs font-medium">
                {item.room}
              </span>
            )}
          </div> */}
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
    setTimeout(() => setSelectedEvent(null), 300);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="relative px-6 sm:px-8 md:px-10 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-start">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
            Agenda
          </h1>
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
            Workshop Tracks
          </h3>

          <div
            role="tablist"
            aria-label="Workshop tracks"
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

      <EventDetailDialog
        item={selectedEvent}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />

      <Footer />
    </div>
  );
}