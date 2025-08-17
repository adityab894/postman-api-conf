"use client";

import React, { useState } from 'react';
import CustomPillNav from "./CustomPillNav";
import Footer from "./Footer";
import Image from "next/image";

// Team data
const organizingTeam = [
  {
    id: 1,
    name: "Shrawan Saproo",
    role: "Organizer",
    bio: "I’m Shrawan, a Community Builder, DevRel Leader, Technical Content Creator, and Region Lead at AI Camp, passionate about empowering developers and building thriving ecosystems. Currently leading Postman Community Pune and serving as a DigitalOcean Wavemaker, I bring 2+ years of experience in developer relations, community growth, and event management.",
    linkedin: "https://www.linkedin.com/in/shrawan513/",
    image: "/team/shrawan.jpg"
  },
  {
    id: 2,
    name: "Aditya Bisht",
    role: "Organizer",
    bio: "Sarah specializes in event planning and community engagement. She ensures smooth execution of community events and creates meaningful experiences for all participants.",
    linkedin: "https://www.linkedin.com/in/aditya894/",
    image: "/team/aditya.jpg"
  }
];

const teamLeads = [
  {
    id: 1,
    name: "Nilanjan Paul",
    role: "Technical Lead",
    bio: "Michael is a seasoned technical leader with expertise in API development and architecture. He mentors community members and guides them through complex technical challenges.",
    linkedin: "https://linkedin.com/in/michaelchen",
    image: "/team/nilanjan.jpg"
  },
  {
    id: 2,
    name: "Kunal Gavit",
    role: "Media Lead",
    bio: "Priya excels in community building and strategic planning. She empowers team members with the resources and guidance needed to achieve their goals.",
    linkedin: "https://linkedin.com/in/priyasharma",
    image: "/team/kunal.jpg"
  },
  {
    id: 3,
    name: "Aman Mogal",
    role: "Growth Lead",
    bio: "David oversees operational excellence and ensures smooth execution of all community initiatives. His strategic thinking drives continuous improvement.",
    linkedin: "https://linkedin.com/in/davidwilson",
    image: "/team/aman.jpg"
  },
  {
    id: 4,
    name: "Namrata Bhalerao",
    role: "Design Lead",
    bio: "Lisa manages content strategy and ensures high-quality educational materials for the community. She creates engaging learning experiences.",
    linkedin: "https://linkedin.com/in/lisarodriguez",
    image: "/team/namrata.jpg"
  },
  {
    id: 5,
    name: "Atharva Wani",
    role: "Design Lead",
    bio: "Alex drives community growth through strategic marketing initiatives and partnerships. He connects with developers worldwide.",
    linkedin: "https://linkedin.com/in/alexkumar",
    image: "/team/atharvaw.jpg"
  },
  {
    id: 6,
    name: "Alisha Sapkal",
    role: "Web Lead",
    bio: "Emma coordinates all community events and workshops. She ensures seamless execution and memorable experiences.",
    linkedin: "https://linkedin.com/in/emmathompson",
    image: "/team/alisha.jpg"
  },
  {
    id: 7,
    name: "Arjun Khadse",
    role: "Operations Lead",
    bio: "Raj builds relationships with developers and advocates for the community. He represents the voice of developers.",
    linkedin: "https://linkedin.com/in/rajpatel",
    image: "/team/arjun.jpg"
  },
  {
    id: 8,
    name: "Ritika Pasari",
    role: "Operations Lead",
    bio: "Sophie designs and delivers hands-on workshops. She makes complex topics accessible to developers of all levels.",
    linkedin: "https://linkedin.com/in/sophielee",
    image: "/team/ritika.jpg"
  },
  {
    id: 9,
    name: "Eric Fernandes",
    role: "Support Lead",
    bio: "Carlos expands community reach through strategic partnerships and collaborations with other tech communities.",
    linkedin: "https://linkedin.com/in/carlosmendez",
    image: "/team/eric.jpg"
  },
  {
    id: 10,
    name: "Alice Chauhan",
    role: "Content Lead",
    bio: "Anita coordinates mentorship programs and helps developers grow their skills through guided learning.",
    linkedin: "https://linkedin.com/in/anitasingh",
    image: "/team/alice.jpg"
  },
  {
    id: 11,
    name: "Hariprasad Sakhare",
    role: "Support Lead",
    bio: "Tom ensures comprehensive documentation and resources are available for community members.",
    linkedin: "https://linkedin.com/in/tomanderson",
    image: "/team/hariprasad.jpg"
  },
  {
    id: 12,
    name: "Suresh Chaudhary",
    role: "Creative Lead",
    bio: "Maria manages social media presence and engages with the community across various platforms.",
    linkedin: "https://linkedin.com/in/mariagarcia",
    image: "/team/suresh.jpg"
  },
  {
    id: 13,
    name: "Asmita Khuspe",
    role: "Anchors Lead",
    bio: "James coordinates volunteer efforts and ensures smooth operations during events and meetups.",
    linkedin: "https://linkedin.com/in/jameswilson",
    image: "/team/asmita.jpg"
  },
  {
    id: 14,
    name: "Rooheni Naraynkar",
    role: " Anchors Lead",
    bio: "Nina builds strategic partnerships with companies and organizations to support community initiatives.",
    linkedin: "https://linkedin.com/in/ninachen",
    image: "/team/roheeni.jpg"
  },
  {
    id: 15,
    name: "Nikhil Rajpurohit",
    role: "Growth Co-Lead",
    bio: "Ryan creates technical content and tutorials to help developers master API development.",
    linkedin: "https://linkedin.com/in/ryanoconnor",
    image: "/team/nikhil.jpg"
  },
  {
    id: 16,
    name: "Janhavi Dahatonde",
    role: "Technical Co-Lead",
    bio: "Zara manages day-to-day community operations and ensures a welcoming environment for all members.",
    linkedin: "https://linkedin.com/in/zaraahmed",
    image: "/team/janhavi.jpg"
  },
  {
    id: 17,
    name: "Khushi Jamale",
    role: "Growth Team",
    bio: "Zara manages day-to-day community operations and ensures a welcoming environment for all members.",
    linkedin: "https://linkedin.com/in/zaraahmed",
    image: "/team/khushi.jpg"
  },
  {
    id: 18,
    name: "Sakshi Sonawane",
    role: "Media Co-Lead",
    bio: "Kevin explores emerging technologies and brings innovative ideas to the community.",
    linkedin: "https://linkedin.com/in/kevinpark",
    image: "/team/sakshi.jpg"
  },
  {
    id: 19,
    name: "Adhishri Kore",
    role: "Designer",
    bio: "Sara ensures high standards in all community initiatives and maintains quality across programs.",
    linkedin: "https://linkedin.com/in/sarajohnson",
    image: "/team/adhishri.jpg"
  },
  {
    id: 20,
    name: "Ankit Mishra",
    role: "Designer",
    bio: "Daniel conducts research on developer needs and trends to inform community strategy.",
    linkedin: "https://linkedin.com/in/danielkim",
    image: "/team/ankit.jpg"
  },
  {
    id: 21,
    name: "Saloni Pawar",
    role: "Designer",
    bio: "Rachel collects and analyzes community feedback to continuously improve our programs and initiatives.",
    linkedin: "https://linkedin.com/in/rachelgreen",
    image: "/team/saloni.jpg"
  },
  {
    id: 22,
    name: "Sakshi Chaudhary",
    role: "Designer",
    bio: "Rachel collects and analyzes community feedback to continuously improve our programs and initiatives.",
    linkedin: "https://linkedin.com/in/rachelgreen",
    image: "/team/sakshichaudhari.jpg"
  },
  {
    id: 23,
    name: "Pratyush Panda",
    role: "Video Editor",
    bio: "Rachel collects and analyzes community feedback to continuously improve our programs and initiatives.",
    linkedin: "https://linkedin.com/in/rachelgreen",
    image: "/team/pratyush.jpg"
  },
  {
    id: 24,
    name: "Rutuja",
    role: "Video Editor",
    bio: "Rachel collects and analyzes community feedback to continuously improve our programs and initiatives.",
    linkedin: "https://linkedin.com/in/rachelgreen",
    image: "/team/rutuja.jpg"
  },
  {
    id: 25,
    name: "Prathmesh Wagh",
    role: "Videographer",
    bio: "Rachel collects and analyzes community feedback to continuously improve our programs and initiatives.",
    linkedin: "https://linkedin.com/in/rachelgreen",
    image: "/team/prathmeshx.jpg"
  },
  {
    id: 26,
    name: "Prisha Shah",
    role: "Photographer",
    bio: "Rachel collects and analyzes community feedback to continuously improve our programs and initiatives.",
    linkedin: "https://linkedin.com/in/rachelgreen",
    image: "/team/prisha.jpg"
  },

];

// Team Member Card Component
const TeamMemberCard = ({ member, onClick }: { member: typeof organizingTeam[0] | typeof teamLeads[0]; onClick: () => void }) => (
  <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105" onClick={onClick}>
    <div className="flex flex-col items-center space-y-4">
      {/* Team Member Image */}
      <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200">
        <Image
          src={member.image}
          alt={member.name}
          width={128}
          height={128}
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

      {/* Team Member Info */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
        <p className="text-sm font-semibold text-blue-600 mb-1">{member.role}</p>
      </div>
    </div>
  </div>
);

// Team Modal Component
const TeamModal = ({ member, isOpen, onClose }: { member: typeof organizingTeam[0] | typeof teamLeads[0] | null; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen || !member) return null;

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
                    src={member.image}
                    alt={member.name}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
                <p className="text-xl font-semibold text-blue-600 mb-1">{member.role}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>

                {/* LinkedIn Link */}
                <div className="flex items-center">
                  <a
                    href={member.linkedin}
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

// Main Team Page Component
export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<typeof organizingTeam[0] | typeof teamLeads[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: typeof organizingTeam[0] | typeof teamLeads[0]) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 w-full h-20 bg-white z-[999]"></div>
      <CustomPillNav />


      {/* Organizing Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
              Organizing Team
            </h2>
            <p className="text-lg text-gray-600 max-w-9xl mx-auto leading-relaxed text-left">
              Our mission is to equip our community members with practical skills, enabling them to communicate their insights and drive innovative solutions effectively. Whatever your challenge, these leaders on the front line of transformation, innovation, and exploration helped solve it with you.
            </p>
          </div>

          {/* Organizing Team Grid - 2 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {organizingTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} onClick={() => handleMemberClick(member)} />
            ))}
          </div>
        </div>
      </div>

      {/* Team Leads Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
              Team Leads & Members
            </h2>
            <p className="text-lg text-gray-600 max-w-9xl mx-auto leading-relaxed text-left ">
              Our Team Leads are the guiding stars, illuminating the path for our community members. They inspire, motivate, and empower our teams to achieve extraordinary results. By leveraging their strategic thinking and problem-solving abilities, they empower our community members to overcome obstacles and achieve groundbreaking results. They empower our community members by providing the tools, resources, and mentorship needed to unlock their full potential.
            </p>
          </div>

          {/* Team Leads Grid - 3 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamLeads.map((member) => (
              <TeamMemberCard key={member.id} member={member} onClick={() => handleMemberClick(member)} />
            ))}
          </div>
        </div>
      </div>

      {/* Team Modal */}
      <TeamModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
}
