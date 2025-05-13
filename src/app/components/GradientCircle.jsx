'use client'
import React from 'react'
import { motion } from 'framer-motion'

const GradientCircle = ({ position = 'left' }) => {
  const baseClass = "absolute z-0 pointer-events-none";
  const positionClass =
    position === 'left'
      ? 'left-[80px] top-[70px] md:left-[-100px] md:top-[100px] lg:left-[120px] lg:top-[200px]'
      : 'right-[-80px] top-[60px] md:right-[-100px] md:top-[100px] lg:right-[-120px] lg:top-[120px]';

  return (
    <div className={`${baseClass} ${positionClass}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="w-60 h-60 md:w-72 md:h-72 rounded-full blur-3xl bg-[radial-gradient(circle,_#39FF14,_transparent_70%)]"
      />
    </div>
  );
};

export default GradientCircle;
