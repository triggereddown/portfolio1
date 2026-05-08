"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closedMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 px-6 lg:px-12 xl:px-[10%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-[#050505]/90 dark:border-b dark:border-white/10 dark:shadow-none"
            : "bg-transparent"
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Deep's Logo"
            width={90}
            height={90}
            className="w-24 md:w-28"
          />
        </a>

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex items-center gap-8 rounded-full px-12 py-3 font-outfit text-sm font-medium tracking-wide transition-all ${
            isScroll ? "" : "bg-white/40 backdrop-blur-sm dark:bg-black/20 shadow-sm border border-gray-200/50 dark:border-white/10"
          }`}
        >
          <li>
            <a href="#top" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#work" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button onClick={() => setIsDarkMode((prev) => !prev)} className="hover:scale-110 transition-transform">
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="dark_mode"
              width={22}
              height={22}
            />
          </button>
          
          <a
            href="#contact"
            className="hidden lg:flex items-center justify-center px-6 py-2.5 rounded-full font-outfit font-medium text-sm border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Let's Talk
          </a>

          <button className="block md:hidden ml-2 hover:opacity-70 transition-opacity" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="hamburger_menu"
              className="w-6"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* ---------------------Mobile View ------------------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-8 py-24 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-white dark:bg-[#050505] shadow-2xl dark:border-l dark:border-white/10"
        >
          <div className="absolute right-6 top-6" onClick={closedMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Closing imgs"
              className="w-5 cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
          
          <li className="font-playfair text-3xl font-bold border-b border-gray-100 dark:border-gray-800 pb-4">
            <a onClick={closedMenu} href="#top" className="text-black dark:text-white">
              Home
            </a>
          </li>
          <li className="font-playfair text-3xl font-bold border-b border-gray-100 dark:border-gray-800 pb-4">
            <a onClick={closedMenu} href="#about" className="text-black dark:text-white">
              About
            </a>
          </li>
          <li className="font-playfair text-3xl font-bold border-b border-gray-100 dark:border-gray-800 pb-4">
            <a onClick={closedMenu} href="#work" className="text-black dark:text-white">
              Projects
            </a>
          </li>
          <li className="font-playfair text-3xl font-bold border-b border-gray-100 dark:border-gray-800 pb-4">
            <a onClick={closedMenu} href="#contact" className="text-black dark:text-white">
              Contact Us
            </a>
          </li>
          
          <li className="flex gap-4 mt-auto border-t border-gray-100 dark:border-gray-800 pt-6">
            <a
              href="https://github.com/triggereddown"
              className="p-3 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-[#111] transition-colors"
            >
              <Image
                src={isDarkMode ? assets.githubIconDark : assets.github}
                alt="Github Icon"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/deep-moitra-59202a1a5/"
              className="p-3 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-[#111] transition-colors"
            >
              <Image
                src={isDarkMode ? assets.linkedin_dark : assets.linkedin}
                alt="Linked In Icon"
                width={20}
                height={20}
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
