import React from "react";
import { useTheme } from "../Themecontext"; // Import the useTheme hook
import "./Projects.css";

const projects = [
  {
    title: "ReactMate",
    description:
      "This web-based application allows players to engage in real-time chess games with smooth, interactive visuals.",
    link: "https://github.com/shashwath1278/ReactMate",
    techStack: ["React.js", "TypeScript", "Rx js", "Chess js"],
  },
  {
    title: "Kardia",
    description:
      "An advanced full-stack application that assesses heart risk based on ECG data and user-provided parameters.",
    link: "https://github.com/shashwath1278/Heart-risk-score-wHACKiest2024",
    techStack: ["React.js", "Firebase", "Tailwind CSS", "Python(Flask,scikit-learn)"],
  },
  {
    title: "Type Fury",
    description:
      "A keyboard type centered app which focuses on typing and its elements..it has a type speed counter and much more..!",
    link: "https://github.com/shashwath1278/type-app",
    techStack: ["React.js", "Vite", "Redux js", "Tailwind CSS"],
  },
  {
    title: "Python-nmap-tool",
    description:
      "This Python-based utility performs various scans, including SYN ACK and UDP, to detect open ports and services.",
    link: "https://github.com/shashwath1278/python-nmap-tool",
    techStack: ["Python"],
  },
];

const Projects = () => {
  const { theme } = useTheme(); // Retrieve the current theme

  return (
    <section id="projects" className={`projects-section ${theme === "light" ? "light-mode" : "dark-mode"}`}>
      <h1 className={`projects-title ${theme === "light" ? "text-gray-900" : "text-white"}`}>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className={`project-card ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`} key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h2 className={`project-title ${theme === "light" ? "text-black" :"text-black" }`}>{project.title}</h2>
              {/* Description Section */}
              <p className={`project-description ${theme === "light" ? "text-white" : "text-black"}`}>
                {project.description}
              </p>
              <div className="tech-stack">
                {project.techStack.map((tech, idx) => (
                  <div key={idx} className={`tech-card ${theme === "light" ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}>
                    {tech}
                  </div>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
