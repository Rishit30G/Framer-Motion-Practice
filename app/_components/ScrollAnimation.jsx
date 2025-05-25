'use client';

import { motion } from 'framer-motion';

const researchLayers = [
  { title: 'Research 1', bg: 'bg-black text-white' },
  { title: 'Developemnt', bg: 'bg-white text-black' },
];

export default function ScrollStack() {
  return (
    <div className="w-full">
      {/* Normal Intro Section */}
      <section className="h-screen flex items-center justify-center px-10 py-20 bg-white text-black text-6xl font-bold">
        Intro Section
      </section>

      {/* Sticky Scrollable Research Section */}
      <div className="relative">
        {researchLayers.map((layer, i) => (
          <div
            key={i}
            className={`sticky top-0 h-screen flex items-center justify-center px-10 py-20 ${layer.bg}`}
          >
            <motion.div
              className="max-w-4xl w-full rounded-2xl text-6xl font-bold text-center"
            >
              {layer.title}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Normal Sections after Research */}
      {/* {normalSections.map((section, i) => (
        <section
          key={i}
          className={`h-screen flex items-center justify-center px-10 py-20 text-6xl font-bold ${section.bg}`}
        >
          {section.title}
        </section>
      ))} */}
    </div>
  );
}