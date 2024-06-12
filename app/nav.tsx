'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";

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
      text: 'Blog',
      link: '/blog'
    }
  ]

export default function Nav() {
  const [mobile, setMobile] = useState(false);
  const hidden = !mobile ? " hidden" : "";

  return (
    <nav className="max-w-screen-x1 flex-wrap flex items-center justify-between mx-auto p-4 fixed w-full z-20 bg-blue-600">
      <Image
        src="/Happy_Negative_Galaxy.png"
        alt="Alex Tong"
        width={50}
        height={50}
        priority
      />
      <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setMobile(m => !m)} type="button" data-coll="navbar-default" aria-controls="navbar-default" aria-expanded="false">
        <MenuSvg />
      </button>
      <div className={"w-full md:block md:w-auto" + hidden}>
        <NavBar />
      </div>
    </nav>
  );
}

function NavBar() {
  const [curloc, setCurloc] = useState("");
  useEffect(() => {
    setCurloc(window.location.pathname);
  }, []);

  const liClass = `block py-5 px-3
          text-gray-900 rounded md:border-0 md:p-0
          dark:text-white`;
  const unselectedClass = ` hover:bg-blue-400 md:hover:bg-transparent md:hover:text-blue-700`;//md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
  const selectedClass = ` `;
  
  const parsed = [];
  for (let i = 0; i < links.length; i++) {
    const obj = links[i];
    parsed.push(curloc !== obj.link ? (
      <li key={i} className={liClass + unselectedClass}><a href={obj.link}>
        {obj.text}
      </a></li>
    ) : (
      <li key={i} className={liClass + unselectedClass + selectedClass}><a href={obj.link} onClick={(e) => { e.preventDefault() }}>
        {obj.text}
      </a></li>
    )
    )
  }
  return (
    <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 top-20 md:pr-8 max-md:pt-4">
      {parsed}
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
