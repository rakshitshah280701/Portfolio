// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const About = () => {
//   const [messages, setMessages] = useState([
//     { type: 'bot', text: 'Hi! I am an LLM-powered Chatbot trained on Rakshit Shah’s projects and resume. Ask me anything!' }
//   ]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [serverStatus, setServerStatus] = useState('loading'); // 'online' | 'loading' | 'offline'
//   const chatContainerRef = useRef(null);

//   // Scroll to bottom inside chat area
//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
//     }
//   }, [messages, loading]);

//   // Server health check ping every 5 seconds
//   useEffect(() => {
//     const checkBackend = () => {
//       axios.get("https://api.rakshitai.info/ping")
//         .then(() => {
//           if (serverStatus !== 'online') {
//             console.log("🟢 Server is online");
//             setServerStatus('online');
//           }
//         })
//         .catch(() => {
//           if (serverStatus !== 'offline') {
//             console.log("🔴 Server is offline");
//             setServerStatus('offline');
//           }
//         });
//     };

//     checkBackend(); // initial ping
//     const interval = setInterval(checkBackend, 5000);
//     return () => clearInterval(interval);
//   }, [serverStatus]);

//   const handleSend = async () => {
//     if (!input.trim() || serverStatus !== 'online') return;

//     const newMessages = [...messages, { type: 'user', text: input }];
//     setMessages(newMessages);
//     setInput('');
//     setLoading(true);

//     try {
//       const response = await axios.post('https://api.rakshitai.info/chat', {
//         question: input,
//       });

//       setMessages([...newMessages, { type: 'bot', text: response.data.answer }]);
//     } catch (error) {
//       console.error(error);
//       setMessages([...newMessages, {
//         type: 'bot',
//         text: '⚠️ Sorry, something went wrong contacting the server.',
//       }]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const statusColor = {
//     offline: 'bg-red-500',
//     loading: 'bg-yellow-400',
//     online: 'bg-green-500',
//   }[serverStatus];

//   const statusText = {
//     offline: 'Server Offline',
//     loading: 'Waking Up...',
//     online: 'Server Ready',
//   }[serverStatus];

// const suggestedPrompts = [
//   "Tell about Rakshit’s Projects?",
//   "What are his technical skills?",
//   "When is Rakshit graduating?",
//   "What are his leadership skills?",
//   "Explain his InstructAware project"
// ];

//   return (
//     <section id="about" className="py-24 px-6 lg:px-24 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold mb-4 text-black">About Me</h2>
//       <p className="mb-8 text-gray-700 max-w-2xl">
//         Hi, I am an <span className="text-purple-600 font-semibold">LLM-powered Chatbot</span> trained on Rakshit Shah’s skills, projects, and experiences.
//         Ask me anything to learn more about his journey in AI, Machine Learning, and impactful tech!
//       </p>

//       {/* Chatbot UI */}
//       <div className="relative bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl mx-auto min-h-[500px]">

//         {/* ✅ Animated Status Dot - Top Right */}
//         <div className="absolute top-4 right-4 flex items-center space-x-2">
//           <div className="relative w-3 h-3">
//             <div className={`absolute inset-0 rounded-full ${statusColor} opacity-75 animate-ping`} />
//             <div className={`relative w-3 h-3 rounded-full ${statusColor} shadow-md`} />
//           </div>
//           <span className="text-sm text-gray-600">{statusText}</span>
//         </div>

//         {/* ✅ Internal scrollable chat area */}
//         <div
//           ref={chatContainerRef}
//           className="h-[30rem] overflow-y-auto pr-2 mb-4 space-y-4 transition-all duration-300"
//         >
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`max-w-[70%] p-3 rounded-lg ${
//                 msg.type === 'user'
//                   ? 'ml-auto bg-purple-100 text-purple-900'
//                   : 'bg-gray-200 text-gray-800'
//               }`}
//             >
//               {msg.text}
//             </div>
//           ))}
//           {loading && (
//             <div className="bg-gray-100 text-gray-500 p-3 rounded-lg max-w-[70%]">
//               Typing...
//             </div>
//           )}
//         </div>

// {/* 💡 Suggested Prompts */}
// <div className="flex flex-wrap gap-2 mb-4">
// {suggestedPrompts.map((prompt, idx) => (
//   <button
//     key={idx}
//     onClick={() => setInput(prompt)}
//     className="px-4 py-1 border border-gray-400 rounded-full text-sm hover:bg-gray-100 transition"
//   >
//     {prompt}
//   </button>
// ))}
// </div>

//         {/* Input area */}
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//             placeholder={serverStatus === 'online' ? "Ask me anything..." : "Server not ready yet"}
//             disabled={loading || serverStatus !== 'online'}
//             className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
//           />
//           <button
//             onClick={handleSend}
//             disabled={loading || serverStatus !== 'online'}
//             className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-purple-400 transition disabled:opacity-50"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const About = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I am an LLM-powered Chatbot trained on Rakshit Shah’s projects and resume. Ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState('loading');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    axios.get("/ping")
      .then(() => setServerStatus('online'))
      .catch(() => setServerStatus('offline'));
  }, []);

  const handleSend = async () => {
    if (!input.trim() || serverStatus !== 'online') return;

    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('https://api.rakshitai.info/chat', {
        question: input,
      });

      setMessages([...newMessages, { type: 'bot', text: response.data.answer }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, {
        type: 'bot',
        text: '⚠️ Sorry, something went wrong contacting the server.',
      }]);
    } finally {
      setLoading(false);
    }
  };

  const statusColor = {
    offline: 'bg-red-500',
    loading: 'bg-yellow-400',
    online: 'bg-green-500',
  }[serverStatus];

  const statusText = {
    offline: 'Server Offline',
    loading: 'Waking Up...',
    online: 'Server Ready',
  }[serverStatus];

  const suggestedPrompts = [
    "Tell about Rakshit’s Projects?",
    "What are his technical skills?",
    "When is Rakshit graduating?",
    "What are his leadership skills?",
    "Explain his InstructAware project"
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-24 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-black">About Me</h2>
      <p className="mb-8 text-gray-700 max-w-2xl">
        Hi, I am an <span className="text-purple-600 font-semibold">LLM-powered Chatbot</span> trained on Rakshit Shah’s skills, projects, and experiences.
        Ask me anything to learn more about his journey in AI, Machine Learning, and impactful tech!
      </p>

      <div className="relative bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl mx-auto min-h-[500px]">
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <div className="relative w-3 h-3">
            <div className={`absolute inset-0 rounded-full ${statusColor} opacity-75 animate-ping`} />
            <div className={`relative w-3 h-3 rounded-full ${statusColor} shadow-md`} />
          </div>
          <span className="text-sm text-gray-600">{statusText}</span>
        </div>

        <div
          ref={chatContainerRef}
          className="h-[30rem] overflow-y-auto pr-2 mb-4 space-y-4 transition-all duration-300"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[70%] p-3 rounded-lg ${
                msg.type === 'user'
                  ? 'ml-auto bg-purple-100 text-purple-900'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="bg-gray-100 text-gray-500 p-3 rounded-lg max-w-[70%]">
              Typing...
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {suggestedPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => setInput(prompt)}
              className="px-4 py-1 border border-gray-400 rounded-full text-sm hover:bg-gray-100 transition"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={serverStatus === 'online' ? "Ask me anything..." : "Server not ready yet"}
            disabled={loading || serverStatus !== 'online'}
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-100"
          />
          <button
            onClick={handleSend}
            disabled={loading || serverStatus !== 'online'}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-purple-400 transition disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
