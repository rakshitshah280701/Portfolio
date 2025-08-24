import React from 'react';
import { motion } from 'framer-motion';

const Volunteering = () => {
  // Volunteering data - you can customize this with your actual volunteer experience
  const volunteering = [
    {
      id: 1,
      year: '2022-2023',
      role: 'Chairperson',
      organization: 'IEEE APSIT Student Branch',
      location: 'Thane, Maharashtra, India',
      duration: '1 yr 2 mos',
      logo: '/ieeeapsit_logo.png',
      roleType: 'Leadership',
      impact: 'Led IEEE APSIT Student Branch as Chairperson, overseeing all activities and initiatives'
    },
    {
      id: 2,
      year: '2021-2022',
      role: 'Vice Chair Person',
      organization: 'IEEE APSIT Student Branch',
      location: 'Thane, Maharashtra, India',
      duration: '1 yr',
      logo: '/ieeeapsit_logo.png',
      roleType: 'Management',
      impact: 'Supported chairperson in managing IEEE APSIT operations and student activities'
    },
    {
      id: 3,
      year: '2020-2023',
      role: 'Student Activities Committee Volunteer',
      organization: 'IEEE Bombay Section',
      location: 'Mumbai, Maharashtra, India',
      duration: '3 yrs',
      logo: '/IEEE-BS-Logo.webp',
      roleType: 'Volunteer',
      impact: 'Contributed to IEEE Bombay Section activities and student engagement programs'
    },
    {
      id: 4,
      year: '2020-2021',
      role: 'Technical Lead',
      organization: 'IEEE APSIT Student Branch',
      location: 'Thane, Maharashtra, India',
      duration: '1 yr',
      logo: '/ieeeapsit_logo.png',
      roleType: 'Technical',
      impact: 'Led technical initiatives and workshops for IEEE APSIT members'
    },
    {
      id: 5,
      year: '2020-2021',
      role: 'Student Associate',
      organization: 'IEEE India Council AISYWLC',
      location: 'India',
      duration: '4 mos',
      logo: '/IEEE_iC_loogo.webp',
      roleType: 'Coordination',
      impact: 'Coordinated activities for IEEE India Council AISYWLC program'
    },
    
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
    <section id="volunteering" className="pt-12 pb-24 px-6 md:px-16 bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Volunteering Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My contributions to the community and open source ecosystem
          </p>
        </div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Volunteering items in horizontal layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {volunteering.map((vol, index) => (
              <motion.div
                key={vol.id}
                className="relative"
                variants={itemVariants}
              >
                {/* Content card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  
                  {/* Year and Duration */}
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-purple-600 block">{vol.year}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {vol.duration}
                    </span>
                  </div>
                  
                  {/* Organization Logo */}
                  <div className="text-center mb-4">
                    <img 
                      src={vol.logo} 
                      alt={`${vol.organization} logo`}
                      className="h-16 w-auto mx-auto object-contain mb-3"
                    />
                  </div>
                  
                  {/* Role and Organization */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{vol.role}</h3>
                  <div className="text-center mb-3">
                    <span className="text-sm text-gray-700 font-medium block">{vol.organization}</span>
                    <span className="text-xs text-gray-500">{vol.location}</span>
                  </div>
                  
                  {/* Hours and Impact */}
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="text-sm text-gray-600">Role: </span>
                      <span className="text-sm font-semibold text-purple-600">{vol.roleType}</span>
                    </div>
                    <p className="text-xs text-gray-600 bg-purple-50 px-3 py-2 rounded-lg">
                      {vol.impact}
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
              {volunteering.map((vol, index) => (
                <div
                  key={vol.id}
                  className="absolute top-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${(index / (volunteering.length - 1)) * 100}%`
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

export default Volunteering;
