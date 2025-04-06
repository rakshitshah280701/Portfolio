import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';


function App() {
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
