import React, { useState } from "react";
import { Link } from "react-router-dom";
import withHOC from "./hoc/hoc";
import { motion } from "framer-motion";

import { styles } from "../style";
import { navLinks } from "../data";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex 
        items-center py-5 fixed top-0 z-50
        bg-primary
        `}
    >
      <div
        className="
        w-full flex justify-between items-center
        max-w-7xl mx-auto
        "
      >
        <Link
          to=":/"
          className="flex items-center gap-2"
          onclick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="
            w-9 h-9 object-contain
          "
          />
          <p
            className="
            text-white text-[18px] font-bold cursor-pointer flex
            "
          >
            Yanhui &nbsp;
            <span className="sm:block hidden ">°Fullstack Developer</span>
          </p>
        </Link>
        <ul
          className="
          list-none hidden sm:flex flex-row gap-10
          "
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
                  hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          
          <motion.div
            className={`${!toggle ? "hidden" : "flex"}
            p-6 justify-space items-center bg-gradient-to-r from-yellow-800 absolute top-20 right-0 mx-4 my-2 min-w-[160px] h-[200px] z-10 rounded-xl`}
            initial={{
              x: toggle ? 500 : 1,
            }}
            animate={{
              x: toggle ? 1 : 500,
            }}
            transition={{
              type: "spring",
              durations: 0.5,
            }}
          >
            <ul
              className="
          list-none flex sm:hidden justify-end items-start flex-col gap-4 
          "
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }
                  hover:text-white font-medium text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

const HocNavbar = withHOC(Navbar, 30);

export default HocNavbar;
