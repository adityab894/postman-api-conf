"use client";

import React, { useState } from 'react';
import CustomPillNav from "./CustomPillNav";
import Footer from "./Footer";
import Image from "next/image";

// Speaker data
const speakers = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior API Architect",
    company: "TechCorp",
    bio: "John is a passionate API enthusiast with over 10 years of experience in designing scalable APIs. He has contributed to various open-source projects and loves sharing knowledge with the community.",
    linkedin: "https://linkedin.com/in/johndoe",
    image: "/speakers/speaker1.png"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Developer Advocate - Aditya bisht postman community pune",
    company: "DevTools Inc",
    bio: "Jane specializes in API documentation and developer experience. She has helped thousands of developers integrate APIs effectively and believes in the power of clear communication.",
    linkedin: "https://linkedin.com/in/janesmith",
    image: "/speakers/speaker2.png"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "API Security Expert",
    company: "SecureAPI",
    bio: "Mike is a security researcher focused on API vulnerabilities and best practices. He has discovered critical security flaws in major platforms and advocates for secure API development.",
    linkedin: "https://linkedin.com/in/mikejohnson",
    image: "/speakers/speaker3.jpg"
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "Product Manager",
    company: "API Solutions",
    bio: "Sarah leads product strategy for API platforms and has successfully launched multiple developer-focused products. She understands the business value of well-designed APIs.",
    linkedin: "https://linkedin.com/in/sarahwilson",
    image: "/speakers/speaker4.jpg"
  },
  {
    id: 5,
    name: "David Brown",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    bio: "David is a full-stack developer who has built numerous applications using various APIs. He shares practical insights on API integration and modern development practices.",
    linkedin: "https://linkedin.com/in/davidbrown",
    image: "/speakers/speaker5.jpg"
  },
  {
    id: 6,
    name: "Lisa Chen",
    role: "API Testing Specialist",
    company: "QualityFirst",
    bio: "Lisa specializes in API testing and automation. She has developed comprehensive testing strategies for complex API ecosystems and helps teams deliver reliable APIs.",
    linkedin: "https://linkedin.com/in/lisachen",
    image: "/speakers/speaker6.jpg"
  },
  {
    id: 7,
    name: "Alex Rodriguez",
    role: "DevOps Engineer",
    company: "CloudOps",
    bio: "Alex focuses on API deployment and infrastructure. He has experience with microservices architecture and helps organizations scale their API operations effectively.",
    linkedin: "https://linkedin.com/in/alexrodriguez",
    image: "/speakers/speaker7.jpg"
  },
  {
    id: 8,
    name: "Emma Davis",
    role: "API Designer",
    company: "Design Systems",
    bio: "Emma is passionate about API design and user experience. She believes that well-designed APIs should be intuitive and accessible to developers of all skill levels.",
    linkedin: "https://linkedin.com/in/emmadavis",
    image: "/speakers/speaker8.jpg"
  }
];

// Speaker Card Component
const SpeakerCard = ({ speaker, onClick }: { speaker: typeof speakers[0]; onClick: () => void }) => (
  <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105" onClick={onClick}>
    <div className="flex flex-col items-center space-y-4">
      {/* Speaker Image */}
      <div className="w-60 h-60 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200">
        <Image
          src={speaker.image}
          alt={speaker.name}
          width={180}
          height={180}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-full">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              `;
            }
          }}
        />
      </div>

      {/* Speaker Info */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{speaker.name}</h3>
        <p className="text-sm font-semibold text-blue-600 mb-1">{speaker.role}</p>
        <p className="text-sm text-gray-600">{speaker.company}</p>
      </div>
    </div>
  </div>
);

// Speaker Modal Component
const SpeakerModal = ({ speaker, isOpen, onClose }: { speaker: typeof speakers[0] | null; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen || !speaker) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000] p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-8">
            <div className="flex gap-8">
              {/* Left Side - Image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border-4 border-gray-200">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center rounded-full">
                            <div class="text-center">
                              <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{speaker.name}</h2>
                <p className="text-xl font-semibold text-blue-600 mb-1">{speaker.role}</p>
                <p className="text-lg text-gray-600 mb-6">{speaker.company}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
                  <p className="text-gray-700 leading-relaxed">{speaker.bio}</p>
                </div>

                {/* LinkedIn Link */}
                <div className="flex items-center">
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Speakers Page Component
export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakers[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpeakerClick = (speaker: typeof speakers[0]) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 w-full h-20 bg-white z-[999]"></div>
      <CustomPillNav />

      {/* Header Section */}
      <div className="bg-white shadow-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              OUR SPEAKERS
            </h1>
            <p className="text-xl text-left text-gray-600 max-w-9xl">
              Our speakers are influential leaders and allies actively involved in various communities within their organizations, cities, countries, and beyond, making a significant impact through their contributions and support.
            </p>
          </div>
        </div>
      </div>

      {/* Speakers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard 
              key={speaker.id} 
              speaker={speaker} 
              onClick={() => handleSpeakerClick(speaker)}
            />
          ))}
        </div>
      </div>

      {/* Speaker Modal */}
      <SpeakerModal 
        speaker={selectedSpeaker}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
}
