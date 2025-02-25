import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 bg-darkHoverLightNew dark:bg-blackTheme "
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Arsenal
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-center text-5xl font-ovo"
      >
        Services{" "}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-auto gap-6 my-10  "
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-darkHover rounded-lg px-8 py-12 hover:shadow-black cursor-pointer bg-white hover:bg-darkHoverLightNew hover:-translate-y-1 duration-300 dark:border dark:bg-blackTheme dark:border-darkThemeButton dark:hover:bg-darkThemeButton "
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-darkHover dark:text-darkThemeButton hover:dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-darkHover leading-5 dark:text-white">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read More{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
