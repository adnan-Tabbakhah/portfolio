"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  type?: "experience" | "education";
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      const elements = timelineRef.current.querySelectorAll(".timeline-item");
      
      elements.forEach((element) => {
        gsap.fromTo(element,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline Line */}
      {/* <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-[#e5383b] via-[#ba181b] to-[#a4161a] hidden md:block h-[40%]" /> */}
      
      <div className="space-y-12 sm:space-y-16">
        {items.map((item, index) => (
          <div key={index} className="timeline-item relative pl-0 md:pl-24">
            {/* Timeline Dot */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-[#e5383b] via-[#ba181b] to-[#a4161a] hidden md:block " />

            <div className="absolute left-6 md:left-[26px]   w-4 h-4 bg-[#e5383b] rounded-full border-4 border-background z-10 shadow-lg hidden md:block" />
            
            {/* Content Card */}
            <div className="bg-(--card-bg) rounded-2xl p-6 sm:p-8 border-2 border-(--border) hover:border-[#e5383b] transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 ">
                    {item.title}
                  </h3>
                  <p className="text-[#e5383b] font-semibold text-lg">{item.subtitle}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-4 py-2 bg-[#e5383b]/10 text-[#e5383b] rounded-full text-sm font-semibold border border-[#e5383b]/20">
                    {item.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3  text-(--text-muted)">
                    <span className="text-[#e5383b] mt-1.5">▸</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

