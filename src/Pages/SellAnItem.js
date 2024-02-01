import React from "react";
import "../../src/sellItem.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SellAnItem() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <div
        className="flex justify-between items-center align-middle"
        style={
          matches
            ? {
                paddingLeft: 87,
                paddingRight: 87,
                paddingTop: 25,
                paddingBottom: 25,
              }
            : {
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 25,
                paddingBottom: 25,
              }
        }>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M5.25 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.25C5.05109 12.75 4.86032 12.671 4.71967 12.5303C4.57902 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25Z"
              fill="black"
            />
            <path
              d="M5.56038 12L11.7809 18.219C11.9217 18.3598 12.0008 18.5508 12.0008 18.75C12.0008 18.9491 11.9217 19.1401 11.7809 19.281C11.64 19.4218 11.449 19.5009 11.2499 19.5009C11.0507 19.5009 10.8597 19.4218 10.7189 19.281L3.96888 12.531C3.89903 12.4613 3.84362 12.3785 3.80581 12.2874C3.768 12.1963 3.74854 12.0986 3.74854 12C3.74854 11.9013 3.768 11.8036 3.80581 11.7125C3.84362 11.6214 3.89903 11.5386 3.96888 11.469L10.7189 4.71897C10.8597 4.57814 11.0507 4.49902 11.2499 4.49902C11.449 4.49902 11.64 4.57814 11.7809 4.71897C11.9217 4.8598 12.0008 5.05081 12.0008 5.24997C12.0008 5.44913 11.9217 5.64014 11.7809 5.78097L5.56038 12Z"
              fill="black"
            />
          </svg>
        </div>

        <div>
          <span
            className={`text-violet-900 ${
              matches ? "text-4xl" : "text-2xl"
            } font-medium font-['Ubuntu']`}>
            Sell an item
          </span>
        </div>

        <div className="w-2" />
      </div>
      {/* line */}
      <div className="w-full h-px border border-black border-opacity-20" />

      {/* main container */}
      <main
        style={
          matches
            ? { marginTop: 36, marginRight: 85, marginLeft: 85 }
            : { marginTop: 36, marginRight: 20, marginLeft: 20 }
        }>
        <span
          className={`text-black ${
            matches ? "text-2xl" : "text-lg"
          } font-medium font-['Ubuntu']`}>
          Sell any item in 3 simple steps
        </span>
        {/* form */}
        <div style={{ marginTop: 26 }}>
          <input
            type="text"
            placeholder="Set product category"
            placeholderTextColor="#000"
            style={
              matches
                ? {
                    paddingTop: 26,
                    paddingBottom: 26,

                    marginBottom: 26,
                  }
                : {
                    paddingTop: 10,
                    paddingBottom: 10,

                    marginBottom: 26,
                  }
            }
            className={`w-full pl-6 text-black text-opacity-80 ${
              matches ? "text-2xl" : "text-lg"
            } font-normal font-['Ubuntu']  rounded-lg border border-neutral-100 justify-start items-center inline-flex`}
          />

          <textarea
            style={{ marginBottom: 26 }}
            placeholder="Product title"
            rows={matches ? 4 : 2}
            className={`w-full pl-6 pt-6 rounded-lg border border-neutral-100 justify-start items-center inline-flex text-black text-opacity-80 ${
              matches ? "text-2xl" : "text-lg"
            } font-normal font-['Ubuntu']`}></textarea>

          <textarea
            style={{ marginBottom: 26 }}
            placeholder="Description"
            rows={matches ? 6 : 3}
            className={`w-full pl-6 pt-6 rounded-lg border border-neutral-100 justify-start items-center inline-flex text-black text-opacity-80 ${
              matches ? "text-2xl" : "text-lg"
            } font-normal font-['Ubuntu']`}></textarea>

          <input
            type="text"
            placeholder="Set sale location"
            style={
              matches
                ? {
                    paddingTop: 26,
                    paddingBottom: 26,

                    marginBottom: 26,
                  }
                : {
                    paddingTop: 10,
                    paddingBottom: 10,

                    marginBottom: 26,
                  }
            }
            className={`w-full pl-6 text-black text-opacity-80 ${
              matches ? "text-2xl" : "text-lg"
            } font-normal font-['Ubuntu']  rounded-lg border border-neutral-100 justify-start items-center inline-flex`}
          />
          <div style={{ marginBottom: 26 }}>
            <div
              className="w-full pl-6 rounded-lg border border-neutral-100 justify-start align-middle items-center inline-flex"
              style={
                matches
                  ? { paddingTop: 26, paddingBottom: 26 }
                  : { paddingTop: 10, paddingBottom: 10 }
              }>
              <div className="flex align-middle items-center justify-start gap-4">
                <span
                  className={`text-black text-opacity-80 ${
                    matches ? "text-2xl" : "text-lg"
                  } font-normal font-['Ubuntu']`}>
                  Item price
                </span>

                <select style={matches ? { padding: 7 } : { padding: 4 }}>
                  <option>$</option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="w-full p-5 bg-purple-500 justify-between items-center inline-flex"
            style={{ marginBottom: 24 }}>
            <div className="text-black text-xl font-normal font-['Ubuntu']">
              Read our pricing guidelines
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M8.40022 1.20001L6.72021 3.00001L15.6002 12L6.72021 21L8.40022 22.8L19.2002 12L8.40022 1.20001Z"
                fill="black"
              />
            </svg>
          </div>
          <div
            className="w-full p-5 bg-purple-500 justify-between items-center inline-flex"
            style={{ marginBottom: 24 }}>
            <div className="text-black text-xl font-normal font-['Ubuntu']">
              How to sell faster
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M8.40022 1.20001L6.72021 3.00001L15.6002 12L6.72021 21L8.40022 22.8L19.2002 12L8.40022 1.20001Z"
                fill="black"
              />
            </svg>
          </div>
        </div>

        {/* button */}
        <div
          className="flex justify-center items-center align-middle"
          style={{ marginTop: 115, marginBottom: 115 }}>
          <button className="w-auto px-20 py-1.5 bg-violet-900 rounded justify-center items-center gap-2.5 inline-flex">
            <span className="text-center text-white text-sm font-normal font-['Ubuntu'] leading-7">
              Move to step 2
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
