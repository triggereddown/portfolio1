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
      className="w-full px-[12%] py-10 "
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introuction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center text-5xl font-ovo"
      >
        About{" "}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col w-full lg:flex-row items-center gap-20 my-20"
      >
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl lg:pb-40 sm:pb-2 "
          />
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative font-ovo px-8 py-3 border rounded-md text-white font-semibold  
                       flex items-center gap-2 
                       bg-darkHover hover:bg-darkHover 
                       dark:bg-darkThemeButton dark:border dark:border-transparent  
                       dark:hover:bg-blackTheme dark:hover:border-darkThemeButton
                       dark:shadow-none dark:hover:shadow-[0_0_12px_rgba(117,79,224,1)] sm:mt-10 "
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo ">
            Hi! I'm Deep Moitra, a passionate front-end developer and UI/UX
            enthusiast currently pursuing my B.Tech in Artificial Intelligence
            and Machine Learning (AIML) at Techno International Newtown,
            Kolkata. With a CGPA of 8.3, making projects for personal and client
            use from past 2 years. I love transforming ideas into engaging web
            interfaces and continuously explore the latest design trends and
            front-end technologies to build modern, responsive applications. My
            goal is to develop new skills with time and implement them to make
            some problem solving solutions. Feel free to check out my work and
            connect with me for exciting collaborations!
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="group border-[0.5px] border-gray-700 rounded-xl p-6 cursor-pointer hover:shadow-black hover:bg-darkHoverLightNew hover:-translate-y-1 duration-500 dark:hover:bg-darkThemeButton dark:hover:text-white dark:border-darkThemeButton"
              >
                {/* Icon */}
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3 transition-transform duration-300 group-hover:-translate-y-1 "
                />
                {/* Title with Hover Effect */}
                <h3 className="my-4 font-semibold text-gray-700 transition-colors duration-300 dark:text-white">
                  {title}
                </h3>
                {/* Description with Hover Effect */}
                <p className="text-gray-600 text-sm transition-colors duration-300 dark:hover:text-white  dark:text-white">
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 text-2xl font-semibold font-ovo dark:text-white">
            Tools and Framework
          </h4>
          <ul className=" flex items-center gap-4 sm:gap-6">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-darkHover rounded-lg cursor-pointer hover:-translate-y-1 duration-300 hover:bg-darkHoverLightNew dark:hover:bg-darkThemeButton dark:border dark:border-darkThemeButton"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-6 sm:w-7 " />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
