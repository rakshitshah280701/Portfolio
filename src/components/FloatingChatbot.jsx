// src/components/FloatingChatbot.jsx

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I am an LLM-powered Chatbot trained on Rakshit Shah’s projects and resume. Ask me anything!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState('idle'); // 'idle' | 'loading' | 'online' | 'offline'
  const chatRef = useRef(null);

  const suggestedPrompts = [
    "Tell about StockSage?",
    "What are his technical skills?",
    "What are his leadership skills?",
    "Explain InstructAware project"
  ];

  // Auto scroll to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Trigger backend wake + ping when user opens chat
  const handleOpen = async () => {
    setIsOpen(true);
    if (serverStatus === 'idle') {
      setServerStatus('loading');
      try {
        await axios.get('/api/wake');
        await axios.get('https://api.rakshitai.info/ping');
        setServerStatus('online');
      } catch {
        setServerStatus('offline');
      }
    }
  };

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
    } catch {
      setMessages([...newMessages, {
        type: 'bot',
        text: '⚠️ Sorry, something went wrong contacting the server.',
      }]);
    } finally {
      setLoading(false);
    }
  };

  const statusColor = {
    idle: 'bg-gray-300',
    loading: 'bg-yellow-400',
    online: 'bg-green-500',
    offline: 'bg-red-500',
  }[serverStatus];

  const statusText = {
    idle: 'Click to connect',
    loading: 'Waking Up...',
    online: 'Server Ready',
    offline: 'Offline',
  }[serverStatus];

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg"
        >
          💬 Chat
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] max-h-[600px] bg-white shadow-2xl rounded-xl flex flex-col border border-gray-300 overflow-hidden">
          {/* Header */}
          <div className="bg-purple-600 text-white px-4 py-2 flex justify-between items-center">
            <span className="font-semibold">Chat with Rakshit’s AI</span>
            <button onClick={() => setIsOpen(false)} className="text-white font-bold">×</button>
          </div>

          {/* Chat Messages */}
          <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`p-2 rounded-lg ${msg.type === 'user' ? 'bg-purple-100 text-purple-900 ml-auto' : 'bg-gray-200 text-gray-800'}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="text-gray-500">Typing...</div>}
          </div>

          {/* Prompts */}
          <div className="flex flex-wrap gap-1 px-3 pb-2">
            {suggestedPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => setInput(p)}
                className="text-xs border border-gray-300 rounded-full px-2 py-1 hover:bg-gray-100"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center px-3 py-2 border-t">
            <span className={`w-2 h-2 rounded-full mr-2 ${statusColor}`} title={statusText}></span>
            <input
              className="flex-grow text-sm border border-gray-300 rounded-md px-3 py-1 mr-2 focus:outline-none"
              placeholder={serverStatus === 'online' ? "Ask something..." : statusText}
              disabled={loading || serverStatus !== 'online'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={loading || serverStatus !== 'online'}
              className="text-sm bg-purple-600 text-white px-3 py-1 rounded-md disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
