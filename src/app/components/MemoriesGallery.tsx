"use client";

import React, { useMemo, useState, useCallback, useEffect } from "react";
import Image from "next/image";

export type MemoryItem = {
  id: string;
  src: string;
  width?: number;
  height?: number;
  alt: string;
  tags?: string[];
  section?: string;
  credit?: string;
};

const TAGS_ORDER = [
  "Highlights",
  "Keynotes",
  "Workshops",
  "Networking",
  "Sponsors",
  "Speakers",
];

export default function MemoriesGallery({
  year,
  items,
}: {
  year: string;
  items: MemoryItem[];
}) {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => (i.tags || []).forEach((t) => set.add(t)));
    const ordered = TAGS_ORDER.filter((t) => set.has(t));
    const remaining = Array.from(set).filter((t) => !TAGS_ORDER.includes(t));
    return ["All", ...ordered, ...remaining];
  }, [items]);

  const filtered = useMemo(() => {
    if (activeTag === "All") return items;
    return items.filter((i) => i.tags?.includes(activeTag));
  }, [activeTag, items]);

  const openLightbox = useCallback((idx: number) => setSelectedIndex(idx), []);
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const showPrev = useCallback(() => {
    setSelectedIndex((idx) => (idx === null ? null : (idx + filtered.length - 1) % filtered.length));
  }, [filtered.length]);
  const showNext = useCallback(() => {
    setSelectedIndex((idx) => (idx === null ? null : (idx + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((t) => {
          const active = t === activeTag;
          return (
            <button
              key={t}
              onClick={() => setActiveTag(t)}
              className={[
                "px-3 py-1.5 rounded-full text-sm border transition-all duration-200",
                active
                  ? "bg-white border-orange-300 text-gray-900 shadow-sm ring-1 ring-orange-300"
                  : "bg-orange-50/80 border-orange-200 text-orange-700 hover:bg-white hover:shadow-sm",
              ].join(" ")}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Masonry-like grid using CSS columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {filtered.map((item, idx) => (
          <figure
            key={item.id}
            className="group mb-4 break-inside-avoid rounded-xl border border-gray-200 bg-white p-2 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(idx)}
          >
            <div className="relative w-full overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width || 1200}
                height={item.height || 800}
                className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            {(item.alt || item.section) && (
              <figcaption className="px-1 pt-2">
                <div className="text-sm font-semibold text-gray-800">
                  {item.section || ""}
                </div>
                <div className="text-xs text-gray-600">{item.alt}</div>
                {item.tags && item.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-orange-50/80 text-orange-700 border border-orange-200 px-2.5 py-0.5 text-[10px] font-medium shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && filtered[selectedIndex] && (
        <div className="fixed inset-0 z-[1000]">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeLightbox}
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl">
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow"
                aria-label="Close"
              >
                <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative rounded-xl overflow-hidden bg-white">
                <Image
                  src={filtered[selectedIndex].src}
                  alt={filtered[selectedIndex].alt}
                  width={filtered[selectedIndex].width || 1600}
                  height={filtered[selectedIndex].height || 1067}
                  className="w-full h-auto object-contain"
                />
                <div className="p-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      {filtered[selectedIndex].section || "API Conf Pune " + year}
                    </div>
                    <div className="text-xs text-gray-600">{filtered[selectedIndex].alt}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={showPrev}
                      className="px-3 py-1.5 rounded-lg border bg-white hover:bg-gray-50 text-sm"
                      aria-label="Previous"
                    >
                      Prev
                    </button>
                    <button
                      onClick={showNext}
                      className="px-3 py-1.5 rounded-lg border bg-white hover:bg-gray-50 text-sm"
                      aria-label="Next"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
