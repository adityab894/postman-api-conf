"use client";

import React from 'react';
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
        img: "/api-conf/postman.png",
        url: "https://www.postman.com/"
      }
    ]
  },
  // {
  //   title: "Gold Sponsor",
  //   tier: "diamond",
  //   sponsors: [
  //     { 
  //       name: "Google for Developers",
  //       img: "/api-conf/gdg.png"
  //     }
  //   ]
  // },
  {
    title: "Associate Sponsor",
    tier: "associate",
    sponsors: [
      { 
        name: "Google for Developers",
        img: "/api-conf/google.png",
        url: "https://developers.google.com/"
      },
      { 
        name: "Github Education",
        img: "/api-conf/github.png",
        url: "https://education.github.com/"
      } 
    ]
  },
  {
    title: "In Kind Sponsor",
    tier: "inkind",
    sponsors: [
      { 
        name: "Pieces",
        img: "/api-conf/pieces.png",
        url: "https://pieces.app/"
      },
      { 
        name: "Keploy",
        img: "/api-conf/keploy.png",
        url: "https://keploy.io/"
      }
    ]
  },
  {
  title: "Ecosystem Partner",
  tier: "ecosystem",
  sponsors: [
    { 
      name: "GDG Pune",
      img: "/api-conf/gdg.png",
      url: "https://gdg.community.dev/gdg-pune/"
    },
    { 
      name: "Avocado",
      img: "/api-conf/avocado.png",
      url: "https://avocadoaiwebtest.z30.web.core.windows.net/"
    }
  ]
  },
  {
    title: "Booth Partners",
    tier: "booth",
    sponsors: [
      { 
        name: "Postman",
        img: "/api-conf/postman.png",
        url: "https://www.postman.com/"
      },
      
      { 
        name: "We Make Devs",
        img: "/api-conf/WeMakeDevs.png",
        url: "https://wemakedevs.org/"
      },
      { 
        name: "Apify",
        img: "/api-conf/apify.png",
        url: "https://apify.com/"
      },
      { 
        name: "DevRelSqaud",
        img: "/api-conf/devrel.png",
        url: "https://devrelsquad.com/"
      },
      { 
        name: "Civo",
        img: "/api-conf/civo.png",
        url: "https://www.civo.com/"
      },
    ]
  },
  {
    title: "Partner Communities",
    tier: "community",
    sponsors: [
      { 
        name: "AWS User Group Pune",
        img: "/api-conf/aws.jpg",
        url: "https://www.linkedin.com/company/aws-user-group-pune/"
      },
      { 
        name: "Cloud Native Community Group Pune",
        img: "/api-conf/cncg.png",
        url: "https://community.cncf.io/cloud-native-pune/"
      },
      { 
        name: "Docker Community Pune",
        img: "/api-conf/docker.png",
        url: "https://www.linkedin.com/company/docker-community-pune/"
      },
      { 
        name: "Google Developer Group Cloud Pune",
        img: "/api-conf/gdgcloud.png",
        url: "https://gdg.community.dev/gdg-cloud-pune/"
      },
      { 
        name: "Girls Leading Tech",
        img: "/api-conf/girls.png",
        url: "https://www.linkedin.com/company/girlsleadingtech"
      },
      { 
        name: "Social Winter of Code",
        img: "/api-conf/swoc.png",
        url: "https://www.socialwinterofcode.com/"
      },
      { 
        name: "Postman Community Kolkata",
        img: "/api-conf/kolkata.png",
        url: "https://www.linkedin.com/company/postmancomkol/"
      },
      // { 
      //   name: "Postman Community",
      //   img: "/api-conf/postman.png"
      // },

    ]
  },
  {
    title: "Knowledge Partner",
    tier: "Knowledge",
    sponsors: [
      { 
        name: "Chipp",
        img: "/api-conf/chipp.svg",
        url: "https://chipp.ai/"
      },
      { 
        name: "Jet Brains",
        img: "/api-conf/jetbrains.png",
        url: "https://www.jetbrains.com/"
      },
    ]
  },
  {
    title: "CFP Partners",
    tier: "CFP",
    sponsors: [
      { 
        name: "Sessionize",
        img: "/api-conf/sessionize.png",
        url: "https://sessionize.com/"
      },
    ]
  },
  {
    title: "Ticket Partners",
    tier: "ticket",
    sponsors: [
      { 
        name: "Konfhub",
        img: "/api-conf/konfhub.png",
        url: "https://konfhub.com/"
      },
    ]
  }
];

// Helper function to get sponsor size based on tier
const getSponsorSize = (tier: string) => {
  switch (tier) {
    case 'title':
      return 'w-64 h-32';
    case 'associate':
    case 'inkind':
    case 'Knowledge':
    case 'CFP':
    case 'ticket':
      return 'w-48 h-24';
    case 'booth':
      return 'w-48 h-24';
    case 'community':
      return 'w-48 h-24';
    default:
      return 'w-48 h-24';
  }
};

// Sponsor Card Component
const SponsorCard = ({ 
  sponsor, 
  tier 
}: { 
  sponsor: { name: string; img: string; url: string }; 
  tier: string; 
}) => (
  <a 
    href={sponsor.url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group cursor-pointer transform transition-all duration-300 hover:scale-105 block"
  >
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
  </a>
);

// Main Sponsors Page Component
export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              OUR SPONSORS
            </h1>
            <p className="text-xl text-left text-gray-600 max-w-9xl">
              We extend our heartfelt gratitude to our sponsors whose generous support makes this conference possible. 
              Their commitment to fostering innovation and community growth enables us to create an exceptional experience for all participants.
            </p>
          </div>
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sponsorTiers.map((tierGroup, index) => (
          <div key={index} className={`${
            // Reduce spacing between "Associate Sponsor", "In Kind Sponsor", and "Knowledge Partner"
            tierGroup.title === "Associate Sponsor" || 
            tierGroup.title === "In Kind Sponsor" || 
            tierGroup.title === "Knowledge Partner" ? "mb-8" : "mb-16"
          }`}>
            <div className="text-start mb-8">
              <div className="inline-flex items-start px-6 py-3 rounded-full text-black font-semibold text-lg">
                {tierGroup.title}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-start">
              {tierGroup.sponsors.map((sponsor, sponsorIndex) => (
                <div key={sponsorIndex} className={`${
                  // Reduce width for Associate, In Kind, Knowledge, CFP, and Ticket sponsors
                  tierGroup.title === "Associate Sponsor" || 
                  tierGroup.title === "In Kind Sponsor" || 
                  tierGroup.title === "Knowledge Partner" ||
                  tierGroup.title === "CFP Partners" ||
                  tierGroup.title === "Ticket Partners"
                    ? 'w-full sm:w-1/2 lg:w-1/4 max-w-xs' 
                    : tierGroup.sponsors.length === 1 
                    ? 'w-full max-w-xs' 
                    : tierGroup.sponsors.length === 2 
                    ? 'w-full sm:w-1/2 lg:w-1/3' 
                    : tierGroup.sponsors.length <= 4 
                    ? 'w-full sm:w-1/2 lg:w-1/4' 
                    : 'w-full sm:w-1/2 lg:w-1/3 xl:w-1/5'
                }`}>
                  <SponsorCard
                    sponsor={sponsor}
                    tier={tierGroup.tier}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}