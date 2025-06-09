// // src/components/Projects.jsx

// import React from 'react';
// import projectData from '../data/projectData';
// import ProjectCard from './ProjectCard';

// const Projects = () => {
//   return (
//     <section id="portfolio" className="py-16 px-6 md:px-16 bg-gray-50">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Projects</h2>

//       <div className="grid md:grid-cols-3 gap-8">
//         {projectData.map((proj, i) => (
//           <ProjectCard key={i} {...proj} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from 'react';
import projectData from '../data/projectData';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    // <section id="portfolio" className="py-24 px-6 md:px-16 bg-white">
    <section id="portfolio" className="pt-12 pb-24 px-6 md:px-16 bg-white">

      <motion.div
        className="bg-violet-50 rounded-xl px-8 py-10 shadow-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold text-gray-900 mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
