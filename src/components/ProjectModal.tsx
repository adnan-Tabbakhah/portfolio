"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    role?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(contentRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="modal-overlay active"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="text-4xl font-black mb-4 gradient-text">{project.title}</h2>
        <p className="text-lg mb-6  text-(--text-muted) leading-relaxed">
          {project.description}
        </p>
        {project.role && (
          <div className="mb-6">
            <span className="text-sm font-semibold text-[#e5383b]">Role:</span>
            <span className="ml-2">{project.role}</span>
          </div>
        )}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#e5383b]/10 text-[#e5383b] rounded-full font-semibold text-sm border border-[#e5383b]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            View Live Project →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;

