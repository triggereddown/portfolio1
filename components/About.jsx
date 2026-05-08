import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-24 bg-gray-50 dark:bg-[#0a0a0a]"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-center mb-4 text-sm font-outfit uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center text-5xl md:text-6xl font-playfair font-bold text-black dark:text-white"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 my-20"
      >
        <div className="w-64 sm:w-80 max-w-none relative group">
          <div className="absolute inset-0 bg-black dark:bg-white translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex-1"
        >
          <p className="mb-12 max-w-2xl font-outfit text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Hi! I'm Deep Moitra, a passionate front-end developer and UI/UX enthusiast currently pursuing my B.Tech in Artificial Intelligence and Machine Learning (AIML) at Techno International Newtown, Kolkata. With a CGPA of 8.3, making projects for personal and client use for the past 2 years. I love transforming ideas into engaging web interfaces and continuously explore the latest design trends and front-end technologies to build modern, responsive applications. My goal is to develop new skills over time and implement them to create problem-solving solutions. Feel free to check out my work and connect with me for exciting collaborations!
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mb-16">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="group border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Icon */}
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-8 mb-6 transition-transform duration-300 group-hover:scale-110"
                />
                {/* Title */}
                <h3 className="mb-2 font-playfair text-xl font-bold text-black dark:text-white">
                  {title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 font-outfit text-sm leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </ul>
          
          <h4 className="mb-8 text-black dark:text-white text-2xl font-playfair font-bold">
            Tools & Technologies
          </h4>
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-14 sm:w-16 aspect-square border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg dark:hover:border-white/30"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-6 sm:w-8 grayscale hover:grayscale-0 transition-all duration-300" />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
