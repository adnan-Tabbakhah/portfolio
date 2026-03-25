"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const particlesElement = particlesRef.current;
    const animationCleanup: gsap.core.Tween[] = [];
    const particleCount = window.innerWidth < 768 ? 8 : 14;

    // Animated particles background
    if (particlesElement) {
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          background: #e5383b;
          border-radius: 50%;
          opacity: ${Math.random() * 0.5 + 0.2};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `;
        particlesElement.appendChild(particle);
        
        const tween = gsap.to(particle, {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        animationCleanup.push(tween);
      }
    }

    // Staggered entrance animations (skip targets that are not mounted, e.g. commented-out avatar)
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const avatar = avatarRef.current;
    const name = nameRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const contact = contactRef.current;
    const cta = ctaRef.current;
    const contactChildren =
      contact && contact.children.length > 0 ? Array.from(contact.children) : null;

    if (avatar) {
      tl.fromTo(
        avatar,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );
    }
    if (name) {
      tl.fromTo(
        name,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        avatar ? "-=0.5" : undefined
      );
    }
    if (title) {
      tl.fromTo(
        title,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );
    }
    if (desc) {
      tl.fromTo(
        desc,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );
    }
    if (contactChildren) {
      tl.fromTo(
        contactChildren,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      );
    }
    if (cta) {
      tl.fromTo(
        cta,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      );
    }

    // Avatar pulse animation
    if (avatarRef.current) {
      const tween = gsap.to(avatarRef.current, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      animationCleanup.push(tween);
    }

    return () => {
      tl.kill();
      animationCleanup.forEach((animation) => animation.kill());
      if (particlesElement) {
        particlesElement.innerHTML = "";
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Particles Background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#e5383b]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ba181b]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div ref={heroRef} className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12   text-center">
        {/* Avatar with animated border */}
        {/* <div ref={avatarRef} className="mb-8 relative inline-block">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#e5383b] via-[#ba181b] to-[#a4161a] animate-spin" style={{ animationDuration: "3s" }} />
          <div className="relative rounded-full p-1 bg-background w-40 h-40 flex items-center justify-center text-4xl font-bold">
              <img
              src="/avatar.jpg"
              alt="Adnan Tabbakhah"
              className="w-40 h-40 rounded-full object-cover border-4 border-[#0b090a] dark:border-[#ffffff]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Crect fill='%23e5383b' width='160' height='160'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='60' fill='white'%3EAT%3C/text%3E%3C/svg%3E";
              }}
            />  
           

            AD
          </div>
        </div> */}

        {/* Name with gradient */}
        <h1 ref={nameRef} className="mb-4">
          <span className="gradient-texts">Adnan Tabbakhah</span>
        </h1>

        {/* Title */}
        <p ref={titleRef} className="text-2xl md:text-3xl font-bold mb-6 text-[#e5383b] tracking-wide">
          Front-End Developer
        </p>

        {/* Description */}
        <p ref={descRef} className="text-lg md:text-xl max-w-3xl mx-auto mb-8  text-(--text-muted) leading-relaxed">
          I&apos;m a front-end developer with a passion for building beautiful, responsive, and user-friendly web applications. 
          Several years of experience in HTML, CSS, JavaScript, TypeScript, and React/Next.js. 
          Confident in tackling any front-end challenge and enjoy collaborating with designers and back-end developers.
        </p>

        {/* Contact Info */}
        <div ref={contactRef} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 text-sm md:text-base">
          <a 
            href="mailto:adnan.tabakha@gmail.com" 
            className="px-5 py-3 bg-[#e5383b]/10 text-[#e5383b] rounded-full border-2 border-[#e5383b]/30 hover:bg-[#e5383b] hover:text-white hover:border-[#e5383b] transition-all duration-300 font-semibold"
          >
            📧 adnan.tabakha@gmail.com
          </a>
          <a 
            href="tel:+963992240779" 
            className="px-5 py-3 bg-[#e5383b]/10 text-[#e5383b] rounded-full border-2 border-[#e5383b]/30 hover:bg-[#e5383b] hover:text-white hover:border-[#e5383b] transition-all duration-300 font-semibold"
          >
            📱 +963 992 240 779
          </a>
          <a 
            href="https://linkedin.com/in/adnan-tabbakhah" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-[#e5383b]/10 text-[#e5383b] rounded-full border-2 border-[#e5383b]/30 hover:bg-[#e5383b] hover:text-white hover:border-[#e5383b] transition-all duration-300 font-semibold"
          >
            💼 LinkedIn
          </a>
          <span className="px-4 py-2  text-(--text-muted)">📍 Damascus, Syria</span>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          <button 
            onClick={() => scrollToSection("projects")}
            className="btn-primary"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-transparent border-2 border-[#e5383b] text-[#e5383b] rounded-full font-bold text-lg hover:bg-[#e5383b] hover:text-white transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#e5383b] rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#e5383b] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
