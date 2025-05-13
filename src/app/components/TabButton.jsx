'use client';
import React from 'react';
import { motion } from 'framer-motion';

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab} className="relative text-white group px-2 py-1">
      <span className={`font-medium transition-colors ${active ? 'text-[#39FF14]' : 'text-gray-400'}`}>
        {children}
      </span>

      {/* Underline animation */}
      {active && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#39FF14]"
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      )}
    </button>
  );
};

export default TabButton;
