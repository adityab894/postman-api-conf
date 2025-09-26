"use client";

import React from "react";
import MemoriesGallery from "@/app/components/MemoriesGallery";
import { memories2025 } from "@/data/memories/2025";

export default function MemoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-white" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-medium text-orange-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
            API Conf Memories · 2025
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Relive the moments from Pune 2025
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600 text-base sm:text-lg">
            A curated gallery of highlights, talks, workshops, and community vibes from The API Conf Pune 2025.
            Filter by category and click any photo to view it larger.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-16">
        <MemoriesGallery year="2025" items={memories2025} />
      </section>
    </main>
  );
}
