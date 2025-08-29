"use client";

import { useMemo, useState } from "react";
import CustomPillNav from "./CustomPillNav";
import Footer from "./Footer";

const EVENT_TIMELINE = [
  { start: "09:30", end: "10:30", title: "Welcome Note", room: "Main Stage" },
  {
    start: "10:30",
    end: "11:00",
    title:
      "The AI Catalyst: Transforming SDLC with Agent-driven Efficiency and Accuracy",
    speaker: "Vishal Virani",
    org: "DhiWise",
    room: "Main Stage",
  },
  {
    start: "17:30",
    end: "18:00",
    title: "Closing Announcements",
    room: "Main Stage",
  },
];

const TRACK_1 = [
  {
    start: "11:15",
    end: "12:00",
    title: "Session A",
    room: "Track 1",
    speaker: "TBA",
  },
];
const TRACK_2 = [
  {
    start: "12:15",
    end: "13:00",
    title: "Session B",
    room: "Track 2",
    speaker: "TBA",
  },
];
const TRACK_3 = [
  {
    start: "14:00",
    end: "14:45",
    title: "Session C",
    room: "Track 3",
    speaker: "TBA",
  },
];
const LIGHTNING_TALKS = [
  {
    start: "15:00",
    end: "16:00",
    title: "Lightning Talks Round",
    room: "Lightning Talks",
    speaker: "Multiple",
  },
];
const CAREER_COMPASS = [
  {
    start: "16:15",
    end: "17:00",
    title: "Career Compass: AMA",
    room: "Career Compass",
    speaker: "TBA",
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

function TimelineItem({
  item,
  isLast,
}: {
  item: ScheduleItem;
  isLast: boolean;
}) {
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
        <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
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
}

function Timeline({ items }: { items: ScheduleItem[] }) {
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
        />
      ))}
    </div>
  );
}

export default function Agenda() {
  const [activeTab, setActiveTab] = useState<TabKey>("track1");
  const activeItems = useMemo<ScheduleItem[]>(
    () => SCHEDULES[activeTab] ?? [],
    [activeTab]
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed top-0 left-0 w-full h-20 bg-white z-[999]"></div>
      <CustomPillNav />
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
          <Timeline items={EVENT_TIMELINE} />
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
            <Timeline items={activeItems} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}