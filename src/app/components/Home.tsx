"use client"
import Image from "next/image";
import Link from "next/link";
import CustomPillNav from "./CustomPillNav";
import Footer from "./Footer";
import { BentoGrid } from "./BentoGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed top-0 left-0 w-full h-20 bg-white z-[999]"></div>
      <CustomPillNav />

      <section className="relative flex flex-col md:flex-row items-center pl-50 px-10 py-16 overflow-hidden mt-20">
        <div className="relative z-10 flex flex-col md:flex-row items-center w-full">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
              THE API CONFERENCE,<br />
              <span className="text-orange-600">PUNE 2025</span>
            </h1>
            <p className="text-gray-600 max-w-lg">
            The API Conf Pune 2025 is the first edition of a community-driven flagship conference, hosted by the Postman Community Pune. Marking the beginning of a new chapter in India&apos;s tech ecosystem, this conference is dedicated to changing the API revolution in India by bringing together developers, architects, product leaders, and technology enthusiasts from across the country. Designed to spark collaboration and knowledge exchange.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link 
                href="/tickets"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
                Book A Ticket
              </Link>
            </div>
          </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-start relative">
          <div className="absolute inset-0 flex items-center justify-start">
          <Image
            src="/API.svg"
            alt="API Illustration"
            width={700}
            height={700}
            className="object-contain -translate-x-20"
            priority
          />
          </div>
        </div>
        </div>
      </section>
     
      {/* Stats Section */}
      <section className="px-10 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 border border-black-200 rounded-3xl p-6 md:p-8">
            <div className="flex justify-end">
              {/* SVG Shapes with Text - Positioned close together on the right */}
              <div className="flex gap-6">
                {/* 35+ Speakers */}
                <div className="relative">
                  <Image
                    src="/home/3.svg"
                    alt="Speakers"
                    width={300}
                    height={180}
                    className="w-64 h-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-4xl font-extrabold text-gray-900">25+</div>
                    <div className="text-base font-medium text-gray-700">Speakers</div>
                  </div>
                </div>
                
                {/* 1000+ Participants */}
                <div className="relative">
                  <Image
                    src="/home/4.svg"
                    alt="Participants"
                    width={300}
                    height={180}
                    className="w-64 h-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-4xl font-extrabold text-gray-900">500+</div>
                    <div className="text-base font-medium text-gray-700">Participants</div>
                  </div>
                </div>
                
                {/* 25+ Sessions */}
                <div className="relative">
                  <Image
                    src="/home/5.svg"
                    alt="Sessions"
                    width={300}
                    height={180}
                    className="w-64 h-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-4xl font-extrabold text-gray-900">15+</div>
                    <div className="text-base font-medium text-gray-700">Sessions</div>
                  </div>
                </div>
                
                {/* 1 Day(s) */}
                <div className="relative">
                  <Image
                    src="/home/6.svg"
                    alt="Days"
                    width={300}
                    height={180}
                    className="w-64 h-40"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-4xl font-extrabold text-gray-900">1</div>
                    <div className="text-base font-medium text-gray-700">Day(s)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* BentoGrid Section */}
       <BentoGrid />


       <section className="px-10 py-16 bg-white">
         <div className="max-w-6xl mx-auto">
           <div className="bg-white rounded-2xl shadow-lg p-12">
             <div className="grid md:grid-cols-2 gap-12">
               {/* Left Section */}
               <div className="space-y-6">
                 <h2 className="text-6xl font-bold text-gray-600">
                   ABOUT API
                 </h2>
                 <h4 className="text-6xl font-bold text-gray-700">
                 CONF PUNE 2025
                 </h4>
              </div>

              {/* Right Section */}
              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                API Conf Pune was not created as just another tech event. It grew out of a genuine need to close the gaps in how we build, connect and scale with APIs. It reflects a shared commitment to collaboration that goes beyond boundaries and a vision for an ecosystem where ideas not only move but also grow, spark and multiply.
                </p>
                <p className="text-lg font-semibold text-gray-700 italic">
                It’s a return to innovation, to community, and to the future of APIs.
                </p>
                {/* <p className="text-gray-700 text-lg leading-relaxed">
                  We&apos;re here to create experiences that don&apos;t just inform, <span className="font-bold">but transform</span>.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
