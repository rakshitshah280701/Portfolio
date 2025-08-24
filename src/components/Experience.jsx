import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  // Real experience data from your resume
  const experiences = [
    {
      id: 1,
      year: '2025',
      title: 'AI Agentic Engineer',
      company: 'Avesta Computer Service Ltd.',
      location: 'Somerset, NJ (Remote from Chicago, IL)',
      duration: 'Present',
      logo: '/avesta_logo.png'
    },
    {
      id: 2,
      year: '2024',
      title: 'Student Assistant (ML & AI Researcher)',
      company: 'CSU East Bay, Computer Science Dept',
      location: 'Hayward, CA',
      duration: '10 months',
      logo: '/csueb_logo.png'
    },
    {
      id: 3,
      year: '2021',
      title: 'Data Collection Intern & Moderator',
      company: 'Sciffer Analytics Pvt. Ltd',
      location: 'Pune, Maharashtra, India',
      duration: '7 months',
      logo: '/sciffer_analytics_logo.png'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="pt-12 pb-24 px-6 md:px-16 bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey in artificial intelligence and machine learning
          </p>
        </div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Experience items in horizontal layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                variants={itemVariants}
              >
                {/* Content card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  
                  {/* Year and Duration */}
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-purple-600 block">{exp.year}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  
                  {/* Company Logo */}
                  <div className="text-center mb-4">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="h-16 w-auto mx-auto object-contain mb-3"
                    />
                  </div>
                  
                  {/* Title and Company */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{exp.title}</h3>
                  <div className="text-center">
                    <span className="text-sm text-gray-700 font-medium block">{exp.company}</span>
                    <span className="text-xs text-gray-500">{exp.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Horizontal Timeline below the cards */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 transform -translate-y-1/2"></div>
            
            {/* Timeline dots */}
            <div className="hidden lg:block relative">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="absolute top-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${(index / (experiences.length - 1)) * 100}%`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
