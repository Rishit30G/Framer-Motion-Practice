// components/GlowingCard.tsx
import React from 'react'

export default function GlowingCard() {
    return (
      <main className="min-h-screen bg-gray-100 dark:bg-black flex items-center justify-center p-4">
        <div className="relative p-1 w-full">
            {/* Glow effect */}
            <div className="pointer-events-none absolute top-0 left-0 h-4 w-full z-0 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-blue-300 before:to-transparent before:blur-md before:opacity-100" />
    
            {/* Actual Card */}
            <div className="relative z-10 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-t-blue-400">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">Glowing Card</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
                This card has a subtle glowing blue effect on top with a fade on the sides.
            </p>
            </div>
        </div>
      </main>
    );
  }