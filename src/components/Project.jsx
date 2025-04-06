// src/components/Projects.jsx

import React from 'react';
import projectData from '../data/projectData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="portfolio" className="py-16 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projectData.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
