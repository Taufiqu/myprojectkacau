"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
          {/* Kiri: Teks */}
          <div className="md:col-span-7 text-center md:text-left">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] via-[#00FFC6] to-[#39FF14]">
                Hello, I'm{" "}
              </span>
              <br />
              <span className="inline-block h-[40px]">
                <TypeAnimation
                  sequence={[
                    "Zenn",
                    1000,
                    "Web Developer",
                    1000,
                    "AI Enthusiast",
                    1000,
                    "Front-End Enthusiast",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-[#ADB78E] text-base sm:text-lg mb-6 lg:text-xl">
              I’m passionate about crafting beautiful web experiences with a touch of AI magic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #39FF14" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-[#39FF14] via-[#00FFC6] to-[#39FF14] text-black font-bold transition duration-100"
              >
                Hire Me
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #39FF14" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="/cv/Zenn-CV.pdf"
                download
                className="px-6 py-3 w-full sm:w-fit rounded-full border border-[#39FF14] text-[#39FF14] text-center hover:bg-[#39FF14]/10 transition duration-100 font-semibold"
              >
                Download CV
              </motion.a>
            </div>
          </div>

          {/* Kanan: Gambar */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-56 sm:w-72 md:w-80 lg:w-88 aspect-square rounded-full bg-[#181818] overflow-hidden">
              <Image
                src="/images/P3.jpg"
                alt="Profile Image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
