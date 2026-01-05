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
import React from "react";
import { motion } from "motion/react";

const Header = ({ isDarkMode }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* ===== Background Video ===== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute top-0 left-0 w-full object-cover z-0
          ${isDarkMode ? "h-full" : "h-[100vh] pt-20"}
        `}
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
      </video>

      {/* ===== Dark Overlay ===== */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* ===== Content ===== */}
      <div className="relative z-20 flex flex-col items-center justify-center mx-auto h-screen max-w-3xl w-11/12">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.profile_img}
            alt="Deep's Profile"
            className="rounded-full w-32 mt-16"
            priority
          />
        </motion.div>

        {/* Greeting */}
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`flex items-center gap-2 text-xl md:text-2xl mb-3 font-ovo py-4
            ${isDarkMode ? "text-white" : "text-white"}
          `}
        >
          Hi there, I am
          <span
            className={`px-2 ${
              isDarkMode
                ? "text-darkThemeButton"
                : "text-yellow-900 font-semibold"
            }`}
          >
            Deep Moitra
          </span>
          <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
        </motion.h3>

        {/* Main Heading */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`text-3xl sm:text-6xl lg:text-[66px] font-ovo mx-auto max-w-6xl text-center
            ${isDarkMode ? "text-white" : "text-white"}
          `}
        >
          <span
            className={isDarkMode ? "text-darkThemeButton" : "text-yellow-900"}
          >
            Frontend Developer
          </span>{" "}
          and{" "}
          <span
            className={isDarkMode ? "text-darkThemeButton" : "text-yellow-900"}
          >
            UI/UX
          </span>{" "}
          designer based in India
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={`max-w-2xl mx-auto font-ovo py-3 text-center
            ${isDarkMode ? "text-gray-200" : "text-white"}
          `}
        >
          Constantly evolving and on a mission to craft experiences that are
          visually appealing and user-friendly.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center mt-6 gap-4">
          {/* Contact Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`relative font-ovo px-10 py-3 rounded-md font-semibold
              flex items-center gap-2
              ${
                isDarkMode
                  ? "bg-darkThemeButton text-white hover:bg-blackTheme border border-transparent hover:border-darkThemeButton shadow-none hover:shadow-[0_0_12px_rgba(117,79,224,1)]"
                  : "bg-darkHover text-white hover:bg-darkHover"
              }
            `}
          >
            Contact Me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.a>

          {/* Resume Button */}
          <motion.a
            href="/Deep Moitra Resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`px-10 py-3 border rounded-md flex items-center gap-2 font-ovo
              ${
                isDarkMode
                  ? "text-white border-darkThemeButton hover:bg-darkThemeButton shadow-[0_0_25px_rgba(117,79,224,1)] hover:shadow-[0_0_40px_rgba(117,79,224,1)]"
                  : "text-white font-medium hover:text-darkHover hover:border-darkHover border-white hover:bg-darkHoverLightNew"
              }
            `}
          >
            My Resume
            <Image
              src={
                isDarkMode ? assets.download_icon_dark : assets.download_icon
              }
              alt=""
              className="w-4"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
