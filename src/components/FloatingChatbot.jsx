// src/components/FloatingChatbot.jsx

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hi! I am an LLM-powered Chatbot trained on Rakshit Shah’s projects and resume. Ask me anything!',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverStatus, setServerStatus] = useState('idle'); // 'idle' | 'loading' | 'online' | 'offline'
  const chatRef = useRef(null);

  const suggestedPrompts = [
    'Tell about StockSage?',
    'What are his technical skills?',
    'What are his leadership skills?',
    'Explain InstructAware project',
  ];

  // Auto scroll
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Handle chat open + wake server
  const handleOpen = async () => {
    setIsOpen(true);

    if (serverStatus === 'idle') {
      setServerStatus('loading');
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: '🔄 Waking up RakshitAI... please wait a few seconds.' },
      ]);

      try {
        await axios.get('/api/wake');
      } catch {
        // continue to ping anyway
      }

      // Ping in interval
      let attempts = 0;
      const maxAttempts = 5;

      const checkServer = async () => {
        try {
          const res = await axios.get('https://api.rakshitai.info/ping');
          if (res.status === 200) {
            setServerStatus('online');
            setMessages((prev) => [
              ...prev,
              { type: 'bot', text: '✅ RakshitAI is ready. Ask me anything!' },
            ]);
          } else {
            throw new Error('Still sleeping');
          }
        } catch {
          attempts++;
          if (attempts < maxAttempts) {
            setTimeout(checkServer, 4000); // wait 4s and retry
          } else {
            setServerStatus('offline');
            setMessages((prev) => [
              ...prev,
              { type: 'bot', text: '❌ Failed to wake RakshitAI. Try again later.' },
            ]);
          }
        }
      };

      checkServer();
    }
  };

  // Handle send message
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
      setMessages([
        ...newMessages,
        { type: 'bot', text: '⚠️ Sorry, something went wrong contacting the server.' },
      ]);
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
            <button onClick={() => setIsOpen(false)} className="text-white font-bold">
              ×
            </button>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  msg.type === 'user'
                    ? 'bg-purple-100 text-purple-900 ml-auto'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
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
            <span
              className={`w-2 h-2 rounded-full mr-2 ${statusColor}`}
              title={statusText}
            ></span>
            <input
              className="flex-grow text-sm border border-gray-300 rounded-md px-3 py-1 mr-2 focus:outline-none"
              placeholder={
                serverStatus === 'online' ? 'Ask something...' : statusText
              }
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
