"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectModal from "../ProjectModal";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  role?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Osool Gamma Dashboard",
    description:
      "Designed and implemented dynamic data visualization components for financial insights. Improved usability with role-based navigation and modular layouts. Implemented advanced reporting tools and streamlined accounting workflows.",
    technologies: ["React", "Next.js", "TypeScript", "REST API", "Material UI"],
    link: "https://dashboard.gammaassets.com",
    role: "Front-End Developer",
  },
  {
    title: "Osool Gamma Website",
    description:
      "Built responsive pages showcasing products and services for public users. Maintained brand consistency with modern UI and accessibility best practices. Implemented multi-language support for global users.",
    technologies: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    link: "https://platform.Osoolgamma.com",
    role: "Front-End Developer",
  },
  {
    title: "Osool Gamma Landing",
    description:
      "Developed landing page from scratch with clean, modern design. Responsive layouts and multi-language support. Optimized for performance and SEO.",
    technologies: ["React", "Next.js", "GSAP", "TailwindCSS"],
    link: "https://Osoolgamma.com/en",
    role: "Front-End Developer",
  },
  {
    title: "Osool Gamma Accounting Dashboard",
    description:
      "Built the landing page for accounts dashboard with a modern, responsive UI. Advanced reporting tools and streamlined accounting workflows. Role-based access control implementation.",
    technologies: ["React", "Next.js", "TypeScript", "Material UI"],
    link: "https://accounting-dashboard.gammaassets.com/",
    role: "Front-End Developer",
  },
  {
    title: "Roia.org",
    description:
      "Developed entire website from scratch, implemented responsive UI. Designed and built from ground up with modern web technologies. Focus on performance and user experience.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    link: "https://roia.org/",
    role: "Front-End Developer",
  },
  {
    title: "Curepharma",
    description: "Developed the website from scratch",
    technologies: ["JavaScript", "CSS", "HTML", "Bootstrap"],
    link: "https://www.curepharma.net/",
    role: "Front-End Developer",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }
  }, []);

  return (
    <>
      <section ref={sectionRef} className="section-container" id="projects">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-lg  text-(--text-muted) mb-12 max-w-2xl">
          A collection of projects showcasing my expertise in modern web
          development, user experience design, and cutting-edge technologies.
        </p>

        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animated-border"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="box   group relative bg-(--card-bg)  overflow-hidden "
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image/Thumbnail */}
              <div className="relative h-48 bg-linear-to-br from-[#e5383b]/20 to-[#ba181b]/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#e5383b]/30 flex items-center justify-center text-4xl font-black text-[#e5383b]">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-(--card-bg) to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-[#e5383b] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-2xl opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </div>

                <p className="text-sm  text-(--text-muted) mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#e5383b]/10 text-[#e5383b] rounded-full text-xs font-semibold "
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1  text-(--text-muted) rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-(--card-bg) transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-[#e5383b]/20">
                  <div className="flex items-center gap-4">
                    <button className="flex-1 px-4 py-2 text-[12px] bg-[#e5383b] text-white rounded-lg font-semibold hover:bg-[#ba181b] transition-colors">
                      View Details
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[12px]  px-4 py-2 border-2 border-[#e5383b] text-[#e5383b] rounded-lg font-semibold hover:bg-[#e5383b] hover:text-white transition-all"
                      >
                        Live →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default ProjectsSection;
