import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import GithubIcon from "../components/icons/Github";
import TwitterIcon from "../components/icons/Twitter";
import LinkedinIcon from "../components/icons/Linkedin";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between text-white px-6 py-4 h-16 max-w-5xl mx-auto mt-12 bg-transparent">
      <span></span>
      <motion.img
        src="/images/profile3.jpeg "
        alt="portfolio"
        className="hidden md:block h-outo absolute w-40 h-40 rounded-full top-20 right-60 z-[1] "
        whileHover={{ y: -10, rotate: 10, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <div className="flex mt-100 space-x-6 absolute top-60 right-60 mt-3">
        <motion.a
          href="https://github.com/nazanyilmaz"
          target={"_blank"}
          rel="noopener noreferrer"
          className="flex items-center justify-center text-gray-300 transition-colors duration-300 hover:text-pinkish-200"
          whileHover={{ scale: 1.1 }}
        >
          <GithubIcon className={"w-10 h-10 fill-current"} />
        </motion.a>
        <motion.a
          href="https://twitter.com/nazan23"
          target={"_blank"}
          rel="noopener noreferrer"
          className="flex items-center justify-center text-gray-300 transition-colors duration-300 hover:text-pinkish-200"
          whileHover={{ scale: 1.1 }}
        >
          <TwitterIcon className={"w-10 h-10 fill-current"} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/nazanyilmaz/"
          target={"_blank"}
          rel="noopener noreferrer"
          className="flex items-center justify-center text-gray-300 transition-colors duration-300 hover:text-pinkish-200"
          whileHover={{ scale: 1.1 }}
        >
          <LinkedinIcon className={"w-10 h-10 fill-current"} />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
