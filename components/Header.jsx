// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { motion } from "motion/react";

// const Header = ({ isDarkMode, setIsDarkMode }) => {
//   return (
//     <div className="flex flex-col items-center justify-center mx-auto h-screen max-w-3xl w-11/12">
//       <motion.div
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//       >
//         <Image
//           src={assets.profile_img}
//           alt="Deep's Profile"
//           className="rounded-full w-32 mt-16"
//         />
//       </motion.div>
//       <motion.h3
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="flex items-end gap=2 text-xl md:text-2xl mb-3 font-ovo py-4"
//       >
//         Hi there I am{" "}
//         <span className="dark:text-darkThemeButton px-2"> Deep Moitra</span>{" "}
//         <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
//       </motion.h3>
//       <motion.h1
//         initial={{ y: -30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//         className="text-3xl sm:text-6xl lg:text-[66px] font-ovo mx-auto max-w-6xl text-center"
//       >
//         <span className="dark:text-darkThemeButton">Frontend Developer</span>{" "}
//         and <span className="dark:text-darkThemeButton">UI/UX</span> designer
//         based in India
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.7 }}
//         className="max-w-2xl mx-auto font-ovo  py-2"
//       >
//         Constantly evolving and on a motion to craft experiences that are
//         visually appealing and user-friendly.
//       </motion.p>
//       <div className="flex  flex-col sm:flex-row items-center mt-4 gap-4 hover:border-darkHoverLight">
//         <motion.a
//           href="#contact"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//           className="relative font-ovo px-10 py-3 border rounded-md text-white font-semibold
//              flex items-center gap-2
//              bg-darkHover hover:bg-darkHover
//              dark:bg-darkThemeButton dark:border dark:border-transparent
//              dark:hover:bg-blackTheme dark:hover:border-darkThemeButton
//              dark:shadow-none dark:hover:shadow-[0_0_12px_rgba(117,79,224,1)]"
//         >
//           Contact Me
//           <Image src={assets.right_arrow_white} alt="" className="w-4" />
//         </motion.a>

//         {/* My Resume Button */}
//         <motion.a
//           href="/Deep Moitra Resume.pdf"
//           download
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//           className="px-10 py-3 border rounded-md flex items-center gap-2
//              font-ovo  text-darkHover border-darkHover
//              hover:bg-darkHoverLightNew dark:text-white
//              dark:border dark:border-darkThemeButton
//              dark:hover:bg-darkThemeButton
//              dark:shadow-[0_0_25px_rgba(117,79,224,1)] dark:hover:shadow-[0_0_40px_rgba(117,79,224,1)]"
//         >
//           My Resume
//           <Image
//             src={isDarkMode ? assets.download_icon_dark : assets.download_icon}
//             alt=""
//             className="w-4 dark:w-6"
//           />
//         </motion.a>
//       </div>
//     </div>
//   );
// };

// export default Header;

//----------------------code with video

"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const BirdSVG = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 14.5C2.5 14.5 7.5 10.5 12 12.5C16.5 10.5 21.5 14.5 21.5 14.5C21.5 14.5 16.5 7.5 12 10.5C7.5 7.5 2.5 14.5 2.5 14.5Z" />
  </svg>
);

const Header = ({ isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 bg-gradient-to-b from-[#2A5298] via-[#162E61] to-[#0A1429] dark:from-[#0D1B2A] dark:via-[#08101A] dark:to-[#03060A] text-white">
      
      {/* Decorative Birds */}
      <motion.div 
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 opacity-20 dark:opacity-10"
      >
        <BirdSVG className="w-8 h-8 -rotate-12" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/4 opacity-10 dark:opacity-5"
      >
        <BirdSVG className="w-12 h-12 rotate-12" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/3 opacity-15 dark:opacity-[0.07]"
      >
        <BirdSVG className="w-6 h-6 -rotate-6" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-1/3 left-1/3 opacity-10 dark:opacity-5"
      >
        <BirdSVG className="w-10 h-10 rotate-6" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center mx-auto max-w-5xl w-11/12 px-4">
        
        {/* Top Info Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl mb-6 gap-4"
        >
          <p className="font-outfit text-sm md:text-base tracking-wide text-white/90 dark:text-gray-300">
            Hello, from the developer's desk.
          </p>
          <div className="flex items-center gap-2 bg-white/10 dark:bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-colors cursor-default">
            <span className="text-xs font-outfit tracking-wide text-white dark:text-gray-200 font-medium">Open To Work</span>
            <span className="w-2 h-2 rounded-full bg-white dark:bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)] dark:shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full relative"
        >
          <h1 className="text-6xl sm:text-7xl md:text-[110px] lg:text-[140px] font-playfair font-medium leading-[1] md:leading-[0.95] tracking-tight text-white drop-shadow-sm">
            Thoughtful
            <br />
            <span className="italic font-light pr-2 md:pr-4">by</span>
            design
          </h1>

          {/* Decorative Postcard / Doodle */}
          <motion.div 
             initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
             animate={{ opacity: 1, rotate: 12, scale: 1 }}
             whileHover={{ 
               scale: 1.1, 
               rotate: 0,
               y: -15,
             }}
             onHoverStart={() => setIsHovered(true)}
             onHoverEnd={() => setIsHovered(false)}
             transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 100, damping: 15 }}
             className="absolute -right-2 sm:right-0 md:right-12 -bottom-12 sm:-bottom-16 md:-bottom-24 w-20 sm:w-48 md:w-56 z-30 cursor-pointer"
          >
            <div className={`p-1.5 sm:p-3 rounded-sm shadow-2xl transition-all duration-500 relative overflow-hidden ${isHovered ? 'bg-[#050B14] shadow-[0_0_30px_rgba(0,255,255,0.6)]' : 'bg-[#f4f4f5] dark:bg-[#1A1A1A]'}`}>
              
              {/* Jarvis Animation Overlay */}
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute w-24 h-24 sm:w-36 sm:h-36 rounded-full border-2 border-transparent border-t-cyan-400 border-b-cyan-400 opacity-70"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute w-20 h-20 sm:w-32 sm:h-32 rounded-full border-[1px] border-dashed border-cyan-300 opacity-50"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyan-500/20 blur-md"
                  />
                  {/* Scanline */}
                  <motion.div
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_10px_rgba(0,255,255,1)]"
                  />
                  <div className="text-cyan-400 font-mono text-[6px] sm:text-[10px] absolute bottom-1 left-1 sm:bottom-2 sm:left-2 flex flex-col gap-0.5 sm:gap-1 opacity-80">
                    <span>SYS.ON</span>
                    <span>{'{'}AUTH: OK{'}'}</span>
                  </div>
                </div>
              )}

              <div className={`border h-full w-full p-1.5 sm:p-4 font-outfit flex flex-col items-center transition-colors duration-500 relative z-20 ${isHovered ? 'border-cyan-500/50 text-cyan-50' : 'border-gray-300 dark:border-gray-700 text-black dark:text-white'}`}>
                {/* Simulated Doodle */}
                <div className={`w-8 h-8 sm:w-24 sm:h-24 border-2 rounded-full mb-1 sm:mb-2 flex items-center justify-center transition-all duration-500 bg-transparent overflow-hidden ${isHovered ? 'border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.5)] text-cyan-300' : 'border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400'}`}>
                  <div className={`transition-all duration-500 w-4 h-4 sm:w-12 sm:h-12 flex items-center justify-center ${isHovered ? 'scale-110 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]' : ''}`}>
                    {isHovered ? (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12zm-9-6c-.83 0-1.5-.67-1.5-1.5S8.17 10 9 10s1.5.67 1.5 1.5S9.83 13 9 13zm7.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zM8 15h8v2H8v-2z"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                      </svg>
                    )}
                  </div>
                </div>
                <p className={`font-bold text-[6px] sm:text-xs tracking-wider uppercase mb-0.5 sm:mb-1 transition-colors ${isHovered ? 'text-cyan-300' : ''}`}>Deep Moitra</p>
                <div className={`w-6 sm:w-10 h-[1px] my-0.5 sm:my-1 transition-colors duration-500 ${isHovered ? 'bg-cyan-500' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                <p className={`text-[5px] sm:text-[10px] text-center leading-tight transition-colors duration-500 ${isHovered ? 'text-cyan-200' : 'text-gray-500 dark:text-gray-400'}`}>
                  {isHovered ? (
                    <>
                      SYSTEM • ONLINE
                      <br />READY
                    </>
                  ) : (
                    <>
                      EAT • SLEEP • CODE
                      <br />REPEAT
                    </>
                  )}
                </p>
                {/* Tape detail */}
                <div className={`absolute -top-1.5 -left-1.5 sm:-top-3 sm:-left-3 w-4 sm:w-8 h-1.5 sm:h-3 -rotate-12 shadow-sm border transition-colors duration-500 z-30 ${isHovered ? 'bg-cyan-500/20 border-cyan-400/30' : 'bg-white/60 dark:bg-white/10 backdrop-blur-sm border-black/5 dark:border-white/5'}`}></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto font-outfit mt-12 sm:mt-20 text-center text-sm sm:text-base md:text-xl text-white/90 dark:text-gray-300 leading-relaxed font-light"
        >
          <p>
            I'm Deep Moitra, a Frontend Developer working at the
            <br className="hidden sm:block" /> intersection of UI/UX, Scalability, and Web3.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center mt-10 sm:mt-12 gap-4 sm:gap-6 relative z-40"
        >
          <a
            href="#contact"
            className="font-outfit px-8 py-3.5 rounded-full font-medium tracking-wide flex items-center gap-3 transition-all bg-white text-[#162a53] dark:bg-[#2563EB] dark:text-white hover:bg-gray-100 dark:hover:bg-[#1D4ED8] shadow-[0_0_20px_rgba(255,255,255,0.2)] dark:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1"
          >
            Contact Me
          </a>
          <a
            href="/Deep Moitra Resume.pdf"
            download
            className="px-8 py-3.5 rounded-full flex items-center gap-3 font-outfit font-medium tracking-wide transition-all border border-white/30 dark:border-white/20 text-white dark:text-gray-200 hover:bg-white/10 dark:hover:bg-white/5 hover:-translate-y-1"
          >
            My Resume
            <Image
              src={assets.download_icon_dark}
              alt="Download"
              className="w-4 brightness-0 invert dark:invert-0 dark:brightness-200"
            />
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Header;
