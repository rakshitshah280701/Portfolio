import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delays = [2000, 2000, 3000, 3000]; // Timing for each message step
    if (step < delays.length) {
      const timer = setTimeout(() => setStep(step + 1), delays[step]);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16 text-center" id="home">
      
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug space-y-4">
        
        {/* Hello */}
        <div className={`transition-all duration-700 ${step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {step >= 0 && (
            <Typewriter
              words={['Hello!']}
              cursor={false}
              typeSpeed={80}
            />
          )}
        </div>

        {/* I am Rakshit Shah */}
        <div className={`transition-all duration-700 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {step >= 1 && (
            <Typewriter
              words={['I am Rakshit Shah']}
              cursor={false}
              typeSpeed={80}
            />
          )}
        </div>

        {/* I create ML Models */}
        <div className={`text-2xl sm:text-3xl font-medium text-gray-800 transition-all duration-700 ${step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {step >= 2 && (
            <Typewriter
              words={['I create Machine Learning Models']}
              cursor={false}
              typeSpeed={50}
            />
          )}
        </div>

        {/* and integrate them... */}
        <div className={`text-2xl sm:text-3xl font-medium text-gray-800 transition-all duration-700 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {step >= 3 && (
            <Typewriter
              words={['and integrate them in day to day life']}
              cursor
              cursorStyle="|"
              typeSpeed={50}
            />
          )}
        </div>
      </div>

      {/* ✅ CTA Buttons Aligned Horizontally */}
      <div className={`flex flex-wrap justify-center gap-4 mt-10 transition-all duration-700 ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {step >= 4 && (
          <>
            <a
  href="#contact"
  className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-500 transition"
>
  Get In Touch
</a>


            <a
              href="/RakshitShah_Resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-2 text-indigo-600 border border-indigo-600 px-5 py-2 rounded-md font-medium hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              <span>Download Resume</span>
              <svg
                className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </a>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
