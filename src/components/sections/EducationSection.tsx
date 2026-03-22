"use client";

import Timeline from "../Timeline";

const EducationSection = () => {
  const education = [
    {
      title: "Bachelor in Information Technology",
      subtitle: "Syrian Virtual University",
      period: "06-2019 - 09-2023",
      description: [
        "Field of Study: Information Systems and Data Networks",
        "Comprehensive curriculum covering modern web technologies, database systems, and network infrastructure",
        "Strong foundation in software development and system architecture"
      ],
      type: "education" as const
    },
    {
      title: "Commercial Institute",
      subtitle: "Ministry of Higher Education",
      period: "08-2013 - 10-2015",
      description: [
        "Field of Study: Banking and Finance",
        "Fundamental knowledge in financial systems and business operations",
        "Developed analytical and problem-solving skills"
      ],
      type: "education" as const
    }
  ];

  return (
    <section className="section-container" id="education">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        <span className="gradient-text">Education</span>
      </h2>
        <p className="text-lg  text-(--text-muted) mb-12 max-w-2xl">
        Academic foundation that shaped my technical expertise and professional growth.
      </p>
      <Timeline items={education} />
    </section>
  );
};

export default EducationSection;
