import React, { useState } from 'react';
import axios from 'axios';

const About = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I am an LLM-powered Chatbot trained on Rakshit Shah’s projects and resume. Ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // // ✅ Ping backend wake endpoint on first render
  // useEffect(() => {
  //   axios.get("/api/wake")
  //     .then(() => console.log("💡 Wake server ping sent"))
  //     .catch((err) => console.error("❌ Wake ping failed:", err));
  // }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
  
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
  

  return (
    <section id="about" className="py-24 px-6 lg:px-24 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-black">About Me</h2>
      <p className="mb-8 text-gray-700 max-w-2xl">
        Hi, I am an <span className="text-purple-600 font-semibold">LLM-powered Chatbot</span> trained on Rakshit Shah’s skills, projects, and experiences.
        Ask me anything to learn more about his journey in AI, Machine Learning, and impactful tech!
      </p>

      {/* Chatbot UI */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl mx-auto">
        <div className="h-64 overflow-y-auto pr-2 mb-4 space-y-4">
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

        {/* Input area */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
