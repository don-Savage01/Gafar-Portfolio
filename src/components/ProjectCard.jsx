// src/components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, description, link }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
    <h3 className="text-xl font-bold">{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" className="text-blue-500">
      View Project
    </a>
  </div>
);

export default ProjectCard;
