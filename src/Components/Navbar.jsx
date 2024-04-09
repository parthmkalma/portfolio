import React from "react";

export default function Navbar() {
  return (
    <div className="hover:shadow-2xl transition duration-900 ease-in-out ">
      <nav className="navbar bg-white shadow-xl mb-[6px] ">
        <div className="flex items-center justify-between ">
          <div className="text-2xl font-bold ml-8 font-Montserrat ">
            Parth Kalma
          </div>
          {/* Navbar Links */}
          <ul className="navbar__lists flex justify-end space-x-6 pr-6 font-Kanit text-xl">
            <li>
              <a
                href="/"
                className="relative after:bg-indigo-600 after:absolute after:h-1   after:w-0 after:bottom-2 after:left-0 hover:after:w-[85px] after:transition-all after:duration-300 cursor-pointer  inline-block p-[20px]  text-black  "
              >
                Home
              </a>
            </li>
            <li className="navbar__list">
              <a
                href="#About"
                className="relative after:bg-indigo-600 after:absolute after:h-1 after:w-0 after:bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer  inline-block p-[20px]   text-black  "
              >
                About
              </a>
            </li>
            <li className="navbar__list">
              <a
                href="Projects"
                className="relative after:bg-indigo-600 after:absolute after:h-1 after:w-0 after:bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer  inline-block p-[20px]   text-black  "
              >
                Projects
              </a>
            </li>
            <li className="navbar__list">
              <a
                href="#Contact"
                className="relative after:bg-indigo-600 after:absolute after:h-1 after:w-0 after:bottom-2 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer  inline-block p-[20px]   text-black  "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
