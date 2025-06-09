import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="pt-24 pb-12 px-6 md:px-16 bg-white">
      <motion.div
        className="bg-violet-50 rounded-xl px-8 py-10 shadow-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold text-gray-900 mb-10">About Me</h2>

        <p className="text-xl text-gray-800 leading-relaxed mb-6">
          I'm an <span className="text-purple-600 font-semibold">AI Engineer</span> focused on building agentic systems. AI that sees, thinks, and acts.
          My work blends vision models, OCR, and large language models to create intelligent applications that adapt in real time.
        </p>

        <p className="text-lg text-gray-800 leading-loose mb-6">
          I hold a <span className="text-purple-600 font-semibold">Master’s in Computer Science from California State University, East Bay</span>,
          where I specialized in large language models, multimodal learning, and scalable ML pipelines.
          I’m especially drawn to problems where AI can reason, interact, and improve with minimal supervision.
        </p>

        <p className="text-lg text-gray-800 leading-loose mb-6">
          My work bridges applied engineering and academic rigor. I’ve deployed end-to-end—fine-tuned AI models, architecting semantic pipelines,
          and optimizing inference workflows while also publishing research work in the domain of AI/ML on IEEE Xplore.
        </p>

        <p className="text-lg text-gray-800 leading-loose">
          I believe in designing AI that's not just smart, but useful. I love working with teams that turn deep tech into real-world impact,
          and I'm currently exploring roles in applied AI, LLM product development, and early-stage R&D.
          <br /><br />
        </p>
      </motion.div>
    </section>
  );
};

export default About;
