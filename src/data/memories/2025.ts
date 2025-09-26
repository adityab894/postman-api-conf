import { MemoryItem } from "@/app/components/MemoriesGallery";

// Note: Using existing local assets to avoid broken images during development.
// Replace/add with real 2025 memory photos under public/memories/2025/* as they become available.

export const memories2025: MemoryItem[] = [
  {
    id: "hero-api",
    src: "/memories/2025/main.JPG",
    alt: "API Conf Pune 2025 branding",
    section: "Highlights",
    tags: ["Highlights"],
    width: 1200,
    height: 800,
  },
  {
    id: "panda-mascot",
    src: "/memories/2025/aanchal.png",
    alt: "Conference mascot",
    section: "Speakers",
    tags: ["Speakers", "Highlights"],
    width: 800,
    height: 800,
  },
  {
    id: "stat-speakers",
    src: "/memories/2025/abhishek.png",
    alt: "25+ Speakers",
    section: "Stats",
    tags: ["Speakers", "Highlights"],
    width: 1024,
    height: 640,
  },
  {
    id: "stat-participants",
    src: "/memories/2025/ali.png",
    alt: "500+ Participants",
    section: "Stats",
    tags: ["Networking"],
    width: 1024,
    height: 640,
  },
  {
    id: "stat-sessions",
    src: "/memories/2025/bhawna.png",
    alt: "15+ Sessions",
    section: "Stats",
    tags: ["Workshops"],
    width: 1024,
    height: 640,
  },
  {
    id: "stat-day",
    src: "/memories/2025/cyberX.png",
    alt: "1 Day",
    section: "Stats",
    tags: ["Highlights"],
    width: 1024,
    height: 640,
  },
  {
    id: "stat-day",
    src: "/memories/2025/dyp.png",
    alt: "1 Day",
    section: "Stats",
    tags: ["Highlights"],
    width: 1024,
    height: 640,
  },
];

export default memories2025;
