// import React from 'react';
// import { FaLinkedin, FaGithub } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-white to-blue-50">
//       <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
//         {/* LEFT: Text content */}
//         <div>
//           <h1 className="text-5xl font-bold text-blue-700 mb-4">
//             Hi, I’m Rakshit Shah 👋
//           </h1>
//           <h2 className="text-2xl text-gray-800 mb-4">
//             Data Scientist & Machine Learning Engineer
//           </h2>
//           <p className="text-gray-600 mb-6 max-w-md">
//             Specialized in Generative AI, LLMs, and Multimodal AI. Passionate about Responsible AI and building impactful solutions with ML, NLP, and CV.
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-4 mb-6">
//             <a
//               href="/RakshitShah_Resume.pdf"
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow"
//             >
//               Download Resume
//             </a>
//             <a
//               href="#contact"
//               className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition"
//             >
//               Contact Me
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4 text-2xl text-blue-600">
//             <a href="https://github.com/rakshitshah280701" target="_blank" rel="noopener noreferrer">
//               <FaGithub />
//             </a>
//             <a href="https://linkedin.com/in/rakshitshah28" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin />
//             </a>
//           </div>
//         </div>

//         {/* RIGHT: Profile Image */}
//         <div className="flex justify-center">
//           <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg border-4 border-blue-200">
//             <img
//               src="/Rakshit.jpg"
//               alt="Rakshit Shah"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';

const Hero = () => {
  return (
    // Inside Hero.jsx or wherever your container is
<section className="min-h-screen bg-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16" id="home">

      
      {/* Text Content */}
      <div className="text-center md:text-left font-bold  max-w-xl md:mr-8">
        <p className="text-2xl text-gray-600 mb-2">Hey, I am Rakshit Shah</p>
        
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-relaxed mb-6">
          I create <span className="text-indigo-600 ">Machine Learning Models</span> and integrate <br className="hidden sm:block" />them in day to day life
        </h1>
        
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-500 transition">
          Get In Touch
        </button>
      </div>

      {/* Hero Image */}
      <div className="mb-10 md:mb-0">
        <img
          src="/Rakshit.png"
          alt="Rakshit Shah"
          className="w-[380px] md:w-[460px] lg:w-[540px] object-contain mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
