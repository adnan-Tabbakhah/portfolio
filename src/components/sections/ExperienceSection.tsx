"use client";
import Timeline from "../Timeline";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Front-End Developer",
      subtitle: "Gamma Assets",
      period: "08-2024 – 12-2025",
      description: [
        "Developed user-facing features with focus on performance, usability, and scalability",
        "Ensured technical feasibility of UI/UX and collaborated closely with designers",
        "Optimized applications for maximum speed and scalability",
        "Collaborated with backend and designers to enhance usability and product quality",
        "Implemented role-based access and dashboard controls for better security and UX",
        "Worked with Web3 and smart contracts on blockchain integrations",
        "Wrote clear documentation and user guides",
        "Ensured quality using Playwright and Jest for testing"
      ],
      type: "experience" as const
    },
    {
      title: "Front-End Developer",
      subtitle: "Ingaz Software Company",
      period: "03-2024 – 06-2024",
      description: [
        "Designed and implemented user-facing features",
        "Built reusable code and libraries for streamlined development",
        "Optimized apps for speed, performance, and scalability"
      ],
      type: "experience" as const
    },
    {
      title: "Front-End Developer",
      subtitle: "Brain Click ads",
      period: "01-2024 – 03-2024",
      description: [
        "Developed web apps in React for various clients",
        "Translated business requirements into usable solutions",
        "Followed industry best practices for code and collaboration",
        "Contributed to continuous improvement of frontend processes"
      ],
      type: "experience" as const
    },
    {
      title: "Front-End Developer Intern",
      subtitle: "subul Company",
      period: "10-2022 – 05-2023",
      description: [
        "Developed and deployed multiple websites using HTML, CSS, JavaScript, React, Node.js, MUI",
        "Learned various development methodologies, including agile and DevOps basics"
      ],
      type: "experience" as const
    }
  ];

  return (
    <section className="section-container" id="experience">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        <span className="gradient-text">Professional Experience</span>
      </h2>
      <p className="text-lg  text-(--text-muted) mb-12 max-w-2xl">
        Building exceptional digital experiences with cutting-edge technologies and modern development practices.
      </p>
      <Timeline items={experiences} />
    </section>
  );
};

export default ExperienceSection;
