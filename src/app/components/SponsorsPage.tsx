"use client";

import React from 'react';
import CustomPillNav from "./CustomPillNav";
import Footer from "./Footer";
import Image from "next/image";

// Sponsor data with image paths
const sponsorTiers = [
  {
    title: "Title Sponsor",
    tier: "title",
    sponsors: [
      { 
        name: "Postman",
        img: "/api-conf/postman.png"
      }
    ]
  },
  {
    title: "Gold Sponsor",
    tier: "diamond",
    sponsors: [
      { 
        name: "Google for Developers",
        img: "/api-conf/gdg.png"
      }
    ]
  },
  {
    title: "Associate Sponsor",
    tier: "diamond",
    sponsors: [
      { 
        name: "Github Education",
        img: "/api-conf/github.png"
      }
    ]
  },
  {
    title: "Booth Partners",
    tier: "booth",
    sponsors: [
      { 
        name: "Postman",
        img: "/api-conf/postman.png"
      },
      
      { 
        name: "We Make Devs",
        img: "/api-conf/WeMakeDevs.png"
      },
      { 
        name: "Apify",
        img: "/api-conf/apify.png"
      },
      { 
        name: "DevrelSqaud",
        img: "/api-conf/devrel.png"
      },
      { 
        name: "Civo",
        img: "/api-conf/civo.png"
      },
    ]
  },
  {
    title: "Partner Communities",
    tier: "community",
    sponsors: [
      { 
        name: "AWS User Group Pune",
        img: "/api-conf/aws.jpg"
      },
      { 
        name: "Cloud Native Community Group Pune",
        img: "/api-conf/cncg.png"
      },
      { 
        name: "Docker Community Pune",
        img: "/api-conf/docker.png"
      },
      { 
        name: "Googel Developer Group Cloud Pune",
        img: "/api-conf/gdgcloud.png"
      },
      { 
        name: "Girls Leading Tech",
        img: "/api-conf/girls.png"
      },
      { 
        name: "Social Winter of Code",
        img: "/api-conf/swoc.png"
      },
      { 
        name: "Postman Community Kolkata",
        img: "/api-conf/kolkata.png"
      },
      // { 
      //   name: "Postman Community",
      //   img: "/api-conf/postman.png"
      // },

    ]
  },
  {
    title: "Knowledge Partner",
    tier: "Knowledge Partner",
    sponsors: [
      { 
        name: "Chipp",
        img: "/api-conf/chipp.svg"
      },
    ]
  },
  {
    title: "CFP Partners",
    tier: "CFP",
    sponsors: [
      { 
        name: "Sessionize",
        img: "/api-conf/sessionize.png"
      },
    ]
  },
  {
    title: "Ticket Partners",
    tier: "ticket",
    sponsors: [
      { 
        name: "Konfhub",
        img: "/api-conf/konfhub.png"
      },
    ]
  }
];

// Helper function to get sponsor size based on tier
const getSponsorSize = (tier: string) => {
  switch (tier) {
    case 'title':
      return 'w-48 h-24';
    case 'diamond':
      return 'w-40 h-20';
    case 'bronze':
      return 'w-36 h-18';
    case 'booth':
      return 'w-32 h-16';
    default:
      return 'w-40 h-20';
  }
};

// Sponsor Card Component
const SponsorCard = ({ 
  sponsor, 
  tier 
}: { 
  sponsor: { name: string; img: string }; 
  tier: string; 
}) => (
  <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-200 group-hover:border-blue-300">
      <div className="flex flex-col items-center space-y-4">
        {/* Image Container */}
        <div className={`${getSponsorSize(tier)} flex items-center justify-center bg-white rounded-lg overflow-hidden border border-gray-100`}>
          <Image 
            src={sponsor.img}
            alt={sponsor.name}
            width={200}
            height={100}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-lg">
                    <div class="text-center">
                      <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                `;
              }
            }}
          />
        </div>
        
        {/* Sponsor Name */}
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-800">{sponsor.name}</h3>
        </div>
      </div>
    </div>
  </div>
);

// Main Sponsors Page Component
export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 w-full h-20 bg-white z-[999]"></div>
      <CustomPillNav />
      
      {/* Header Section */}
      <div className="bg-white shadow-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Sponsors
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sponsors dedicated to building remarkable experience! Thank you to all our partners 
              who make The API Conf Pune 2025 possible.
            </p>
          </div>
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sponsorTiers.map((tierGroup, index) => (
          <div key={index} className="mb-16">
            <div className="text-start mb-8">
              <div className="inline-flex items-start px-6 py-3 rounded-full text-black font-semibold text-lg">
                {tierGroup.title}
              </div>
            </div>

            <div className={`grid gap-8 justify-items-start ${
              tierGroup.sponsors.length === 1 
                ? 'grid-cols-1' 
                : tierGroup.sponsors.length === 2 
                ? 'grid-cols-1 md:grid-cols-2' 
                : tierGroup.sponsors.length <= 4 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
            }`}>
              {tierGroup.sponsors.map((sponsor, sponsorIndex) => (
                <SponsorCard
                  key={sponsorIndex}
                  sponsor={sponsor}
                  tier={tierGroup.tier}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}
