import { Grid } from "@mui/material";
import React from "react";

export default function PreviewItem() {
  return (
    <div className="">
      <div
        className="flex justify-between items-center align-middle"
        style={{
          paddingLeft: 87,
          paddingRight: 87,
          paddingTop: 25,
          paddingBottom: 25,
        }}>
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
          <span className="text-violet-900 text-4xl font-medium font-['Ubuntu']">
            Preview item
          </span>
        </div>

        <div className="w-2" />
      </div>
      {/* line */}
      <div className="w-full h-px border border-black border-opacity-20" />

      <main style={{ marginTop: 36, marginRight: 85, marginLeft: 85 }}>
        <div className="h-screen">
          <img
            className="w-full h-full"
            src={require("../utils/assets/images/preview1.jpeg")}
            style={{ height: "33%", objectFit: "cover" }}
          />

          <div
            className="w-full h-44 relative bg-violet-900 rounded-lg"
            style={{ marginTop: 25 }}>
            <div className="left-[29px] top-[18px] absolute text-white text-opacity-80 text-xl font-medium font-['Ubuntu']">
              Automobile
            </div>
            <div className="left-[29px] top-[70px] absolute text-white text-3xl font-medium font-['Ubuntu']">
              Toyota camry 07
            </div>
            <div className="left-[29px] top-[128px] absolute text-white text-opacity-80 text-2xl font-normal font-['Ubuntu']">
              Sale location : Lagos NG
            </div>
            <div className="left-[869px] top-[21px] absolute text-white text-3xl font-medium font-['Ubuntu']">
              $4,250.00
            </div>
          </div>

          <div style={{ marginTop: 15 }}>
            <Grid container spacing={2}>
              <Grid item xs={1.33}>
                <img
                  src={require("../utils/assets/images/preview2.jpeg")}
                  style={{ height: "60%" }}
                  className="border border-neutral-100 border-opacity-20 w-full"
                />
              </Grid>
              <Grid item xs={1.33}>
                <img
                  src={require("../utils/assets/images/preview3.jpeg")}
                  style={{ height: "60%" }}
                  className="border border-neutral-100 border-opacity-20 w-full"
                />
              </Grid>
              <Grid item xs={1.33}>
                <img
                  src={require("../utils/assets/images/auto1.jpeg")}
                  style={{ height: "60%" }}
                  className="border border-neutral-100 border-opacity-20 w-full"
                />
              </Grid>
              <Grid item xs={1.33}>
                <img
                  src={require("../utils/assets/images/auto2.jpeg")}
                  style={{ height: "60%" }}
                  className="border border-neutral-100 border-opacity-20 w-full"
                />
              </Grid>
              <Grid item xs={1.33}>
                <img
                  src={require("../utils/assets/images/auto3.jpeg")}
                  style={{ height: "60%" }}
                  className="border border-neutral-100 border-opacity-20 w-full"
                />
              </Grid>
              <Grid item xs={1.33}>
                <img
                  src={require("../utils/assets/images/auto4.jpeg")}
                  style={{ height: "60%" }}
                  className="border border-neutral-100 border-opacity-20 w-full"
                />
              </Grid>
              <Grid item xs={1.33}>
                <img
                  src={require("../utils/assets/images/auto5.jpeg")}
                  style={{ height: "60%" }}
                  className="border border-neutral-100 border-opacity-20 w-full"
                />
              </Grid>
              <Grid item xs={1.33}>
                <img
                  src={require("../utils/assets/images/auto6.jpeg")}
                  style={{ height: "60%" }}
                  className="border border-neutral-100 border-opacity-20 w-full"
                />
              </Grid>
              <Grid item xs={1.33}>
                <img
                  src={require("../utils/assets/images/auto7.jpeg")}
                  style={{ height: "60%" }}
                  className="border border-neutral-100 border-opacity-20 w-full"
                />
              </Grid>
            </Grid>
          </div>
          {/* form */}
          <div className="flex flex-col" style={{ marginBottom: 87 }}>
            <div style={{ marginBottom: 15 }}>
              <span className="text-black text-3xl font-medium font-['Ubuntu']">
                Desciption
              </span>
            </div>

            <textarea
              className="w-full p-4 rounded-lg border border-neutral-100"
              rows={4}></textarea>
          </div>
          {/* button */}
          <div
            className="flex justify-center items-center align-middle"
            style={{ marginTop: 115, marginBottom: 115 }}>
            <button className="w-auto px-20 py-1.5 bg-violet-900 rounded justify-center items-center gap-2.5 inline-flex">
              <span className="text-center text-white text-sm font-normal font-['Ubuntu'] leading-7">
                Publish Item
              </span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
