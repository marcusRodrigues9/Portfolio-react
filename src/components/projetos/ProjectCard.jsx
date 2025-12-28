import React from "react";
import './styles.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img className="project-image" src={project.image} alt={project.title} />
      
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        
        <div className="project-techs">
          {project.techs.map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-link">GitHub</a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn-link secondary">Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;