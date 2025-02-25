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
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`  w-full fixed px-8 lg:px-12 xl:px-[10%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkThemeButton dark:shadow-white/20 dark:bg-opacity-15 "
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Deep's Logo"
            width={100}
            height={100}
          />
        </a>
        <ul
          className={`ml-40 hidden md:flex items-center gap-6 
        lg:gap-8 rounded-md px-12 py-3  ${
          isScroll ? "" : "shadow-sm bg-opacity-50  dark:bg-transparent"
        }`}
        >
          <li>
            <a
              href="#top"
              className="hover:text-darkHoverLight dark:hover:text-darkThemeButton 
             dark:hover:[text-shadow:0_0_10px_rgba(117,79,224,1)] transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-darkHoverLight dark:hover:text-darkThemeButton 
             dark:hover:[text-shadow:0_0_10px_rgba(117,79,224,1)] transition-all"
            >
              About
            </a>
          </li>
          {/* <li>
            <a
              href="#services"
              className="hover:text-darkHoverLight dark:hover:text-darkThemeButton 
             dark:hover:[text-shadow:0_0_10px_rgba(117,79,224,1)] transition-all"
            >
              Services
            </a>
          </li> */}
          <li>
            <a
              href="#work"
              className="hover:text-darkHoverLight dark:hover:text-darkThemeButton 
             dark:hover:[text-shadow:0_0_10px_rgba(117,79,224,1)] transition-all"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-darkHoverLight dark:hover:text-darkThemeButton 
             dark:hover:[text-shadow:0_0_10px_rgba(117,79,224,1)] transition-all"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="dark_mode"
              width={24}
              height={24}
            />
          </button>
          <a
            href="https://www.linkedin.com/in/deep-moitra-59202a1a5/"
            className=" hidden lg:flex items-center gap-1 px-2 border rounded-md py-2 font-semibold text-xl  border-darkHover   hover:text-white dark:border dark:border-darkThemeButton  dark:text-white dark:shadow-[0_0_25px_rgba(117,79,224,1)]"
          >
            <Image
              src={isDarkMode ? assets.linkedin_dark : assets.linkedin}
              alt="Linked In Icon"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://github.com/triggereddown"
            className=" hidden lg:flex items-center gap-1 px-2 border rounded-md py-2 font-semibold text-xl  border-darkHover   hover:text-white dark:border dark:border-darkThemeButton  dark:text-white dark:shadow-[0_0_25px_rgba(117,79,224,1)]"
          >
            <Image
              src={isDarkMode ? assets.githubIconDark : assets.github}
              alt="Github Icon"
              width={24}
              height={24}
            />
          </a>
          <a
            href="#contact"
            className=" hidden lg:flex items-center gap-3 px-5 border rounded-md py-2 font-semibold text-xl  border-darkHover  hover:bg-darkHover hover:text-white dark:border dark:border-darkThemeButton dark:hover:bg-darkThemeButton dark:text-white dark:shadow-[0_0_25px_rgba(117,79,224,1)]"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              width={12}
              height={12}
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
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
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-darkHoverLight dark:bg-darkThemeButton dark:text-white "
        >
          <div className="absolute right-6 top-6" onClick={closedMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Closing imgs"
              className="w-5 cursor-pointer bg-darkHoverLight dark:bg-darkThemeButton"
            />
          </div>
          <li className="bg-darkHoverLight dark:bg-darkThemeButton">
            <a
              onClick={closedMenu}
              href="#top"
              className="bg-darkHoverLight dark:bg-darkThemeButton"
            >
              Home
            </a>
          </li>
          <li className="bg-darkHoverLight dark:bg-darkThemeButton">
            <a
              onClick={closedMenu}
              href="#about"
              className="bg-darkHoverLight dark:bg-darkThemeButton"
            >
              About
            </a>
          </li>
          {/* <li className="bg-darkHoverLight dark:bg-darkThemeButton">
            <a
              onClick={closedMenu}
              href="#services"
              className="bg-darkHoverLight dark:bg-darkThemeButton"
            >
              Services
            </a>
          </li> */}
          <li className="bg-darkHoverLight dark:bg-darkThemeButton">
            <a
              onClick={closedMenu}
              href="#work"
              className="bg-darkHoverLight dark:bg-darkThemeButton"
            >
              Projects
            </a>
          </li>
          <li className="bg-darkHoverLight dark:bg-darkThemeButton">
            <a
              onClick={closedMenu}
              href="#contact"
              className="bg-darkHoverLight dark:bg-darkThemeButton"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="https://github.com/triggereddown"
              className="  lg:flex items-center gap-1 px-2 border rounded-md py-2 font-semibold text-xl  border-darkHover   hover:text-white dark:border dark:border-darkThemeButton  dark:text-white dark:shadow-[0_0_25px_rgba(117,79,224,1)]"
            >
              <Image
                src={isDarkMode ? assets.githubIconDark : assets.github}
                alt="Github Icon"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/deep-moitra-59202a1a5/"
              className=" lg:flex items-center gap-1 px-2 border rounded-md py-2 font-semibold text-xl  border-darkHover   hover:text-white dark:border dark:border-darkThemeButton  dark:text-white dark:shadow-[0_0_25px_rgba(117,79,224,1)]"
            >
              <Image
                src={isDarkMode ? assets.linkedin_dark : assets.linkedin}
                alt="Linked In Icon"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
