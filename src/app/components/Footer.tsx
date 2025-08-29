"use client";

import React from "react";
import Link from "next/link";
import Wave from "react-wavify";
import { Linkedin, Instagram, Github } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => (
  <footer className="w-full relative overflow-hidden text-black">
    <div className="absolute inset-0">
      <Wave
        fill="#DBEAFE"
        paused={false}
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
        }}
        options={{
          height: 20,
          amplitude: 20,
          points: 3,
        }}
      />
    </div>
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-between">
      <div className="w-full flex flex-col md:flex-row flex-wrap items-center md:items-start justify-between text-center md:text-left pt-16 pb-6 gap-2">
        <div className="max-w-xs mb-8 md:mb-0">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            {/* Footer Logo
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div> */}

            <h2 className="text-xl font-bold">THE API CONF PUNE 2025</h2>
          </div>
          <p className="text-sm font-semibold">
          The API Conf Pune 2025 is a community-driven, one-day conference bringing together 500+ developers, architects, and tech leaders to explore the future of APIs.
          </p>
        </div>

        <div className="mb-8 md:mb-0 gap-10">
          <h3 className="text-2xl font-bold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="text-sm font-semibold hover:underline"
              style={{ color: "black" }}
            >
              Home
            </Link>
            <Link
              href="/speakers"
              className="text-sm font-semibold hover:underline"
              style={{ color: "black" }}
            >
              Speakers
            </Link>
            <Link
              href="/sponsors"
              className="text-sm font-semibold hover:underline"
              style={{ color: "black" }}
            >
              Sponsors
            </Link>
            <Link
              href="/team"
              className="text-sm font-semibold hover:underline"
              style={{ color: "black" }}
            >
              Team
            </Link>
            <Link
              href="/agenda"
              className="text-sm font-semibold hover:underline"
              style={{ color: "black" }}
            >
              Agenda
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold hover:underline"
              style={{ color: "black" }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex flex-col flex-center items-center sm:items-start">
          <h3 className="text-2xl font-bold mb-3">Connect with us</h3>
          <div className="w-25 flex flex-col gap-4">
            <div
              className="flex flex-row gap-2 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/", "_blank")
              }
            >
              <Github />
              <p>Github</p>
            </div>
            <div
              className="flex flex-row gap-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/",
                  "_blank"
                )
              }
            >
              <Instagram />
              <p>Instagram</p>
            </div>
            <div
              className="flex flex-row gap-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/",
                  "_blank"
                )
              }
            >
              <Linkedin />
              <p>LinkedIn</p>
            </div>
            <div
              className="flex flex-row gap-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://x.com/",
                  "_blank"
                )
              }
            >
              <FaXTwitter className="h-5 w-5"/>
              <p>Twitter</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="w-50 h-50 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20"></div>
        </div>
      </div>

      <div className="w-full mt-auto border-t-1 border-gray-300">
        <div className="text-center text-sm py-4">
          © {new Date().getFullYear()} THE API CONF PUNE. All rights
          reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
