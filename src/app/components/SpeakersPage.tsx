"use client";

import React, { useState, useCallback, memo } from "react";
import Footer from "./Footer";
import Image from "next/image";

// Speaker data
const speakers = [
  {
    id: 1,
    name: "Aanchal Mishra",
    role: "Developer Advocate",
    company: "POSTMAN",
    bio: " ",
    linkedin: "https://www.linkedin.com/in/mishra-aanchal/",
    image: "/speakers/aanchal.jpeg",
  },
  {
    id:2,
    name: "Megha Arora",
    role: "DevRel Strategist & Founder",
    company: "DevRelSquad",
    bio: "Megha Arora is the Founder of DevRelSquad, India's first full-stack Developer Relations execution partner helping tech companies win developers through strategic leadership and impactful programs. With 13+ years of engineering experience and a strong background in developer advocacy, Megha Arora has previously worked with leading companies like MongoDB, Apple, Microsoft, MakeMyTrip, and Samsung. At DevRelSquad, they drive developer engagement through large-scale meetups and hackathons across 13+ cities, practical content platforms, and innovative AI-powered tools like Avocado for event automation. Passionate about strengthening the Indian developer ecosystem, Megha Arora brings a unique blend of technical expertise, community building, and business impact to the stage.",
    linkedin: "https://www.linkedin.com/in/devrelmegha/",
    image: "/speakers/megha.jpeg",
  },
  {
    id: 3,
    name: "Saurav Jain",
    role: "Senior Developer Community Manager",
    company: "Apify",
    bio: "Saurav Jain is the Senior Developer Community Manager at Apify, where he advocates for open source, AI agents, and web scraping technologies. A Docker Captain and passionate community builder, Saurav creates impactful content that bridges developers with modern tools and practices. With expertise in Python, Node.js, and public speaking, he actively champions developer growth and knowledge sharing. Beyond tech, he is also an advocate for actor development, bringing creativity and communication together to empower diverse communities.",
    linkedin: "https://www.linkedin.com/in/sauain/",
    image: "/speakers/sauravjain.jpeg",
  },
  {
    id: 4,
    name: "Bhawna Chauhan",
    role: "Developer Relations Engineer",
    company: "QuillAI Network",
    bio: "Hi, I'm Bhawna, currently working as a Developer Relations Engineer at QuillAI Network, where we're focused on building the security & verification layer for the ecosystem. I'm passionate about open source & community. I've had the opportunity to contribute to projects like Harbor, Near Protocol, MonadoXR, and Radarbase through programs such as MLH Fellowship, LFX Mentorship, and more. Beyond that, I'm an avid hackathon enthusiast with over 40 hackathons under my belt and 20+ wins along the way.",
    linkedin: "https://www.linkedin.com/in/connectbhawna/",
    image: "/speakers/bhawna.jpeg",
  },
  {
    id: 5,
    name: "Shagufta Bangi",
    role: "Customer Engineer",
    company: "Google",
    bio: "Shagufta is a Google Cloud, AWS, and Oracle Certified Solutions Architect and Cloud Specialist with extensive experience in IT infrastructure and services. As a Cloud Consultant, Shagufta has a strong track record in designing and delivering solutions across IaaS, PaaS, and SaaS platforms. Skilled in customer service, strategic planning, and public speaking, Shagufta helps organizations harness the power of cloud technology to scale and innovate.",
    linkedin: "https://www.linkedin.com/in/shagufta-bangi",
    image: "/speakers/shagufta.png",
  },
  {
    id: 6,
    name: "Savinder Puri",
    role: "DevOps Evangelist",
    company: "Zensar Technologies UK",
    bio: "Savinder is a DevOps Evangelist at Zensar Technologies, UK. He is passionate about helping Enterprises across industry verticals solve business problems, based off technology solutions. Savinder is a recognised figure in the DevOps space and has been speaking at leading industry events worldwide. He is a Global DevOps Ambassador with DevOps Institute and Continuous Delivery Foundation (CDF) Ambassador. He's also authored the widely popular 'How do I build a career in DevOps A practical handbook to help you start or scale up your career in DevOps', which is available on Amazon worldwide.",
    linkedin: "https://www.linkedin.com/in/savinderpuri/",
    image: "/speakers/SavinderPuri.png",
  },
  {
    id: 7,
    name: "Mahaveer Muttha",
    role: "Co-founder",
    company: "Birdvision",
    bio: "Mahaveer Muttha is the Director of Information Technology at Birdvision Consulting, leading a team of engineers and consultants to deliver innovative technology solutions across industries. With over 12 years of experience in enterprise software development, Mahaveer Muttha specializes in building scalable mobile and web applications. Passionate about startups, they mentor and advise entrepreneurs on turning ideas into impactful businesses. As an active organizer of Google Developers Group and Chainlink, they foster collaboration and knowledge sharing within the tech community. Their mission is to harness mobile, IoT, and AI technologies to create solutions that solve real-world problems and improve lives.",
    linkedin: "https://www.linkedin.com/in/mahaveer-muttha/",
    image: "/speakers/mahaveer.jpg",
  },
  {
    id: 8,
    name: "Pranoti Nandurkar",
    role: "Technical Architect",
    company: "Tata consultancy services",
    bio: "Pranoti is a women Techmakers ambassador and GDG organiser for Pune chapter. She is having around 14 years of experience in tech. She is working Technical Architect at Tata consultancy services. She strongly believe in contributing to communities. In her free time you can find her working closely with tech communities or learning new technology. She also enjoys traveling and spending time in nature.",
    linkedin: "https://www.linkedin.com/in/pranoti-nandurkar-170021b/",
    image: "/speakers/pranoti.jpeg",
  },
  {
    id: 9,
    name: "Simon Hansford",
    role: "Chief Commercial Officer",
    company: "CIVO",
    bio: "Simon Hansford is a tech entrepreneur and leader with deep expertise in Cloud, SaaS, and IT Managed Services. He has successfully founded and scaled technology businesses, led high-performing teams, and driven global go-to-market strategies. With experience as a Director and NED, Simon works closely with customers, investors, and boards, bringing significant insight into VC, PE, and M&A opportunities.",
    linkedin: "https://www.linkedin.com/in/simonhansford/",
    image: "/speakers/simon.png",
  },
  
  {
    id: 10,
    name: "Subhasmita Swain",
    role: "DevOps Lead",
    company: "CIVO",
    bio: "Subhasmita is a Site Reliability Engineer at Civo, passionate about automation and building code-driven solutions for diverse challenges. With hands-on experience through internships at Outreachy and the Linux Foundation’s Kubernetes project, she has a proven track record in advancing open-source initiatives. As a Kubernetes Release Shadow, Subhasmita actively contributes to community growth while advocating for environmental sustainability in technology.",
    linkedin: "https://www.linkedin.com/in/subhasmita-swain",
    image: "/speakers/subhasmita.png",
  },
  {
    id: 11,
    name: "Ali Mustufa",
    role: "Senior Developer Advocate",
    company: "Pieces for Developers",
    bio: "Ali Mustufa is a Senior Developer Advocate at Pieces, a TEDx speaker, and a recognized educator in Generative AI and APIs. With experience delivering corporate trainings for organizations like Rakuten, Infosys, Deloitte, and ADP, Ali has equipped professionals with practical skills in cloud, APIs, and technical leadership. He has reached over 500,000 students across 500+ colleges through workshops and community initiatives, and has played a key role in fostering developer ecosystems, including founding India's first TensorFlow User Group. A passionate advocate for empowering early-age developers, Ali combines technical expertise, community leadership, and global speaking experience to inspire the next generation of innovators.",
    linkedin: "https://www.linkedin.com/in/ialimustufa/",
    image: "/speakers/ali.jpeg",
  },
  {
    id: 12,
    name: "Sakshi Nasha",
    role: "Software Engineer",
    company: "Cohesity",
    bio: "Sakshi Nasha is a Senior Software Engineer at Cohesity, where they bring together technical curiosity and a passion for building software that drives real impact. With a strong belief in technology's power to create meaningful change, they love exploring complex systems and solving challenging problems. A strong advocate for diversity in tech, Sakshi Nasha actively leads initiatives to empower women in technology. As an international speaker, they've shared experiences and learnings at conferences worldwide, connecting with vibrant developer communities. Outside of work, they're an athlete at heart—whether trekking through the outdoors or cycling through the city, they seek energy and balance beyond the keyboard.",
    linkedin: "https://www.linkedin.com/in/sakshi-nasha/",
    image: "/speakers/sakshinasha.jpeg",
  },
  {
    id: 13,
    name: "Nikhilesh Tayal",
    role: "Founder and Teacher",
    company: "AIMLetc.com",
    bio: "Nikhilesh is an entrepreneur, teacher and tech nerd. He is an IIT Kharagpur alumnus. He is also a Google Developer Expert for AI and has 13000+ followers on LinkedIn. Currently, he runs AI ML etc. - an AI-enabled personalised teacher with self-managing memory. He has 20+ years of work experience, of which 14+ is in entrepreneurship. Previously he had built 2 startups. He raised funds for his previous startup - CvBhejo (a mobile-based recruitment platform) and then got a successful exit. He started his career with Infosys and worked as an AI team lead at iViZ Security. He is also felicitated by the Chief Minister of Rajasthan for his contribution to startups and education.",
    linkedin: "https://www.linkedin.com/in/nikhileshtayal/",
    image: "/speakers/nikhilesh.png",
  },
  
  {
    id: 14,
    name: "Srushti Raybhoge",
    role: "Software Engineer 2",
    company: "Addepar",
    bio: "Software Engineer learning and exploring new technologies while growing to be a versatile individual. Enthusiastic in frontend and backend development with JavaScript and TypeScript-based frameworks and libraries. Aim to solve complex problems and develop simple solutions.",
    linkedin: "https://www.linkedin.com/in/srushti-raybhoge/",
    image: "/speakers/srushtidi.jpg",
  },
 
  {
    id: 15,
    name: "Abhishek Mankuskar",
    role: "Creator & Lead - SWOC",
    company: "Social Winter of Code",
    bio: "Abhishek Mankuskar is a Frontend Developer, Open Source Enthusiast, and community builder. As the Founding Organizer of Social Winter of Code (SWOC), they led the initiative's strategy, operations, and platform development, fostering sustainable open-source contributions. Currently an Associate Software Engineer at Coditas, they specialize in React.js and modern frontend practices. A frequent speaker at events like Google DevFest and Google Developer Student Clubs, Abhishek Mankuskar actively advocates for open source and community-driven innovation.",
    linkedin: "https://www.linkedin.com/in/abhishek-mankuskar-03790018b/",
    image: "/speakers/abhishek.png",
  },
  {
    id: 16,
    name: "Saurabh Mishra",
    role: "DevOps Lead",
    company: "TSYS",
    bio: "Saurabh is a Cloud Architect with a deep passion for DevOps and automation. Saurabh actively engages with the tech community, sharing insights on cloud-native technologies, security, and multi-cloud strategies. As a speaker at various conferences, meetups, and workshops, Saurabh helps teams enhance their cloud adoption and optimization efforts.",
    linkedin: "https://www.linkedin.com/in/connectsaurabhmishra/",
    image: "/speakers/saurabhmishra.png",
  },
  
  {
    id: 17,
    name: "Eeshan Sawant",
    role: "Technology Evangelist",
    company: "ONLYOFFICE",
    bio: " ",
    linkedin: "https://www.linkedin.com/in/sawanteeshaan/",
    image: "/speakers/eeshan.jpeg",
  },
];

// Speaker Card Component - Memoized to prevent re-renders
const SpeakerCard = memo(({
  speaker,
  onClick,
}: {
  speaker: (typeof speakers)[0];
  onClick: () => void;
}) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Speaker Image */}
        <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border-2 border-gray-200">
          <Image
            src={speaker.image}
            alt={speaker.name}
            width={240}
            height={240}
            className="w-full h-full object-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
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
          <p className="text-sm font-semibold text-blue-600 mb-1">
            {speaker.role}
          </p>
          <p className="text-sm text-gray-600">{speaker.company}</p>
        </div>
      </div>
    </div>
  );
});

SpeakerCard.displayName = 'SpeakerCard';

// Speaker Modal Component - Memoized to prevent re-renders
const SpeakerModal = memo(({
  speaker,
  isOpen,
  onClose,
}: {
  speaker: (typeof speakers)[0] | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen || !speaker) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      {/* Background overlay with blur */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose} // click outside to close
      />

      {/* Modal content */}
      <div
        className="
          relative bg-white rounded-2xl shadow-2xl 
          w-full max-w-3xl md:max-w-4xl 
          max-h-[85vh] overflow-y-auto 
          mx-4
          mt-20 sm:mt-24 md:mt-0   /* leaves space on mobile/tablet */
        "
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Body */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Left Side - Image */}
              <div className="flex-shrink-0">
                <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center bg-gray-100 rounded-full overflow-hidden border-4 border-gray-200">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{speaker.name}</h2>
              <p className="text-lg md:text-xl font-semibold text-blue-600 mb-1">{speaker.role}</p>
              <p className="text-md sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 text-start sm:text-left">
                  {speaker.company}
                </p>
              <div className="mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">About</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{speaker.bio}</p>
              </div>
              <div className="flex items-center">
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                >
                  {/* LinkedIn SVG */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
});

SpeakerModal.displayName = 'SpeakerModal';

// Main Speakers Page Component
export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<
    (typeof speakers)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpeakerClick = useCallback((speaker: (typeof speakers)[0]) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white shadow-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              OUR SPEAKERS
            </h1>
            <p className="text-xl text-left text-gray-600 max-w-9xl">
              Our speakers are influential leaders and allies actively involved
              in various communities within their organizations, cities,
              countries, and beyond, making a significant impact through their
              contributions and support.
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
