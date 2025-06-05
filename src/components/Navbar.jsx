import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if we're on a project detail page
  const isProjectPage = location.pathname.startsWith('/project/');

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

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 md:px-8">
      <div className="bg-white shadow-lg rounded-xl px-6 py-3 flex items-center justify-between w-full">

        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {isProjectPage ? (
            <a href="/" onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}>
              <img
  src="/Rakshit.svg"
  alt="Rakshit Logo"
  className="h-20 w-auto object-contain"
/>
            </a>
          ) : (
            <a href="#home">
              <img
  src="/Rakshit.svg"
  alt="Rakshit Logo"
  className="h-20 w-auto object-contain"
/>
            </a>
          )}
        </div>

        {/* Desktop Nav - Only show if not on project page */}
        {!isProjectPage && (
          <nav className="hidden md:flex space-x-8 text-gray-700 font-bold">
            <a href="#home" className="text-purple-600">Home</a>
            <a href="#portfolio" className="hover:text-purple-600">Projects</a>
            <a href="#research" className="hover:text-purple-600">Research</a>
            <a href="#about" className="hover:text-purple-600">About me</a>
          </nav>
        )}

        {/* CTA - Desktop - Only show if not on project page */}
        {!isProjectPage && (
          <div className="hidden md:block">
            <a
              href="#contact"
              className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-lg hover:bg-purple-100 transition font-bold"
            >
              Contact Me
            </a>
          </div>
        )}

        {/* Back to Projects Button - Only show on project pages */}
        {isProjectPage && (
          <div className="hidden md:block">
            <a
              href="/"
              onClick={navigateToProjects}
              className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-lg hover:bg-purple-100 transition font-bold"
            >
              Back to Projects
            </a>
          </div>
        )}

        {/* Mobile Toggle Button - Only show if not on project page */}
        {!isProjectPage && (
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-purple-600 text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        )}

        {/* Mobile Back to Projects - Only show on project pages */}
        {isProjectPage && (
          <div className="md:hidden">
            <a
              href="/"
              onClick={navigateToProjects}
              className="border border-purple-600 text-purple-600 px-3 py-1 rounded-lg hover:bg-purple-100 transition text-sm"
            >
              Back to Projects
            </a>
          </div>
        )}
      </div>

      {/* Mobile Menu - Only show if not on project page */}
      {isOpen && !isProjectPage && (
        <div className="md:hidden mt-2 bg-white shadow-lg rounded-xl px-6 py-4">
          <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
            <a href="#home" className="text-purple-600">Home</a>
            <a href="#portfolio" className="hover:text-purple-600">Projects</a>
            <a href="#research" className="hover:text-purple-600">Research</a>
            <a href="#about" className="hover:text-purple-600">About me</a>
            <a
              href="#contact"
              className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-lg hover:bg-purple-100 transition"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
