"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);

        const sections = ["hero", "about", "skills", "projects", "experience", "education", "contact"];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-(--border) ${
        scrolled ? "bg-(--background)/95 backdrop-blur-xl shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 sm:py-6">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-black gradient-text cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            AT
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 font-semibold text-sm transition-colors border-2 border-transparent rounded-lg ${
                  activeSection === item.id
                    ? "text-[#e5383b] border-[#e5383b]/30 bg-[#e5383b]/5"
                    : "text-foreground hover:text-[#e5383b] hover:border-[#e5383b]/20"
                }`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

