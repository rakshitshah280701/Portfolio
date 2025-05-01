import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectData from '../data/projectData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ArchitectureDiagram from './ArchitectureDiagram';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the project with the matching id
  const project = projectData.find(p => p.id === id);
  
  // Function to handle returning to the projects section
  const navigateToProjects = (e) => {
    e.preventDefault();
    navigate('/');
    // Add a slight delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 mt-20">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Project Not Found</h2>
        <p className="mb-6">Sorry, the project you're looking for doesn't exist.</p>
        <a 
          href="/" 
          onClick={navigateToProjects}
          className="text-purple-600 hover:text-purple-800 font-medium"
        >
          Return to Projects
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add padding to create space for the navbar */}
      <div className="pt-28 md:pt-32 p-6 md:p-16">
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md mb-8"
          />
        )}
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        
        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex flex-wrap gap-4 mb-8">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              <FaGithub /> GitHub
            </a>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          
          {project.detailedDescription && (
            <div className="text-gray-700">
              {project.detailedDescription.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4">{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        
        {/* Architecture Diagram - Show only if the showArchitecture flag is true */}
        {project.showArchitecture && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <ArchitectureDiagram />
          </div>
        )}
        
        {project.skills && project.skills.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Skills Developed</h2>
            <ul className="list-disc pl-5 space-y-2">
              {project.skills.map((skill, idx) => (
                <li key={idx} className="text-gray-700">{skill}</li>
              ))}
            </ul>
          </div>
        )}
        
        {project.challenges && project.challenges.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
            {project.challenges.map((challenge, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold text-lg text-gray-800">{challenge.title}</h3>
                <p className="text-gray-700">{challenge.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail; 