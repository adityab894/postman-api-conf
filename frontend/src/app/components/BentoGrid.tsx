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
    description: "Learn from industry leaders and API experts who will share their insights and experiences.",
    icon: <span className="text-2xl">🎤</span>,
  },
  {
    title: "Hands-on Workshops",
    description: "Get practical experience with real-world API development and testing scenarios.",
    icon: <span className="text-2xl">🛠️</span>,
  },
  {
    title: "Networking Opportunities",
    description: "Connect with fellow developers, architects, and technology professionals.",
    icon: <span className="text-2xl">🤝</span>,
  },
  {
    title: "Latest API Trends",
    description: "Stay updated with the newest developments in API design, security, and best practices.",
    icon: <span className="text-2xl">📈</span>,
  },
  {
    title: "Community Building",
    description: "Join the growing Postman Community and contribute to the API ecosystem.",
    icon: <span className="text-2xl">🌱</span>,
  },
  {
    title: "Innovation Showcase",
    description: "Discover cutting-edge tools and technologies that are shaping the future of APIs.",
    icon: <span className="text-2xl">💡</span>,
  },
  {
    title: "Career Growth",
    description: "Advance your career by learning from peers and industry experts in the API space.",
    icon: <span className="text-2xl">🚀</span>,
  },
];
