"use client"

import CustomPillNav from "./CustomPillNav";
import Footer from "./Footer";

export default function Agenda() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed top-0 left-0 w-full h-20 bg-white z-[999]"></div>
      <CustomPillNav />

      <section className="relative px-10 py-24 overflow-hidden mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
            Agenda
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            We’re finalizing an exciting schedule. Check back soon!
          </p>

          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-1 gap-4">
              <div className="h-20 rounded-xl border border-gray-200 bg-gray-50 animate-pulse" />
              <div className="h-20 rounded-xl border border-gray-200 bg-gray-50 animate-pulse" />
              <div className="h-20 rounded-xl border border-gray-200 bg-gray-50 animate-pulse" />
            </div>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 bg-white">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="text-sm font-medium text-gray-800">Coming Soon</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


