// // src/components/ProjectCard.jsx

// import React from 'react';

// const ProjectCard = ({ title, description, image, github, demo }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between">
//       <div>
//         <img src={image} alt={title} className="rounded-md mb-4 object-cover h-48 w-full" />
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//         <p className="text-gray-600 text-sm">{description}</p>
//       </div>
//       <div className="mt-4 flex space-x-3">
//         {github && (
//           <a
//             href={github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100 transition"
//           >
//             GitHub
//           </a>
//         )}
//         {demo && (
//           <a
//             href={demo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
//           >
//             Live Demo
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, image, github, demo, tags }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between">
      {image && (
        <Link to={`/project/${id}`}>
          {image && (
  <Link to={`/project/${id}`}>
    <img
      src={image}
      alt={title}
      className={`rounded-lg mb-4 h-48 w-full transition hover:opacity-90 ${
        id === 'instructaware' || id === 'smartsign'
          ? 'object-contain bg-gray-50 p-2'
          : 'object-cover'
      }`}
    />
  </Link>
)}

        </Link>
      )}

      <Link to={`/project/${id}`} className="hover:text-purple-700 transition">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </Link>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-purple-100 text-purple-700 px-2 py-0.5 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex space-x-4 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-purple-600 px-4 py-1.5 rounded hover:bg-purple-100 transition"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-purple-600 px-4 py-1.5 rounded hover:bg-purple-100 transition"
          >
            Live Demo
          </a>
        )}
        <Link
          to={`/project/${id}`}
          className="text-sm bg-purple-600 text-white px-4 py-1.5 rounded hover:bg-purple-700 transition ml-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
