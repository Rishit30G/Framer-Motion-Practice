'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function SmoothScrollSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Right panel enters and exits based on scroll progress
  const y = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], ['100%', '0%', '0%', '-100%']);

  return (
    <div className="relative h-[300vh]" ref={containerRef}>
      {/* Left Scroll Section */}
      <div className="sticky top-0 h-screen flex">
        {/* Left: Scrolling Content */}
        <div className="w-1/2 h-full overflow-y-auto px-10 py-20 space-y-10 text-lg leading-relaxed">
          <p>
            We’ve heard all the reasons to not use smooth scroll. It feels hacky. It’s inaccessible.
            It’s not performant. It’s over-engineered. And historically, those were all true. But we
            like to imagine things as they could be, then build them. So, why should you use smooth
            scroll?
          </p>
          <p>
            <strong>Create more immersive interfaces</strong> — Unlock the creative potential and
            impact of your web experiences. Smoothing the scroll pulls users into the flow of the
            experience that feels so substantial that they forget they’re navigating a web page.
          </p>
          <p>
            <strong>Normalize all your user inputs</strong> — Give all your users the same (dope)
            experience whether they’re using trackpads, mouse wheels, or otherwise. With smooth
            scroll, you control how silky, heavy, or responsive the experience should be — no matter
            the input. Magic!
          </p>
          <p>
            <strong>Make your animations flawless</strong> — Synchronization with native scroll is
            not reliable. Those jumps and delays with scroll-linked animations are caused by
            multi-threading, where modern browsers run animations/effects asynchronously with the
            scroll. Smooth scroll fixes this.
          </p>
        </div>

        {/* Right: Fixed Content with Motion */}
        <motion.div
          style={{ y }}
          className="w-1/2 h-screen flex items-center justify-center bg-green-100 text-4xl font-bold"
        >
          <div className="text-center">
            <p>Why</p>
            <p>smooth</p>
            <p>scroll?</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}