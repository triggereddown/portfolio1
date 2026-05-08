import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="mt-16 bg-white dark:bg-[#050505] py-16">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-28 mx-auto mb-6"
        />
        <div className="flex w-max items-center gap-3 mx-auto font-outfit text-black dark:text-white font-medium hover:opacity-70 transition-opacity cursor-pointer">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail_icon"
            className="w-5"
          />
          deepmoitra2@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-200 dark:border-gray-800 mx-[10%] mt-16 pt-8">
        <p className="font-outfit text-sm text-gray-500 dark:text-gray-400">
          © 2025 Deep Moitra. All rights reserved.
        </p>
        
        <ul className="flex items-center gap-8 justify-center mt-6 sm:mt-0 font-outfit text-sm font-medium">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/triggereddown" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/deep-moitra-59202a1a5/" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://x.com/Deepmoitra1" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              Twitter
            </a>
          </li>
        </ul>
      </div>
      
      <p className="text-center text-xs font-outfit text-gray-400 dark:text-gray-600 mt-8">
        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/20FjgTazh8FG/download" className="hover:underline">
          Download
        </a>{" "}
        icon by{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://icons8.com" className="hover:underline">
          Icons8
        </a>
      </p>
    </div>
  );
};

export default Footer;
