import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-24 bg-white dark:bg-[#050505]"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-center mb-4 text-sm font-outfit uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
      >
        My Arsenal
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-center text-5xl md:text-6xl font-playfair font-bold text-black dark:text-white"
      >
        Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-6 mb-16 font-outfit text-lg text-gray-600 dark:text-gray-400"
      >
        Delivering end-to-end digital solutions. From pixel-perfect front-end execution to strategic UI/UX design, bringing your ideas to life with modern technologies.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-auto gap-8 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="group border-b border-gray-200 dark:border-gray-800 px-6 py-12 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-[#111]"
          >
            <Image src={icon} alt="" className="w-10 mb-6 grayscale group-hover:grayscale-0 transition-all duration-300" />
            <h3 className="text-2xl font-playfair font-bold mb-4 text-black dark:text-white">
              {title}
            </h3>
            <p className="text-base font-outfit text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {description}
            </p>
            <a href={link} className="inline-flex items-center gap-3 text-sm font-outfit font-semibold uppercase tracking-widest text-black dark:text-white group-hover:gap-5 transition-all">
              Read More
              <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
