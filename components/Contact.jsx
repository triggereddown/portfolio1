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
      className="w-full px-[12%] py-16"
    >
      <motion.h4
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Get in touch
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="text-center text-5xl font-ovo"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-stretch"
      >
        <div className="rounded-3xl border border-darkHover/30 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-darkThemeButton dark:bg-darkThemeButton/20">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="Mail icon"
              className="w-8"
            />
            <span className="font-ovo text-xl">Let’s build something useful</span>
          </div>

          <p className="max-w-2xl font-ovo text-base leading-8 text-gray-700 dark:text-gray-200">
            If you need a front-end developer, UI/UX collaborator, or someone
            who can turn a product idea into a polished interface, reach out.
            I’m open to freelance work, internships, and project discussions.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:deepmoitra2@gmail.com"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-darkHover px-6 py-3 font-ovo font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-darkThemeButton dark:hover:shadow-[0_0_12px_rgba(117,79,224,1)]"
            >
              Send Email
              <Image src={assets.send_icon} alt="Send" className="w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/deep-moitra-59202a1a5/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-darkHover px-6 py-3 font-ovo font-semibold text-darkHover transition-transform hover:-translate-y-0.5 hover:bg-darkHover hover:text-white dark:border-darkThemeButton dark:text-white dark:hover:bg-darkThemeButton"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-darkHover/30 bg-darkHoverLightNew p-8 shadow-lg dark:border-darkThemeButton dark:bg-black/20">
          <h3 className="font-ovo text-2xl mb-6">Contact details</h3>

          <ul className="space-y-5 text-gray-800 dark:text-gray-100">
            <li className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-white/10">
                <Image
                  src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
                  alt="Email"
                  className="w-5"
                />
              </span>
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:deepmoitra2@gmail.com"
                  className="text-sm text-gray-700 underline-offset-4 hover:underline dark:text-gray-200"
                >
                  deepmoitra2@gmail.com
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-white/10">
                <Image src={assets.send_icon} alt="Response" className="w-5" />
              </span>
              <div>
                <p className="font-semibold">Availability</p>
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  Open to remote and on-site opportunities
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-white/10">
                <Image src={assets.linkedin} alt="LinkedIn" className="w-5" />
              </span>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/deep-moitra-59202a1a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-700 underline-offset-4 hover:underline dark:text-gray-200"
                >
                  /in/deep-moitra-59202a1a5/
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