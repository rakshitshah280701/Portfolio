import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/sendtoslack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong.');
      }
    } catch (error) {
      setStatus('Failed to send.');
    }
  };

  return (
    <section className="bg-indigo-50 py-16 text-center" id="contact">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Contact</h2>

      {/* Contact Info Row */}
      <div className="bg-indigo-600 text-white inline-flex flex-wrap justify-center items-center gap-8 px-8 py-4 rounded-full shadow-xl">

        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-xl" />
          <span>rakshitrajeshshah1@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaGithub className="text-xl" />
          <span>rakshitshah280701</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-xl" />
          <span>rakshitshah28</span>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            rows="3"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500">
          Send Message
        </button>
        {status && <p className="text-sm mt-2 text-gray-600">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
