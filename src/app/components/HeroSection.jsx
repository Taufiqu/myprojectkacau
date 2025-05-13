"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        {/* Kiri: Teks */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
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

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #39FF14" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-[#39FF14] via-[#00FFC6] to-[#39FF14] text-black font-bold transition duration-300"
            >
              Hire Me
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #39FF14" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="/cv/Zenn-CV.pdf"
              download
              className="px-6 py-3 w-full sm:w-fit rounded-full border border-[#39FF14] text-[#39FF14] text-center hover:bg-[#39FF14]/10 transition duration-300 font-semibold"
            >
              Download CV
            </motion.a>
          </div>
        </div>

        {/* Kanan: Foto */}
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] aspect-square lg:w-[400px] relative">
            <Image
              src="/images/P1.jpg"
              alt="Profile Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
