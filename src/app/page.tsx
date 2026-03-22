import dynamic from "next/dynamic";
import Navigation from "../components/Navigation";
import ScrollToTopButton from "../components/ScrollToTopButton";
import HeroSection from "../components/sections/HeroSection";

const AboutSection = dynamic(() => import("../components/sections/AboutSection"));
const SkillsSection = dynamic(() => import("../components/sections/SkillsSection"));
const ProjectsSection = dynamic(() => import("../components/sections/ProjectsSection"));
const ExperienceSection = dynamic(() => import("../components/sections/ExperienceSection"));
const EducationSection = dynamic(() => import("../components/sections/EducationSection"));
const ContactSection = dynamic(() => import("../components/sections/ContactSection"));

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="flex flex-col  pt-24 px-4 sm:px-6 lg:px-8 pb-12">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
