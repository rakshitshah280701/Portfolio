import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Project from './components/Project';
import axios from 'axios';



// function App() {
//   console.log("✅ App.js is mounted and running");


//   // 🚀 Ping backend when site is loaded
//   useEffect(() => {
//     axios.get('/api/wake')
//       .then(() => console.log("✅ Backend wake-up ping sent"))
//       .catch(err => console.error("❌ Wake-up failed:", err));
//   }, []);
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       console.log("⏱️ About to send silent ping...");  // <- ADD THIS
//       axios.get("/api/ping")
//         .then(() => console.log("🛡️ Silent ping sent"))
//         .catch((err) => console.error("❌ Silent ping failed", err));
//     }, 30000);
  
//     return () => clearInterval(interval);
//   }, []);
  

//   // 📍 Log visitor's IP/location to Slack
//   useEffect(() => {
//     axios.get('/api/log-visit')
//       .then(() => console.log("📍 Visitor location logged to Slack"))
//       .catch(err => console.error("❌ Failed to log visit:", err));
//   }, []);

//   return (
//     <div className="App scroll-smooth">
//       <Navbar />
//       <main className="pt-32 md:pt-28">
//         <Hero />
//         <About />
//         <Project />

//       </main>
//     </div>
//   );
// }

// export default App;


function App() {
  console.log("✅ App.js is mounted and running");

  useEffect(() => {
    console.log("🚀 useEffect - wake ping");
    axios.get('/api/wake')
      .then(() => console.log("✅ Backend wake-up ping sent"))
      .catch(err => console.error("❌ Wake-up failed:", err));
  }, []);

  useEffect(() => {
    console.log("🔁 useEffect - silent ping initialized");
    const interval = setInterval(() => {
      console.log("⏱️ Sending silent ping...");
      axios.get("/api/ping")
        .then(() => console.log("🛡️ Silent ping sent"))
        .catch((err) => console.error("❌ Silent ping failed", err));
    }, 30000);

    return () => {
      console.log("🛑 Silent ping interval cleared");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("📍 useEffect - logging visitor");
    axios.get('/api/log-visit')
      .then(() => console.log("📍 Visitor location logged to Slack"))
      .catch(err => console.error("❌ Failed to log visit:", err));
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