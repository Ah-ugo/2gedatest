import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import LeftSider from "./LeftSider";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="p-4 bg-white fixed w-full z-10 top-0">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex align-middle items-center">
          <button onClick={toggle} className="flex justify-start p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2">
            <img src={require("../../utils/assets/images/Frame 247.png")} />
          </a>
        </div>
        {/* <ul className="items-stretch flex space-x-3 md:hidden">
          
        </ul> */}
        <div className="flex items-center align-middle gap-2">
          <button type="submit" class="">
            <CiSearch size={25} />
          </button>
          <div className="flex flex-col align-middle items-center">
            <img
              className="rounded-full"
              src={require("../../utils/assets/images/profile.jpeg")}
              style={{ width: "40px", height: "40px", flexShrink: 0 }}
            />
            <span
              style={{
                color: "rgba(0, 0, 0, 0.80)",
                fontFamily: "Ubuntu",
                fontSize: "9px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}>
              My Profile
            </span>
          </div>
        </div>
        {/* <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button> */}
      </div>
      <div
        className={`${
          isOpen
            ? "block absolute fixed z-1 top-full left-0 w-full md:hidden transition-all duration-300 ease-in-out transform translate-x-0 overflow-hidden"
            : "hidden"
        }`}>
        <LeftSider />
      </div>
    </header>
  );
}
