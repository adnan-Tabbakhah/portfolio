"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="section-container" id="about">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        <span className="gradient-text">About Me</span>
      </h2>
      <div ref={contentRef} className="space-y-6">
        <p className="text-lg md:text-xl  text-(--text-muted) leading-relaxed max-w-3xl">
          I&apos;m a front-end developer with a passion for building beautiful, responsive, and user-friendly applications. 
          I thrive on tackling new challenges and enjoy collaborating with both designers and back-end developers to bring ideas to life. 
          I&apos;m always seeking new opportunities to learn and grow as a developer.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-8">
          <div className="p-6 sm:p-8 bg-[#e5383b]/5 rounded-2xl border-2 border-[#e5383b]/30 hover:border-[#e5383b]/60 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#e5383b] mb-4">Career Goals</h3>
            <p className=" text-(--text-muted)">
              Stay up-to-date with the latest web development trends. Build seamless, scalable user experiences 
              and contribute to the continuous improvement of frontend applications and development processes.
            </p>
          </div>
          
          <div className="p-6 sm:p-8 bg-[#e5383b]/5 rounded-2xl border-2 border-[#e5383b]/30 hover:border-[#e5383b]/60 transition-all duration-300">
            <h3 className="text-xl font-bold text-[#e5383b] mb-4">What Makes Me Unique</h3>
            <p className=" text-(--text-muted)">
              Strong technical skills blended with creativity, attention to modern UI/UX, and a collaborative mindset. 
              Confident at solving complex problems and eager to take ownership of challenging tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
