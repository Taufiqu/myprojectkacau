// components/SkillCard.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 85 },
  { name: "Kotlin", level: 60 },
  { name: "SQL", level: 70 },
];

const SkillCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-[#1f1f1f] p-4 rounded-2xl shadow-md border border-[#39FF14]/30"
        >
          <div className="flex justify-between mb-1">
            <span className="text-white font-medium">{skill.name}</span>
            <span className="text-[#39FF14] font-bold">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <motion.div
              className="bg-gradient-to-r from-[#39FF14] via-[#00FFC6] to-[#39FF14] h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
