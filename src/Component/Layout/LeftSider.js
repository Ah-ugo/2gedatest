import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

export default function LeftSider() {
  const [activeLink, setActiveLink] = useState("/"); // Initialize with the default active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div
      style={{ backgroundColor: "#4F0DA3", color: "white" }}
      className="h-full w-1/2 px-3 md-px-0 md:w-full">
      <main className="">
        {/* <div class="min-h-screen flex flex-row bg-gray-100"> */}
        <div class="flex flex-col w-full overflow-hidden h-screen">
          <ul
            class="flex flex-col py-4 mt-[20px] md:mt-[70.56px]"
            style={{ marginTop: "" }}>
            <li>
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                class={`${
                  activeLink === "/"
                    ? "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
                    : "flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
                }`}>
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill={"white"}>
                    <path
                      d="M19 26.5586V20.5586C19 20.2934 18.8946 20.039 18.7071 19.8515C18.5196 19.664 18.2652 19.5586 18 19.5586H14C13.7348 19.5586 13.4804 19.664 13.2929 19.8515C13.1054 20.039 13 20.2934 13 20.5586V26.5586C13 26.8238 12.8946 27.0782 12.7071 27.2657C12.5196 27.4533 12.2652 27.5586 12 27.5586H6C5.73478 27.5586 5.48043 27.4533 5.29289 27.2657C5.10536 27.0782 5 26.8238 5 26.5586V14.9961C5.00224 14.8577 5.03215 14.7212 5.08796 14.5945C5.14378 14.4679 5.22437 14.3537 5.325 14.2586L15.325 5.17112C15.5093 5.00247 15.7501 4.90894 16 4.90894C16.2499 4.90894 16.4907 5.00247 16.675 5.17112L26.675 14.2586C26.7756 14.3537 26.8562 14.4679 26.912 14.5945C26.9679 14.7212 26.9978 14.8577 27 14.9961V26.5586C27 26.8238 26.8946 27.0782 26.7071 27.2657C26.5196 27.4533 26.2652 27.5586 26 27.5586H20C19.7348 27.5586 19.4804 27.4533 19.2929 27.2657C19.1054 27.0782 19 26.8238 19 26.5586Z"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill={activeLink === "/" ? "white" : "none"}
                    />
                  </svg>
                </span>
                <span
                  class=""
                  style={
                    activeLink === "/"
                      ? {
                          color: "#FFF",

                          fontFamily: "Ubuntu",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: "500",
                        }
                      : {
                          color: "#FFF",

                          fontFamily: "Ubuntu",
                          fontSize: "16px",
                          fontStyle: "normal",
                          fontWeight: "300",
                        }
                  }>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleLinkClick("/detail")}
                to="/detail"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none">
                    <path
                      d="M16 23.0586C18.7614 23.0586 21 20.82 21 18.0586C21 15.2972 18.7614 13.0586 16 13.0586C13.2386 13.0586 11 15.2972 11 18.0586C11 20.82 13.2386 23.0586 16 23.0586Z"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill={activeLink === "/detail" ? "white" : "none"}
                    />
                    <path
                      d="M24.5 15.0586C25.6647 15.0567 26.8137 15.3269 27.8554 15.8478C28.8972 16.3686 29.8028 17.1257 30.5 18.0586"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill={activeLink === "/detail" ? "white" : "none"}
                    />
                    <path
                      d="M1.5 18.0586C2.19725 17.1257 3.10285 16.3686 4.14457 15.8478C5.1863 15.3269 6.33532 15.0567 7.5 15.0586"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill={activeLink === "/detail" ? "white" : "none"}
                    />
                    <path
                      d="M8.7998 27.5586C9.45833 26.2099 10.4824 25.0734 11.7554 24.2783C13.0283 23.4833 14.499 23.0618 15.9998 23.0618C17.5006 23.0618 18.9713 23.4833 20.2442 24.2783C21.5172 25.0734 22.5413 26.2099 23.1998 27.5586"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill={activeLink === "/detail" ? "white" : "none"}
                    />
                    <path
                      d="M7.50015 15.0586C6.74096 15.0594 5.99722 14.8441 5.35584 14.4378C4.71446 14.0316 4.20193 13.4513 3.87814 12.7646C3.55434 12.0779 3.43266 11.3132 3.5273 10.56C3.62194 9.80668 3.929 9.0959 4.4126 8.51065C4.89619 7.9254 5.53636 7.48987 6.25829 7.25493C6.98022 7.02 7.75411 6.99537 8.48952 7.18392C9.22493 7.37247 9.8915 7.76642 10.4113 8.31973C10.9312 8.87304 11.2828 9.56286 11.4252 10.3086"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill={activeLink === "/detail" ? "white" : "none"}
                    />
                    <path
                      d="M20.5752 10.3086C20.7175 9.56286 21.0692 8.87304 21.589 8.31973C22.1089 7.76642 22.7754 7.37247 23.5108 7.18392C24.2462 6.99537 25.0201 7.02 25.7421 7.25493C26.464 7.48987 27.1042 7.9254 27.5878 8.51065C28.0714 9.0959 28.3784 9.80668 28.4731 10.56C28.5677 11.3132 28.446 12.0779 28.1222 12.7646C27.7984 13.4513 27.2859 14.0316 26.6445 14.4378C26.0031 14.8441 25.2594 15.0594 24.5002 15.0586"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill={activeLink === "/detail" ? "white" : "none"}
                    />
                  </svg>
                </span>
                <span
                  class=""
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  Connect
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none">
                    <path
                      d="M6 18.0085V26.5585C6 26.8238 6.10536 27.0781 6.29289 27.2657C6.48043 27.4532 6.73478 27.5585 7 27.5585H25C25.2652 27.5585 25.5196 27.4532 25.7071 27.2657C25.8946 27.0781 26 26.8238 26 26.5585V18.0085"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.75 5.55859H25.25C25.4669 5.56038 25.6776 5.6318 25.8508 5.76232C26.0241 5.89285 26.1509 6.07558 26.2125 6.28359L28 12.5586H4L5.7875 6.28359C5.84909 6.07558 5.97587 5.89285 6.14916 5.76232C6.32244 5.6318 6.53306 5.56038 6.75 5.55859V5.55859Z"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 12.5586V14.5586C12 15.6195 11.5786 16.6369 10.8284 17.387C10.0783 18.1372 9.06087 18.5586 8 18.5586C6.93913 18.5586 5.92172 18.1372 5.17157 17.387C4.42143 16.6369 4 15.6195 4 14.5586V12.5586"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 12.5586V14.5586C20 15.6195 19.5786 16.6369 18.8284 17.387C18.0783 18.1372 17.0609 18.5586 16 18.5586C14.9391 18.5586 13.9217 18.1372 13.1716 17.387C12.4214 16.6369 12 15.6195 12 14.5586V12.5586"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28 12.5586V14.5586C28 15.6195 27.5786 16.6369 26.8284 17.387C26.0783 18.1372 25.0609 18.5586 24 18.5586C22.9391 18.5586 21.9217 18.1372 21.1716 17.387C20.4214 16.6369 20 15.6195 20 14.5586V12.5586"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span
                  class=""
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  Commerce
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none">
                    <g clip-path="url(#clip0_2_1461)">
                      <path
                        d="M8.016 8.99959H28V-9.66707C28 -10.3743 27.719 -11.0526 27.219 -11.5527C26.7189 -12.0528 26.0406 -12.3337 25.3333 -12.3337H8C6.392 -12.3337 4 -11.2684 4 -8.33374V10.3329C4 13.2676 6.392 14.3329 8 14.3329H28V11.6663H8.016C7.4 11.6503 6.66667 11.4063 6.66667 10.3329C6.66667 9.25959 7.4 9.01559 8.016 8.99959ZM10.6667 -7.00041H22.6667V-4.33374H10.6667V-7.00041Z"
                        fill="#C47EFB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_1461">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.558594)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  Business Directory
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 45"
                    fill="none">
                    <path
                      d="M18 14.5C18.8284 14.5 19.5 13.8284 19.5 13C19.5 12.1716 18.8284 11.5 18 11.5C17.1716 11.5 16.5 12.1716 16.5 13C16.5 13.8284 17.1716 14.5 18 14.5Z"
                      fill="#C47EFB"
                    />
                    <path
                      d="M12 14.5C12.8284 14.5 13.5 13.8284 13.5 13C13.5 12.1716 12.8284 11.5 12 11.5C11.1716 11.5 10.5 12.1716 10.5 13C10.5 13.8284 11.1716 14.5 12 14.5Z"
                      fill="#C47EFB"
                    />
                    <path
                      d="M24 14.5C24.8284 14.5 25.5 13.8284 25.5 13C25.5 12.1716 24.8284 11.5 24 11.5C23.1716 11.5 22.5 12.1716 22.5 13C22.5 13.8284 23.1716 14.5 24 14.5Z"
                      fill="#C47EFB"
                    />
                    <path
                      d="M7.67534 19.1251C6.18645 16.6131 5.66565 13.644 6.21072 10.7753C6.75579 7.90652 8.32925 5.33537 10.6357 3.5445C12.9421 1.75364 15.823 0.866233 18.7373 1.04888C21.6517 1.23152 24.3992 2.47165 26.464 4.53646C28.5288 6.60127 29.7689 9.34876 29.9516 12.2631C30.1342 15.1775 29.2468 18.0583 27.4559 20.3647C25.6651 22.6712 23.0939 24.2446 20.2252 24.7897C17.3564 25.3348 14.3873 24.814 11.8753 23.3251V23.3251L7.72534 24.5001C7.55531 24.5498 7.37503 24.5529 7.20341 24.509C7.03178 24.4651 6.87513 24.3758 6.74986 24.2506C6.6246 24.1253 6.53534 23.9686 6.49144 23.797C6.44753 23.6254 6.45061 23.4451 6.50034 23.2751L7.67534 19.1251Z"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  Chat
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none">
                    <path
                      d="M16 28.5586C22.6274 28.5586 28 23.186 28 16.5586C28 9.93118 22.6274 4.55859 16 4.55859C9.37258 4.55859 4 9.93118 4 16.5586C4 23.186 9.37258 28.5586 16 28.5586Z"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 20.5586C18.7614 20.5586 21 18.32 21 15.5586C21 12.7972 18.7614 10.5586 16 10.5586C13.2386 10.5586 11 12.7972 11 15.5586C11 18.32 13.2386 20.5586 16 20.5586Z"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.9751 25.4836C8.72749 24.0017 9.87555 22.757 11.292 21.8875C12.7085 21.0181 14.3381 20.5579 16.0001 20.5579C17.6621 20.5579 19.2917 21.0181 20.7082 21.8875C22.1246 22.757 23.2727 24.0017 24.0251 25.4836"
                      stroke="#C47EFB"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  Profile
                </span>
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <i class="bx bx-bell"></i>
                </span>
                <span class="text-sm font-medium">Notifications</span>
                <span class="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                  5
                </span>
              </a>
            </li> */}
            <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none">
                    <g clip-path="url(#clip0_2_1480)">
                      <mask
                        id="mask0_2_1480"
                        style={{ "mask-type": "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="4"
                        y="-14"
                        width="24"
                        height="29">
                        <path
                          d="M19.9993 4.99959C21.9993 4.99959 23.3327 6.25293 23.3327 7.66626H27.3327V-12.3337H23.3327C23.3327 -11.0004 21.9993 -9.66707 19.9993 -9.66707C17.9993 -9.66707 16.666 -11.0004 16.666 -12.3337H12.666V-3.00041"
                          stroke="white"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.9997 14.3323H15.9997C15.9997 12.9189 14.6663 11.6656 12.6663 11.6656C10.6663 11.6656 9.33301 12.9189 9.33301 14.3323H5.33301V-5.66772H9.33301C9.33301 -4.33439 10.6663 -3.00106 12.6663 -3.00106C14.6663 -3.00106 15.9997 -4.33439 15.9997 -5.66772H19.9997V14.3323Z"
                          fill="white"
                          stroke="white"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.33333 2.33293C10.0697 2.33293 10.6667 1.73597 10.6667 0.999593C10.6667 0.263213 10.0697 -0.33374 9.33333 -0.33374C8.59695 -0.33374 8 0.263213 8 0.999593C8 1.73597 8.59695 2.33293 9.33333 2.33293Z"
                          fill="black"
                        />
                        <path
                          d="M12.6663 2.33293C13.4027 2.33293 13.9997 1.73597 13.9997 0.999593C13.9997 0.263213 13.4027 -0.33374 12.6663 -0.33374C11.93 -0.33374 11.333 0.263213 11.333 0.999593C11.333 1.73597 11.93 2.33293 12.6663 2.33293Z"
                          fill="black"
                        />
                        <path
                          d="M15.9993 2.33293C16.7357 2.33293 17.3327 1.73597 17.3327 0.999593C17.3327 0.263213 16.7357 -0.33374 15.9993 -0.33374C15.263 -0.33374 14.666 0.263213 14.666 0.999593C14.666 1.73597 15.263 2.33293 15.9993 2.33293Z"
                          fill="black"
                        />
                      </mask>
                      <g mask="url(#mask0_2_1480)">
                        <path
                          d="M0 -14.9998H32V17.0002H0V-14.9998Z"
                          fill="#C47EFB"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_1480">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.558594)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  Tickets
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none">
                    <g clip-path="url(#clip0_2_1492)">
                      <path
                        d="M12.667 5.66667L22.0003 -0.333333L12.667 -6.33333V5.66667ZM10.667 13V10.3333H2.66699V-11H29.3337V10.3333H21.3337V13H10.667Z"
                        fill="#C47EFB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_1492">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.558594)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  Live
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none">
                    <g clip-path="url(#clip0_2_1496)">
                      <path
                        d="M8 13C10.2091 13 12 11.2091 12 9C12 6.79086 10.2091 5 8 5C5.79086 5 4 6.79086 4 9C4 11.2091 5.79086 13 8 13Z"
                        fill="#C47EFB"
                        stroke="#C47EFB"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24 11.666C26.2091 11.666 28 9.87515 28 7.66602C28 5.45688 26.2091 3.66602 24 3.66602C21.7909 3.66602 20 5.45688 20 7.66602C20 9.87515 21.7909 11.666 24 11.666Z"
                        fill="#C47EFB"
                        stroke="#C47EFB"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 9V-1.66667M12 -1.66667V-7L28 -11V-5.66667M12 -1.66667L28 -5.66667M28 7.66667V-5.66667"
                        stroke="#C47EFB"
                        stroke-width="2.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_1496">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.558594)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  Stereo
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none">
                    <g clip-path="url(#clip0_2_1504)">
                      <path
                        d="M27 -6.99944H18.4137L22.7075 -11.2919C22.8951 -11.4796 23.0006 -11.7341 23.0006 -11.9994C23.0006 -12.2648 22.8951 -12.5193 22.7075 -12.7069C22.5199 -12.8946 22.2654 -13 22 -13C21.7346 -13 21.4801 -12.8946 21.2925 -12.7069L16 -7.41319L10.7075 -12.7069C10.6146 -12.7999 10.5043 -12.8736 10.3829 -12.9238C10.2615 -12.9741 10.1314 -13 10 -13C9.86861 -13 9.7385 -12.9741 9.6171 -12.9238C9.49571 -12.8736 9.38541 -12.7999 9.2925 -12.7069C9.10486 -12.5193 8.99944 -12.2648 8.99944 -11.9994C8.99944 -11.7341 9.10486 -11.4796 9.2925 -11.2919L13.5863 -6.99944H5C4.46957 -6.99944 3.96086 -6.78873 3.58579 -6.41366C3.21071 -6.03858 3 -5.52988 3 -4.99944V10.0006C3 10.531 3.21071 11.0397 3.58579 11.4148C3.96086 11.7898 4.46957 12.0006 5 12.0006H27C27.5304 12.0006 28.0391 11.7898 28.4142 11.4148C28.7893 11.0397 29 10.531 29 10.0006V-4.99944C29 -5.52988 28.7893 -6.03858 28.4142 -6.41366C28.0391 -6.78873 27.5304 -6.99944 27 -6.99944ZM27 10.0006H20V-4.99944H27V10.0006ZM25 -0.499444C25 -0.202772 24.912 0.0872374 24.7472 0.333911C24.5824 0.580585 24.3481 0.772844 24.074 0.886375C23.7999 0.999907 23.4983 1.02961 23.2074 0.971734C22.9164 0.913857 22.6491 0.770995 22.4393 0.561216C22.2296 0.351438 22.0867 0.0841637 22.0288 -0.206808C21.9709 -0.49778 22.0007 -0.79938 22.1142 -1.07347C22.2277 -1.34756 22.42 -1.58183 22.6666 -1.74665C22.9133 -1.91147 23.2033 -1.99944 23.5 -1.99944C23.8978 -1.99944 24.2794 -1.84141 24.5607 -1.5601C24.842 -1.2788 25 -0.897268 25 -0.499444ZM25 5.50056C25 5.79723 24.912 6.08724 24.7472 6.33391C24.5824 6.58059 24.3481 6.77284 24.074 6.88638C23.7999 6.99991 23.4983 7.02961 23.2074 6.97174C22.9164 6.91386 22.6491 6.77099 22.4393 6.56122C22.2296 6.35144 22.0867 6.08416 22.0288 5.79319C21.9709 5.50222 22.0007 5.20062 22.1142 4.92653C22.2277 4.65244 22.42 4.41817 22.6666 4.25335C22.9133 4.08853 23.2033 4.00056 23.5 4.00056C23.8978 4.00056 24.2794 4.15859 24.5607 4.4399C24.842 4.7212 25 5.10273 25 5.50056Z"
                        fill="#C47EFB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_1504">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.558594)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  TV
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 27"
                    fill="none">
                    <g clip-path="url(#clip0_2_1508)">
                      <path
                        d="M30.4 0.99961H27.2V4.19961H28.32C28.585 4.19961 28.8 4.37961 28.8 4.59961V5.39961C28.8 5.61961 28.585 5.79961 28.32 5.79961H3.68C3.415 5.79961 3.2 5.61961 3.2 5.39961V4.59961C3.2 4.37961 3.415 4.19961 3.68 4.19961H4.8V0.99961H1.6C0.715 0.99961 0 1.71461 0 2.59961V7.39961C0 8.28461 0.715 8.99961 1.6 8.99961H30.4C31.285 8.99961 32 8.28461 32 7.39961V2.59961C32 1.71461 31.285 0.99961 30.4 0.99961ZM25.6 4.19961V-11.7854C25.6 -12.6804 24.875 -13.4004 23.985 -13.4004H8.02C7.125 -13.4004 6.4 -12.6754 6.4 -11.7854V4.19961H25.6ZM10.56 -4.90039L11.835 -6.16539C12.045 -6.37539 12.385 -6.37539 12.595 -6.16039L14.66 -4.08039L19.42 -8.80039C19.63 -9.01039 19.97 -9.01039 20.18 -8.79539L21.445 -7.52039C21.655 -7.31039 21.655 -6.97039 21.44 -6.76039L15.025 -0.400391C14.815 -0.190391 14.475 -0.190391 14.265 -0.405391L10.56 -4.14039C10.345 -4.35039 10.35 -4.69039 10.56 -4.90039Z"
                        fill="#C47EFB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_1508">
                        <rect
                          width="32"
                          height="25.6"
                          fill="white"
                          transform="translate(0 0.558594)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  Voting
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 32 33"
                    fill="none">
                    <g clip-path="url(#clip0_2_1512)">
                      <path
                        d="M2 -9.74475C3.77 -10.4848 6.308 -11.2828 8.776 -11.5308C11.436 -11.7988 13.692 -11.4048 15 -10.0268V9.46525C13.13 8.40525 10.76 8.25925 8.574 8.47925C6.214 8.71925 3.834 9.40125 2 10.1012V-9.74475ZM17 -10.0268C18.308 -11.4048 20.564 -11.7988 23.224 -11.5308C25.692 -11.2828 28.23 -10.4848 30 -9.74475V10.1012C28.164 9.40125 25.786 8.71725 23.426 8.48125C21.238 8.25925 18.87 8.40325 17 9.46525V-10.0268ZM16 -11.8348C14.03 -13.5288 11.174 -13.7808 8.574 -13.5208C5.546 -13.2148 2.49 -12.1768 0.586 -11.3108C0.411298 -11.2313 0.263151 -11.1032 0.159242 -10.9419C0.0553334 -10.7805 5.31428e-05 -10.5927 0 -10.4008L0 11.5992C4.6324e-05 11.7666 0.0420743 11.9312 0.122234 12.0781C0.202394 12.2249 0.318123 12.3493 0.458822 12.4399C0.59952 12.5304 0.760689 12.5842 0.927567 12.5963C1.09444 12.6085 1.2617 12.5785 1.414 12.5092C3.178 11.7092 6.02 10.7472 8.774 10.4692C11.592 10.1852 13.954 10.6432 15.22 12.2232C15.3137 12.34 15.4324 12.4343 15.5674 12.4991C15.7024 12.5638 15.8503 12.5975 16 12.5975C16.1497 12.5975 16.2976 12.5638 16.4326 12.4991C16.5676 12.4343 16.6863 12.34 16.78 12.2232C18.046 10.6432 20.408 10.1852 23.224 10.4692C25.98 10.7472 28.824 11.7092 30.586 12.5092C30.7383 12.5785 30.9056 12.6085 31.0724 12.5963C31.2393 12.5842 31.4005 12.5304 31.5412 12.4399C31.6819 12.3493 31.7976 12.2249 31.8778 12.0781C31.9579 11.9312 32 11.7666 32 11.5992V-10.4008C31.9999 -10.5927 31.9447 -10.7805 31.8408 -10.9419C31.7368 -11.1032 31.5887 -11.2313 31.414 -11.3108C29.51 -12.1768 26.454 -13.2148 23.426 -13.5208C20.826 -13.7828 17.97 -13.5288 16 -11.8348Z"
                        fill="#C47EFB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_1512">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.158569)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span
                  style={{
                    color: "#FFF",

                    fontFamily: "Ubuntu",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "300",
                  }}>
                  Education
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </main>
    </div>
  );
}
