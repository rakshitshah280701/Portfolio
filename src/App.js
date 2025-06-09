import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Research from './components/Research';
import ProjectDetail from './components/ProjectDetail';
import FloatingChatbot from './components/FloatingChatbot'; // ✅ NEW

function App() {
  console.log("✅ App.js is mounted and running");

  // ✅ Optional: Keep this if you still want to log visitor IPs
  useEffect(() => {
    console.log("📍 useEffect - logging visitor IP from client");
    async function logVisitor() {
      try {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipRes.json();
        const ip = ipData.ip;

        console.log("🌐 Visitor IP:", ip);

        await fetch('/api/log-visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ip }),
        });

        console.log("📍 Visitor location sent to Slack");
      } catch (err) {
        console.error("❌ Error logging visitor:", err);
      }
    }
    logVisitor();
  }, []);

  return (
    <Router>
      <div className="App scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="pt-32 md:pt-28">
              <Hero />
              <About />
              <Project />
              <Research />
              <Contact />
            </main>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>

      <FloatingChatbot /> {/* ✅ Global floating chat */}
    </Router>
  );
}

export default App;
