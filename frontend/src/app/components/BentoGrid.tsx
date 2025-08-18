import React from "react";
import { BentoGrid as BentoGridComponent, BentoGridItem } from "./ui/bento-grid";

export function BentoGrid() {
  return (
    <section className="px-10 py-16 bg-white-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">
            Conference Highlights
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
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
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
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
    icon: <span className="text-2xl"></span>,
  },
  {
    title: "Hands-on Workshops",
    description: 
      "Step beyond theory with immersive, practical workshops designed to sharpen your skills. Work directly with APIs, tools, and frameworks in guided sessions led by experts, giving you the confidence to solve real-world challenges effectively.",
    icon: <span className="text-2xl"></span>,
  },
  {
    title: "Networking Opportunities",
    description: 
      "Forge meaningful connections with developers, engineers, product managers, and technology professionals from diverse backgrounds. Whether over coffee chats, breakout sessions, or networking lounges, this is your chance to expand your circle and explore new collaborations.",
    icon: <span className="text-2xl"></span>,
  },
  {
    title: "Latest API Trends",
    description: 
      "Stay ahead of the curve by learning about the latest innovations in API design, security, scalability, and performance. Discover how leading organizations are leveraging emerging trends such as API-first architecture, GraphQL, AI integration, and beyond.",
    icon: <span className="text-2xl"></span>,
  },
  {
    title: "Community Building",
    description: 
      "Be part of something bigger than yourself by engaging with the Postman Community and like-minded tech enthusiasts. Share knowledge, collaborate on projects, and contribute to building an inclusive ecosystem that supports growth, innovation, and collective learning.",
    icon: <span className="text-2xl"></span>,
  },
  {
    title: "Innovation Showcase",
    description: 
      "Experience the future of technology at our Innovation Showcase, where startups, enterprises, and innovators present breakthrough tools and solutions. Get inspired by cutting-edge ideas that are pushing the boundaries of what APIs can achieve.",
    icon: <span className="text-2xl"></span>,
  },
  {
    title: "Career Growth",
    description: 
      "Accelerate your professional journey by gaining fresh perspectives, advanced knowledge, and practical skills directly from experts in the API domain. Learn how to navigate career opportunities, enhance your portfolio, and become a thought leader in the rapidly growing API space.",
    icon: <span className="text-2xl"></span>,
  },
];
