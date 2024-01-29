import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <div style={{ height: "1.81%" }}>
      <header
        className="p-4 bg-white"
        style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)" }}>
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2">
            <img src={require("../../utils/assets/images/Frame 247.png")} />
          </a>
          <div className="items-stretch hidden space-x-3 md:flex">
            <div className="flex align-middle items-center">
              <div
                class="pt-2 relative mx-auto text-gray-600"
                style={{ marginRight: 71 }}>
                <input
                  class="border-2 border-gray-300 w-auto bg-white px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  style={{ width: "433px", height: "36px" }}
                  placeholder="Search Name, Place and Jobs"
                />
                <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                  <CiSearch />
                </button>
              </div>
            </div>
            <button className="flex justify-end p-4 md:hidden">
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
        </div>
      </header>
    </div>
  );
}
