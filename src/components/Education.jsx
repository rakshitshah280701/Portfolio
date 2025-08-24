import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  // Education data - you can customize this with your actual education details
  const education = [
    {
      id: 1,
      year: '2023-2025',
      degree: 'MS in Computer Science',
      institution: 'California State University East Bay',
      location: 'Hayward, CA',
      duration: '2 years',
      logo: '/csueb_logo.png',
      gpa: '3.74/4.00',
      focus: 'AI/ML, Large Language Models, Multimodal Learning, Computer Vision'
    },
    {
      id: 2,
      year: '2019-2023',
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'University of Mumbai, India',
      location: 'Mumbai, Maharashtra, India',
      duration: '4 years',
      logo: '/mumuni.png',
      gpa: '8.72/10',
      focus: 'Computer Engineering, Software Engineering, Algorithms, Machine Learning'
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
    <section id="education" className="pt-12 pb-24 px-6 md:px-16 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education items in horizontal layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 mb-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative"
                variants={itemVariants}
              >
                {/* Content card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  
                  {/* Year and Duration */}
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-purple-600 block">{edu.year}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                  
                  {/* Institution Logo */}
                  <div className="text-center mb-4">
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`}
                      className="h-16 w-auto mx-auto object-contain mb-3"
                    />
                  </div>
                  
                  {/* Degree and Institution */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{edu.degree}</h3>
                  <div className="text-center mb-3">
                    <span className="text-sm text-gray-700 font-medium block">{edu.institution}</span>
                    <span className="text-xs text-gray-500">{edu.location}</span>
                  </div>
                  
                  {/* GPA and Focus */}
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="text-sm text-gray-600">GPA: </span>
                      <span className="text-sm font-semibold text-purple-600">{edu.gpa}</span>
                    </div>
                    <p className="text-xs text-gray-600 bg-purple-50 px-3 py-2 rounded-lg">
                      Focus: {edu.focus}
                    </p>
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
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="absolute top-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${(index / (education.length - 1)) * 100}%`
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

export default Education;
