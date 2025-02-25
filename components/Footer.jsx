import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="flex w-max items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail_icon "
            className="w-6"
          />
          deepmoitra2@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-darkHover mx-[10%] mt-12 py-6 dark:border-darkThemeButton ">
        <p>© 2025 By Deep Moitra. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 ">
          <li>
            <a target="blank" href="https://github.com/triggereddown">
              Github
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://www.linkedin.com/in/deep-moitra-59202a1a5/"
            >
              Linked In
            </a>
          </li>
          <li>
            <a
              target="blank"
              href="https://x.com/Deepmoitra1?t=UWcLahKVwU1-MYcsQ2mc9A&s=08"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <p>
        <a target="_blank" href="https://icons8.com/icon/20FjgTazh8FG/download">
          Download
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </p>
    </div>
  );
};

export default Footer;
