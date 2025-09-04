"use client"
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import { BentoGrid } from "./BentoGrid";
import EventCountdown from "./EventCountdown";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="relative flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-10 py-12 md:py-16 overflow-hidden mt-24 md:mt-20">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-10 md:gap-16">
          <div className="flex-1 space-y-6 max-w-2xl mx-auto">
            <h1 className="text-left text-2xl sm:text-2xl md:text-5xl font-extrabold leading-tight text-gray-900">
              <span className="whitespace-nowrap">THE API CONFERENCE,</span><br />
              <span className="text-orange-600">PUNE 2025</span>
            </h1>
            <p className="text-justify text-gray-600 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
            The API Conf Pune 2025 is the first edition of a community-driven flagship conference, hosted by the API Community India. Marking the beginning of a new chapter in India&apos;s tech ecosystem, this conference is dedicated to changing the API revolution in India by bringing together developers, architects, product leaders, and technology enthusiasts from across the country. Designed to spark collaboration and knowledge exchange.
            </p>
            <div className="flex flex-wrap justify-start md:justify-start gap-4">
              <Link 
                href="/tickets"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
                Book A Ticket
              </Link>
            </div>
          </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-center relative">
          <div className="flex items-center justify-center">
          <Image
            src="/API.svg"
            alt="API Illustration"
            width={700}
            height={700}
            className="object-contain w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl"
            priority
          />
          </div>
        </div>
        </div>
      </section>
     
      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-10 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8">
            <div className="flex justify-center md:justify-end">
              {/* SVG Shapes with Text - Positioned close together on the right */}
              <div className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 justify-center md:justify-end overflow-visible">
                {/* 35+ Speakers */}
                <div className="relative md:shrink-0">
                  <Image
                    src="/home/3.svg"
                    alt="Speakers"
                    width={300}
                    height={180}
                    className="w-40 h-28 sm:w-56 sm:h-36 md:w-64 md:h-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">25+</div>
                    <div className="text-sm sm:text-base font-medium text-gray-700">Speakers</div>
                  </div>
                </div>
                
                {/* 1000+ Participants */}
                <div className="relative md:shrink-0">
                  <Image
                    src="/home/4.svg"
                    alt="Participants"
                    width={300}
                    height={180}
                    className="w-40 h-28 sm:w-56 sm:h-36 md:w-64 md:h-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">500+</div>
                    <div className="text-sm sm:text-base font-medium text-gray-700">Participants</div>
                  </div>
                </div>
                
                {/* 25+ Sessions */}
                <div className="relative md:shrink-0">
                  <Image
                    src="/home/5.svg"
                    alt="Sessions"
                    width={300}
                    height={180}
                    className="w-40 h-28 sm:w-56 sm:h-36 md:w-64 md:h-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">15+</div>
                    <div className="text-sm sm:text-base font-medium text-gray-700">Sessions</div>
                  </div>
                </div>
                
                {/* 1 Day(s) */}
                <div className="relative md:shrink-0">
                  <Image
                    src="/home/6.svg"
                    alt="Days"
                    width={300}
                    height={180}
                    className="w-40 h-28 sm:w-56 sm:h-36 md:w-64 md:h-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">1</div>
                    <div className="text-sm sm:text-base font-medium text-gray-700">Day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EventCountdown targetDate="2025-09-21T09:00:00" title="The API Conf Countdown" />

      {/* Bento Grid Section */}
      <BentoGrid />

      <Footer />
    </div>
  );
}