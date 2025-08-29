"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import CustomPillNav from "./CustomPillNav";
import Footer from "./Footer";

// FAQ Data
const faqData = [
  {
    question: "What is API Conf 2025?",
    answer:
      "API Conf 2025 is a global community-driven tech conference, hosted by the Postman Community Pune. This API Conf event is India's premier API conference, powered by Postman. This event aims to bring together developers, tech enthusiasts, and industry leaders to explore the latest in API technologies.",
  },
  {
    question: "Who can register for API Conf 2025?",
    answer:
      "API Conf 2025 is open to all developers, technologists, students, tech professionals, and anyone interested in learning about API, Postman tools. Whether you're a beginner or an experienced developer, everyone is welcome to join and participate in the event.",
  },
  {
    question: "Is it mandatory to register to participate in the event?",
    answer:
      "Yes, registration is mandatory to participate in API Conf 2025. Most API Conf events require an RSVP to help organizers plan better events and manage attendance. Registration numbers help us ensure we have adequate resources and space for all attendees.",
  },
  {
    question: "I'm a beginner in programming. Can I still register?",
    answer:
      "Absolutely! API Conf 2025 welcomes developers of all skill levels, including beginners. The event features sessions ranging from introductory topics to advanced technical content. It's a great opportunity for beginners to learn, network with experienced developers, and get inspired to continue their programming journey.",
  },
  {
    question: "What will attendees get by participating in the event?",
    answer:
      "Attendees will gain access to technical sessions, workshops, networking opportunities, hands-on experiences with Postman tools, learning about the latest trends in API development, and more. You'll also receive swags, have opportunities to connect with industry experts, and potentially win prizes during various activities.",
  },
  {
    question: "How can I communicate my queries?",
    answer:
      "For any inquiries or concerns regarding API Conf 2025, you can reach out to the organizers at LinkedIn https://www.linkedin.com/company/postmanapipune/. You can also contact the Postman Community Pune through their official social media channels or community platforms.",
  },
  {
    question: "What technologies will be covered at API Conf 2025?",
    answer:
      "API Conf 2025 covers a wide range of API tools including Postman for cross-platform development, Web Development, and much more. This year's focus includes emerging technologies.",
  },
  {
    question: "Will the event be in-person or virtual?",
    answer: "API Conf 2025 is an in-person event held at Pune, Maharashtra.",
  },
  {
    question: "Can I speak at API Conf 2025?",
    answer:
      "Yes! If you're interested in speaking at API Conf 2025, you can contact the local GDG chapter to learn about speaking opportunities. The Call for Papers (CFP) is typically announced several months before the event, allowing community members to submit their talk proposals.",
  },
  {
    question: "Are there student discounts available?",
    answer:
      "Yes, API Conf 2025 typically offers student tickets at discounted rates. However, these tickets are limited and tend to sell out quickly. Keep an eye on the registration announcements and register early to secure your student ticket.",
  },
];

// FAQ Item Component
const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="bg-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-100 focus:outline-none transition-colors duration-200"
      onClick={onToggle}
    >
      <h3 className="text-md text-gray-900 pr-4">{question}</h3>
      <div className="flex-shrink-0">
        {isOpen ? (
          <ChevronUpIcon className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        )}
      </div>
    </button>

    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-6 pb-5 pt-2">
        <p className="text-gray-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-200 rounded-2xl mb-16">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

// Main FAQ Page Component
export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed top-0 left-0 w-full h-20 bg-white z-[999]"></div>
      <CustomPillNav />

      {/* Header Section */}
      <div className="text-black mt-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-start">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <h4 className="text-xl opacity-90 max-w-2xl text-start">
            Need Answers? Everything you need to know about The API Conf Pune
            2025
          </h4>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  );
}