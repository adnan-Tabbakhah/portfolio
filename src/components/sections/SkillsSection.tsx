"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const techSkills = [
    "HTML", "CSS", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js",
    "TailwindCSS", "Bootstrap", "Material UI", "Chakra UI", "Semantic React",
    "Git & GitHub", "Rest API", "Jest", "JSON", "GSAP"
  ];

  const softSkills = [
    "Problem Solving", "Teamwork", "Communication", "Agile Development",
    "Continuous Learning", "DevOps Basics"
  ];

  useEffect(() => {
    if (skillsRef.current) {
      const items = skillsRef.current.querySelectorAll(".skill-item");
      gsap.fromTo(items,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
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
    <section ref={sectionRef} className="section-container" id="skills">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        <span className="gradient-text">Skills & Expertise</span>
      </h2>
      <p className="text-lg  text-(--text-muted) mb-12 max-w-2xl">
        A comprehensive toolkit of technologies and methodologies I use to build exceptional digital experiences.
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-[#e5383b]">Languages</h3>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <span className="px-5 py-2 bg-[#e5383b]/10 text-[#e5383b] rounded-full font-bold border-2 border-[#e5383b]/30">
            Arabic (Full Professional)
          </span>
          <span className="px-5 py-2 bg-[#e5383b]/10 text-[#e5383b] rounded-full font-bold border-2 border-[#e5383b]/30">
            English (Professional)
          </span>
        </div>
      </div>

      <div ref={skillsRef} className="mb-8">
        <h3 className="text-xl font-bold mb-6 text-[#e5383b]">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {techSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-item p-4 sm:p-5 bg-(--card-bg) rounded-xl border-2 border-(--border)
               hover:border-[#e5383b] hover:bg-[#e5383b]/5 transition-all duration-300 cursor-default
                text-center text-sm"
            >
              <span className="font-bold text-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-6 text-[#e5383b]">Soft Skills</h3>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-[#ba181b]/10 text-[#a8797a] rounded-full font-semibold
               border-2 border-[#ba181b]/30 hover:bg-[#ba181b] hover:text-white transition-all 
               duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
