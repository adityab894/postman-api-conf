"use client";

import React, { useState } from 'react';
import CustomPillNav from "./CustomPillNav";
import Footer from "./Footer";
import Image from "next/image";

// Speaker data
const speakers = [
  {
    id: 1,
    name: "Revealing Soon",
    role: "Revealing Soon",
    company: "Postman",
    bio: "John is a passionate API enthusiast with over 10 years of experience in designing scalable APIs. He has contributed to various open-source projects and loves sharing knowledge with the community.",
    linkedin: "https://linkedin.com/in/johndoe",
    image: ""
  },
  {
    id: 2,
    name: "Revealing Soon",
    role: "Revealing Soon",
    company: "Postman",
    bio: "Jane specializes in API documentation and developer experience. She has helped thousands of developers integrate APIs effectively and believes in the power of clear communication.",
    linkedin: "https://linkedin.com/in/janesmith",
    image: ""
  },
  {
    id: 3,
    name: "Sterling Chin",
    role: "Senior Developer Advocate ",
    company: "Postman",
    bio: "Sterling Chin is a Senior Developer Advocate at Postman, where he focuses on helping developers build smarter and faster with AI-powered tools. With a strong background in software development and a passion for innovation, Sterling has been instrumental in creating resources and experiences that empower developers in their API journey. Always curious and building something new, he brings a unique blend of technical expertise and advocacy to bridge the gap between cutting-edge technology and developer communities.",
    linkedin: "https://www.linkedin.com/in/sterlingchin/",
    image: "/speakers/sterling.jpg"
  },
  {
    id: 4,
    name: "Kunal Kushwaha",
    role: "Field CTO",
    company: "CIVO",
    bio: "Kunal Kushwaha is the Field CTO at Civo, where he helps businesses modernize their infrastructure with cloud-native technologies and AI. He is also the founder of WeMakeDevs, a global community initiative that mentors and empowers developers. With millions reached through his educational YouTube content, Kunal is a passionate advocate for open source and frequently speaks at leading conferences on cloud, AI, and developer growth.",
    linkedin: "https://www.linkedin.com/in/kunal-kushwaha/",
    image: "/speakers/kunal.jpg"
  },
  {
    id: 5,
    name: "Savinder Puri",
    role: "DevOps Evangelist",
    company: "Zensar Technologies UK",
    bio: "Savinder is a DevOps Evangelist at Zensar Technologies, UK. He is passionate about helping Enterprises across industry verticals solve business problems, based off technology solutions. Savinder is a recognised figure in the DevOps space and has been speaking at leading industry events worldwide. He is a Global DevOps Ambassador with DevOps Institute and Continuous Delivery Foundation (CDF) Ambassador. He's also authored the widely popular 'How do I build a career in DevOps A practical handbook to help you start or scale up your career in DevOps', which is available on Amazon worldwide.",
    linkedin: "https://www.linkedin.com/in/savinderpuri/",
    image: "/speakers/SavinderPuri.png"
  },
  {
    id: 6,
    name: "Mahaveer Muttha",
    role: "Co-founder",
    company: "Birdvision",
    bio: "Mahaveer Muttha is the Director of Information Technology at Birdvision Consulting, leading a team of engineers and consultants to deliver innovative technology solutions across industries. With over 12 years of experience in enterprise software development, Mahaveer Muttha specializes in building scalable mobile and web applications. Passionate about startups, they mentor and advise entrepreneurs on turning ideas into impactful businesses. As an active organizer of Google Developers Group and Chainlink, they foster collaboration and knowledge sharing within the tech community. Their mission is to harness mobile, IoT, and AI technologies to create solutions that solve real-world problems and improve lives.",
    linkedin: "https://www.linkedin.com/in/mahaveer-muttha/",
    image: "/speakers/mahaveer.jpg"
  },
  {
    id: 7,
    name: "Megha Arora",
    role: "DevRel Strategist & Founder",
    company: "DevRelSquad",
    bio: "Megha Arora is the Founder of DevRelSquad, India’s first full-stack Developer Relations execution partner helping tech companies win developers through strategic leadership and impactful programs. With 13+ years of engineering experience and a strong background in developer advocacy, Megha Arora has previously worked with leading companies like MongoDB, Apple, Microsoft, MakeMyTrip, and Samsung. At DevRelSquad, they drive developer engagement through large-scale meetups and hackathons across 13+ cities, practical content platforms, and innovative AI-powered tools like Avocado for event automation. Passionate about strengthening the Indian developer ecosystem, Megha Arora brings a unique blend of technical expertise, community building, and business impact to the stage.",
    linkedin: "https://www.linkedin.com/in/devrelmegha/",
    image: "/speakers/megha.jpeg"
  },
  {
    id: 8,
    name: "Ali Mustufa",
    role: "Senior Developer Advocate",
    company: "Pieces for Developers",
    bio: "Ali Mustufa is a Senior Developer Advocate at Pieces, a TEDx speaker, and a recognized educator in Generative AI and APIs. With experience delivering corporate trainings for organizations like Rakuten, Infosys, Deloitte, and ADP, Ali has equipped professionals with practical skills in cloud, APIs, and technical leadership. He has reached over 500,000 students across 500+ colleges through workshops and community initiatives, and has played a key role in fostering developer ecosystems, including founding India’s first TensorFlow User Group. A passionate advocate for empowering early-age developers, Ali combines technical expertise, community leadership, and global speaking experience to inspire the next generation of innovators.",
    linkedin: "https://www.linkedin.com/in/ialimustufa/",
    image: "/speakers/ali.jpeg"
  },
  {
    id: 9,
    name: "Pranoti Nandurkar",
    role: "Technical Architect",
    company: "Tata consultancy services",
    bio: "Pranoti is a women Techmakers ambassador and GDG organiser for Pune chapter. She is having around 14 years of experience in tech. She is working Technical Architect at Tata consultancy services. She strongly believe in contributing to communities. In her free time you can find her working closely with tech communities or learning new technology. She also enjoys traveling and spending time in nature.",
    linkedin: "https://www.linkedin.com/in/pranoti-nandurkar-170021b/",
    image: "/speakers/pranoti.jpeg"
  },
  {
    id: 10,
    name: "Sakshi Nasha",
    role: "Software Engineer",
    company: "Cohesity",
    bio: "Sakshi Nasha is a Senior Software Engineer at Cohesity, where they bring together technical curiosity and a passion for building software that drives real impact. With a strong belief in technology's power to create meaningful change, they love exploring complex systems and solving challenging problems. A strong advocate for diversity in tech, Sakshi Nasha actively leads initiatives to empower women in technology. As an international speaker, they've shared experiences and learnings at conferences worldwide, connecting with vibrant developer communities. Outside of work, they're an athlete at heart—whether trekking through the outdoors or cycling through the city, they seek energy and balance beyond the keyboard.",
    linkedin: "https://www.linkedin.com/in/sakshi-nasha/",
    image: "/speakers/sakshinasha.jpeg"
  },
  {
    id: 11,
    name: "Nikhilesh Tayal",
    role: "Founder and Teacher",
    company: "AIMLetc.com",
    bio: "Saurav Jain is the Senior Developer Community Manager at Apify, where he advocates for open source, AI agents, and web scraping technologies. A Docker Captain and passionate community builder, Saurav creates impactful content that bridges developers with modern tools and practices. With expertise in Python, Node.js, and public speaking, he actively champions developer growth and knowledge sharing. Beyond tech, he is also an advocate for actor development, bringing creativity and communication together to empower diverse communities.",
    linkedin: "https://www.linkedin.com/in/nikhileshtayal/",
    image: "/speakers/nikhilesh.jpg"
  },
  {
    id: 12,
    name: "Saurav Jain",
    role: "Senior Developer Community Manager",
    company: "Apify",
    bio: "Saurav Jain is the Senior Developer Community Manager at Apify, where he advocates for open source, AI agents, and web scraping technologies. A Docker Captain and passionate community builder, Saurav creates impactful content that bridges developers with modern tools and practices. With expertise in Python, Node.js, and public speaking, he actively champions developer growth and knowledge sharing. Beyond tech, he is also an advocate for actor development, bringing creativity and communication together to empower diverse communities.",
    linkedin: "https://www.linkedin.com/in/sauain/",
    image: "/speakers/sauravjain.jpeg"
  },
  {
    id: 13,
    name: "Srushti Raybhoge",
    role: "Software Engineer 2",
    company: "Addepar",
    bio: "Software Engineer learning and exploring new technologies while growing to be a versatile individual. Enthusiastic in frontend and backend development with JavaScript and TypeScript-based frameworks and libraries. Aim to solve complex problems and develop simple solutions.",
    linkedin: "https://www.linkedin.com/in/srushti-raybhoge/",
    image: "/speakers/srushtidi.jpg"
  },
  {
    id: 14,
    name: "Bhawna Chauhan",
    role: "Developer Relations Engineer",
    company: "QuillAI Network",
    bio: "Hi, I'm Bhawna, currently working as a Developer Relations Engineer at QuillAI Network, where we're focused on building the security & verification layer for the ecosystem. I'm passionate about open source & community. I've had the opportunity to contribute to projects like Harbor, Near Protocol, MonadoXR, and Radarbase through programs such as MLH Fellowship, LFX Mentorship, and more. Beyond that, I'm an avid hackathon enthusiast with over 40 hackathons under my belt and 20+ wins along the way.",
    linkedin: "https://www.linkedin.com/in/connectbhawna/",
    image: "/speakers/bhawna.jpeg"
  },
  {
    id: 15,
    name: "Abhishek Mankuskar",
    role: "Creator & Lead - SWOC",
    company: "Social Winter of Code",
    bio: "Abhishek Mankuskar is a Frontend Developer, Open Source Enthusiast, and community builder. As the Founding Organizer of Social Winter of Code (SWOC), they led the initiative's strategy, operations, and platform development, fostering sustainable open-source contributions. Currently an Associate Software Engineer at Coditas, they specialize in React.js and modern frontend practices. A frequent speaker at events like Google DevFest and Google Developer Student Clubs, Abhishek Mankuskar actively advocates for open source and community-driven innovation.",
    linkedin: "hhttps://www.linkedin.com/in/abhishek-mankuskar-03790018b/",
    image: "/speakers/abhishek.jpg"
  },
  {
    id: 16,
    name: "Saurabh Mishra",
    role: "DevOps Lead",
    company: "TSYS",
    bio: "Saurabh is a Cloud Architect with a deep passion for DevOps and automation. Saurabh actively engages with the tech community, sharing insights on cloud-native technologies, security, and multi-cloud strategies. As a speaker at various conferences, meetups, and workshops, Saurabh helps teams enhance their cloud adoption and optimization efforts.",
    linkedin: "https://www.linkedin.com/in/connectsaurabhmishra/",
    image: "/speakers/saurabhmishra.png"
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
