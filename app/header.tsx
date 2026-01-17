'use client'

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: "Projects",
    link: '/projects'
  },
  {
    text: 'About Me',
    link: '/about'
  },
  {
    text: 'Split The Bill',
    link: "/split-the-bill"
  },
  {
    text: 'Blog',
    link: '/blog'
  }
]

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const hidden = !mobile ? " hidden" : "";
  const [logorot, setlogorot] = useState(0);

  return (
    <AnimatePresence>
    <nav className="max-w-screen-x1 flex-wrap flex items-center justify-between mx-auto p-4 fixed w-full z-50 bg-blue-900">
      <motion.div whileHover={{ scale: 1.2 }} animate={{ rotate: logorot }} onClick={() => { setlogorot(logorot + 90) }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Image
          src="/favicon.png"
          alt="atch2203"
          width={50}
          height={50}
          priority
        />
      </motion.div>
      <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setMobile(m => !m)} type="button" data-coll="navbar-default" aria-controls="navbar-default" aria-expanded="false">
        <MenuSvg />
      </button>
      <div className={"w-full md:block md:w-auto" + hidden}>
        <NavBar />
      </div>
    </nav></AnimatePresence>
  );
}

function NavBar() {
  const path = usePathname();

  const liClass = `block py-5 px-3
          text-gray-900 rounded md:border-0 md:p-0
          dark:text-white hover:bg-blue-400 md:hover:bg-transparent md:hover:text-gray-400 `;//md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
  const onpage = ` max-md:bg-blue-500`;

  return (
    <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 top-20 md:pr-8 max-md:pt-4">
      {links.map((obj, i) => <Link key={i} href={obj.link} className="relative"><li key={i} className={liClass + (obj.link === path && (onpage))}>
        {obj.link === path && (
            <motion.span
              initial={{scaleX:0}}
              animate={{scaleX:1}}
              exit={{scaleX:0}}
              className="absolute top-full block h-[2px] w-full bg-black max-md:hidden" />
        )}

        {obj.text}
      </li></Link>)}
    </ul>
  );
}

function MenuSvg() {
  return (
    <>
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </>
  );
}
