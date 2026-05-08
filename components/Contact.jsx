"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }) => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-[12%] py-24 bg-gray-50 dark:bg-[#0a0a0a]"
    >
      <motion.h4
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-center mb-4 text-sm font-outfit uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
      >
        Get in touch
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="text-center text-5xl md:text-6xl font-playfair font-bold text-black dark:text-white"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-stretch"
      >
        {/* Let's Build Box */}
        <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] p-10 md:p-14 shadow-2xl transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="Mail icon"
              className="w-8"
            />
            <span className="font-playfair text-2xl md:text-3xl font-bold text-black dark:text-white">
              Let’s build something useful
            </span>
          </div>

          <p className="max-w-xl font-outfit text-base leading-relaxed text-gray-600 dark:text-gray-400">
            If you need a front-end developer, UI/UX collaborator, or someone who can turn a product idea into a polished interface, reach out. I’m open to freelance work, internships, and project discussions.
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row">
            <a
              href="mailto:deepmoitra2@gmail.com"
              className="inline-flex items-center justify-center gap-3 bg-black px-8 py-4 font-outfit font-semibold tracking-wide text-white transition-all hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Send Email
              {/* <Image src={isDarkMode ? assets.send_icon_dark : assets.send_icon} alt="Send" className="w-4" /> */}
            </a>

            <a
              href="https://www.linkedin.com/in/deep-moitra-59202a1a5/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-700 px-8 py-4 font-outfit font-semibold tracking-wide text-black dark:text-white transition-all hover:bg-gray-50 dark:hover:bg-[#222]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Details Box */}
        <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] p-10 md:p-14 shadow-2xl transition-all hover:shadow-xl hover:-translate-y-1">
          <h3 className="font-playfair text-3xl font-bold mb-10 text-black dark:text-white">Details</h3>

          <ul className="space-y-8 font-outfit text-gray-800 dark:text-gray-200">
            <li className="flex items-start gap-5">
              <span className="flex h-12 w-12 items-center justify-center border border-gray-200 dark:border-gray-800 rounded-full">
                <Image
                  src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                  alt="Email"
                  className="w-5"
                />
              </span>
              <div className="mt-1">
                <p className="font-bold text-black dark:text-white mb-1">Email</p>
                <a
                  href="mailto:deepmoitra2@gmail.com"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  deepmoitra2@gmail.com
                </a>
              </div>
            </li>

            <li className="flex items-start gap-5">
              <span className="flex h-12 w-12 items-center justify-center border border-gray-200 dark:border-gray-800 rounded-full">
                <Image src={isDarkMode ? assets.send_icon : assets.send_icon} alt="Response" className="w-5 dark:invert" />
              </span>
              <div className="mt-1">
                <p className="font-bold text-black dark:text-white mb-1">Availability</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Open to remote and on-site opportunities
                </p>
              </div>
            </li>

            <li className="flex items-start gap-5">
              <span className="flex h-12 w-12 items-center justify-center border border-gray-200 dark:border-gray-800 rounded-full">
                <Image src={isDarkMode ? assets.linkedin_dark : assets.linkedin} alt="LinkedIn" className="w-5" />
              </span>
              <div className="mt-1">
                <p className="font-bold text-black dark:text-white mb-1">Network</p>
                <a
                  href="https://www.linkedin.com/in/deep-moitra-59202a1a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  /in/deep-moitra
                </a>
              </div>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
