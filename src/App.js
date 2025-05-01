import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Research from './components/Research';
import ProjectDetail from './components/ProjectDetail';
import axios from 'axios';

function App() {
  console.log("✅ App.js is mounted and running");

  useEffect(() => {
    console.log("🚀 useEffect - wake ping");
    axios.get('/api/wake')
      .then(() => console.log("✅ Backend wake-up ping sent"))
      .catch(err => console.error("❌ Wake-up failed:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`https://www.rakshitai.info/ping?timestamp=${new Date().getTime()}`)
        .then(() => console.log("🛡️ Silent ping sent"))
        .catch((err) => console.error("❌ Silent ping failed", err));
    }, 30000);
    
    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    console.log("🔁 Silent keepalive pings initialized");
  
    const interval = setInterval(() => {
      console.log("📡 Sending keepalive ping...");
      fetch("/api/keepalive")
        .then((res) => {
          if (!res.ok) throw new Error("Ping failed");
          return res.json();
        })
        .then((data) => console.log("✅ Keepalive response:", data))
        .catch((err) => console.log("❌ Silent ping failed", err.message));
    }, 60000);
  
    return () => clearInterval(interval);
  }, []);
  
  

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
    </Router>
  );
}
export default App;