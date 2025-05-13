'use client'
import React from 'react'
import { motion } from 'framer-motion'

const achievementsList = [
  { metric: "Projects", value: "100+" },
  { metric: "Users", value: "1M+" },
  { metric: "Awards", value: "10+" },
  { metric: "Years", value: "5+" }
];

const AchievementsSection = () => {
  return (
    <div className='py-12 px-4 sm:py-16 xl:px-16'>
      <div className='border border-[#33353F] rounded-md py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center'>
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#1e1e2e",
              boxShadow: "0px 0px 20px rgba(57, 255, 20, 0.2)"
            }}
            transition={{ delay: index * 0.2, duration: 0.4, type: 'spring' }}
            className='flex flex-col items-center justify-center p-4 rounded-lg cursor-default transition-all duration-300'
          >
            <h2 className='text-4xl font-bold text-[#39FF14] neon-text-glow'>
              {achievement.value}
            </h2>
            <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AchievementsSection;
