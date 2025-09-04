"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EventCountdownProps {
  title?: string;
  targetDate: string; // Example: "2025-12-31T23:59:59"
}

export default function EventCountdown({ title = "Event Countdown", targetDate }: EventCountdownProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full max-w-xl sm:mx-auto">
      <div className="relative rounded-2xl bg-gradient-to-r from-sky-100 via-blue-100 to-indigo-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
        <Card className="rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <CardHeader className="pb-2 pt-6">
            <CardTitle className="text-center text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-2">
              {/* Days */}
              <div className="group relative rounded-xl bg-gradient-to-b from-white/90 to-white/70 ring-1 ring-blue-200 px-3 py-4 md:px-4 md:py-5 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tabular-nums">
                  {timeLeft.days}
                </div>
                <div className="mt-1 text-[10px] md:text-xs tracking-widest uppercase text-blue-600">Days</div>
                <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]" />
              </div>

              {/* Hours */}
              <div className="group relative rounded-xl bg-gradient-to-b from-white/90 to-white/70 ring-1 ring-blue-200 px-3 py-4 md:px-4 md:py-5 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tabular-nums">
                  {timeLeft.hours}
                </div>
                <div className="mt-1 text-[10px] md:text-xs tracking-widest uppercase text-blue-600">Hours</div>
                <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]" />
              </div>

              {/* Minutes */}
              <div className="group relative rounded-xl bg-gradient-to-b from-white/90 to-white/70 ring-1 ring-blue-200 px-3 py-4 md:px-4 md:py-5 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tabular-nums">
                  {timeLeft.minutes}
                </div>
                <div className="mt-1 text-[10px] md:text-xs tracking-widest uppercase text-blue-600">Minutes</div>
                <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]" />
              </div>

              {/* Seconds */}
              <div className="group relative rounded-xl bg-gradient-to-b from-white/90 to-white/70 ring-1 ring-blue-200 px-3 py-4 md:px-4 md:py-5 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tabular-nums">
                  {timeLeft.seconds}
                </div>
                <div className="mt-1 text-[10px] md:text-xs tracking-widest uppercase text-blue-600">Seconds</div>
                <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
