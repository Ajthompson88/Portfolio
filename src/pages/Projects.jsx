// src/pages/Projects.jsx
import { PageTitle, Project } from "../components/components.js";
import { projectsPage } from "../assets/assets.js";
import { containerStyle } from "./styles.js";
import { useEffect, useState } from "react";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (projectsPage && projectsPage.length > 0) {
      const btn = document.querySelector(".project-btn");
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);

      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <section id="Projects" className={containerStyle}>
      <PageTitle>Projects</PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsPage.map((proj) => (
          <Project
            key={proj.id || proj.projectName}
            projectName={proj.projectName}
            projectDescription={proj.projectDescription}
            projectURL={proj.projectURL}
            githubRepositoryURL={proj.githubRepositoryURL}
            tags={proj.tags}
            date={proj.date}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
