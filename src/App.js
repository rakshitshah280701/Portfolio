import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import axios from 'axios';



function App() {


  // 🚀 Ping backend when site is loaded
  useEffect(() => {
    axios.get('/api/wake')
      .then(() => console.log("✅ Backend wake-up ping sent"))
      .catch(err => console.error("❌ Wake-up failed:", err));
  }, []);
  
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <main className="pt-32 md:pt-28">
        <Hero />
        <About />
        <Project />

      </main>
    </div>
  );
}

export default App;
