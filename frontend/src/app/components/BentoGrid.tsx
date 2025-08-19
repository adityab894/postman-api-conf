import React from "react";
import Image from "next/image";
import { BentoGrid as BentoGridComponent, BentoGridItem } from "./ui/bento-grid";
import { Mic, Wrench, Users, Rocket, Globe } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="px-10 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">
            Conference Highlights
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover what makes API Conf 2025 the premier event for API enthusiasts
          </p>
        </div>
        
        <BentoGridComponent className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              header={item.header}
              backgroundClassName={item.backgroundClassName}
              className={i === 3 || i === 5 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGridComponent>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Expert Speakers",
    description: 
      "Gain unparalleled insights from renowned industry leaders, API architects, and technology visionaries. Our expert speakers will share real-world experiences, success stories, and valuable lessons that can help you stay ahead in the ever-evolving API landscape.",
    icon: <Mic className="h-5 w-5" />,
    backgroundClassName: "bg-orange-50",
  },
  
  {
    title: "Networking Opportunities",
    description: 
      "Forge meaningful connections with developers, engineers, product managers, and technology professionals from diverse backgrounds. Whether over coffee chats, breakout sessions, or networking lounges, this is your chance to expand your circle and explore new collaborations.",
    icon: <Users className="h-5 w-5" />,
    backgroundClassName: "bg-amber-100",
  },
  {
    title: "Latest API Trends",
    description: 
      "Stay ahead of the curve by learning about the latest innovations in API design, security, scalability, and performance. Discover how leading organizations are leveraging emerging trends such as API-first architecture, GraphQL, AI integration, and beyond.",
    icon: <Rocket className="h-5 w-5" />,
    backgroundClassName: "bg-teal-100",
  },
  {
    title: "Community Building",
    description: 
      "Be part of something bigger than yourself by engaging with the Postman Community and like-minded tech enthusiasts. Share knowledge, collaborate on projects, and contribute to building an inclusive ecosystem that supports growth, innovation, and collective learning.",
    icon: <Globe className="h-5 w-5" />,
    backgroundClassName: "bg-indigo-100",
  },
  {
    // Replaced with Stats.svg graphic
    header: (
      <div className="w-full flex items-center justify-center">
        <Image
          src="/Stats-cropped.svg"
          alt="Conference Stats"
          width={320}
          height={320}
          className="w-48 h-48 md:w-64 md:h-54"
        />
      </div>
    ),
    backgroundClassName: "bg-orange-100",
  },
];
