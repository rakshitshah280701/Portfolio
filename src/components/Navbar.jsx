// import React, { useState } from 'react';
// // import logo from '../assets/logo.png'; // Update if you're using text instead

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 md:px-8">
//       <div className="bg-white shadow-lg rounded-xl px-6 py-3 flex items-center justify-between w-full">

//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           {/* <img src={logo} alt="Logo" className="h-6 w-6" /> */}
//           <span className="font-semibold text-gray-800 text-lg">Rakshit Shah</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
//           <a href="#home" className="text-purple-600">Home</a>
//           <a href="#portfolio" className="hover:text-purple-600">Project</a>
//           <a href="#about" className="hover:text-purple-600">About me</a>
          
//         </nav>

//         {/* CTA - Desktop */}
//         <div className="hidden md:block">
//           <a
//             href="#contact"
//             className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-lg hover:bg-purple-100 transition"
//           >
//             Contact Me
//           </a>
//         </div>

//         {/* Mobile Toggle Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-purple-600 text-2xl focus:outline-none"
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-2 bg-white shadow-lg rounded-xl px-6 py-4">
//           <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
//             <a href="#home" className="text-purple-600">Home</a>
//             <a href="#portfolio" className="hover:text-purple-600">Project</a>
//             <a href="#about" className="hover:text-purple-600">About me</a>
            
//             <a
//               href="#contact"
//               className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-lg hover:bg-purple-100 transition"
//             >
//               Contact Me
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full px-4 md:px-8">
      <div className="bg-white shadow-lg rounded-xl px-6 py-3 flex items-center justify-between w-full">

        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <a href="#home">
            <img
              src="/rakshitshah_logo1.png" // or update with your logo file name
              alt="Rakshit Logo"
              className="h-14 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-bold">
          <a href="#home" className="text-purple-600">Home</a>
          <a href="#portfolio" className="hover:text-purple-600">Project</a>
          <a href="#about" className="hover:text-purple-600">About me</a>
        </nav>

        {/* CTA - Desktop */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="border border-purple-600 text-purple-600 px-4 py-1.5 rounded-lg hover:bg-purple-100 transition font-bold"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-600 text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow-lg rounded-xl px-6 py-4">
          <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
            <a href="#home" className="text-purple-600">Home</a>
            <a href="#portfolio" className="hover:text-purple-600">Project</a>
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
