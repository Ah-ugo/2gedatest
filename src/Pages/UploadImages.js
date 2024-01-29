import { Grid } from "@mui/material";
import React from "react";

export default function UploadImages() {
  return (
    <div>
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
            Upload images
          </span>
        </div>

        <div className="w-2" />
      </div>
      {/* line */}
      <div className="w-full h-px border border-black border-opacity-20" />

      {/* main content */}
      <main style={{ marginTop: 36, marginRight: 85, marginLeft: 85 }}>
        <div className="flex flex-col" style={{ marginBottom: 45 }}>
          <span className="text-black text-2xl font-medium font-['Ubuntu']">
            You can add up to 10 images
          </span>
          <span className="text-black text-opacity-80 text-2xl font-normal font-['Ubuntu']">
            The first image is the cover image
          </span>
        </div>
        <div style={{ marginBottom: 90 }}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <div className="w-full h-72 bg-neutral-100 border border-neutral-100 border-opacity-20 justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V20.4463L23.5662 16.7625C23.4037 16.6 23.2108 16.4711 22.9985 16.3831C22.7862 16.2951 22.5586 16.2499 22.3288 16.2499C22.0989 16.2499 21.8713 16.2951 21.659 16.3831C21.4467 16.4711 21.2538 16.6 21.0912 16.7625L18.4137 19.44L12.7375 13.7625C12.575 13.6 12.3821 13.4711 12.1697 13.3831C11.9574 13.2951 11.7298 13.2499 11.5 13.2499C11.2702 13.2499 11.0426 13.2951 10.8303 13.3831C10.6179 13.4711 10.425 13.6 10.2625 13.7625L4.75 19.275V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75ZM4.75 25V21.3962L11.3225 14.8237C11.3457 14.8003 11.3734 14.7817 11.4039 14.769C11.4343 14.7563 11.467 14.7498 11.5 14.7498C11.533 14.7498 11.5657 14.7563 11.5961 14.769C11.6266 14.7817 11.6543 14.8003 11.6775 14.8237L22.1038 25.25H5C4.9337 25.25 4.87011 25.2237 4.82322 25.1768C4.77634 25.1299 4.75 25.0663 4.75 25ZM27 25.25H24.225L19.475 20.5L22.1513 17.8225C22.1745 17.7993 22.202 17.7808 22.2324 17.7682C22.2627 17.7557 22.2953 17.7492 22.3281 17.7492C22.361 17.7492 22.3935 17.7557 22.4239 17.7682C22.4542 17.7808 22.4818 17.7993 22.505 17.8225L27.255 22.5725V25C27.255 25.0333 27.2484 25.0662 27.2355 25.0968C27.2226 25.1275 27.2038 25.1553 27.18 25.1786C27.1563 25.2018 27.1281 25.2202 27.0972 25.2324C27.0663 25.2447 27.0332 25.2507 27 25.25ZM18.25 12.5C18.25 12.2528 18.3233 12.0111 18.4607 11.8055C18.598 11.6 18.7932 11.4398 19.0216 11.3452C19.2501 11.2505 19.5014 11.2258 19.7439 11.274C19.9863 11.3222 20.2091 11.4413 20.3839 11.6161C20.5587 11.7909 20.6777 12.0137 20.726 12.2561C20.7742 12.4986 20.7495 12.7499 20.6549 12.9784C20.5602 13.2068 20.4 13.402 20.1945 13.5393C19.9889 13.6767 19.7472 13.75 19.5 13.75C19.1685 13.75 18.8505 13.6183 18.6161 13.3839C18.3817 13.1495 18.25 12.8315 18.25 12.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="w-full h-72 bg-neutral-100 border border-neutral-100 border-opacity-20 justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V20.4463L23.5662 16.7625C23.4037 16.6 23.2108 16.4711 22.9985 16.3831C22.7862 16.2951 22.5586 16.2499 22.3288 16.2499C22.0989 16.2499 21.8713 16.2951 21.659 16.3831C21.4467 16.4711 21.2538 16.6 21.0912 16.7625L18.4137 19.44L12.7375 13.7625C12.575 13.6 12.3821 13.4711 12.1697 13.3831C11.9574 13.2951 11.7298 13.2499 11.5 13.2499C11.2702 13.2499 11.0426 13.2951 10.8303 13.3831C10.6179 13.4711 10.425 13.6 10.2625 13.7625L4.75 19.275V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75ZM4.75 25V21.3962L11.3225 14.8237C11.3457 14.8003 11.3734 14.7817 11.4039 14.769C11.4343 14.7563 11.467 14.7498 11.5 14.7498C11.533 14.7498 11.5657 14.7563 11.5961 14.769C11.6266 14.7817 11.6543 14.8003 11.6775 14.8237L22.1038 25.25H5C4.9337 25.25 4.87011 25.2237 4.82322 25.1768C4.77634 25.1299 4.75 25.0663 4.75 25ZM27 25.25H24.225L19.475 20.5L22.1513 17.8225C22.1745 17.7993 22.202 17.7808 22.2324 17.7682C22.2627 17.7557 22.2953 17.7492 22.3281 17.7492C22.361 17.7492 22.3935 17.7557 22.4239 17.7682C22.4542 17.7808 22.4818 17.7993 22.505 17.8225L27.255 22.5725V25C27.255 25.0333 27.2484 25.0662 27.2355 25.0968C27.2226 25.1275 27.2038 25.1553 27.18 25.1786C27.1563 25.2018 27.1281 25.2202 27.0972 25.2324C27.0663 25.2447 27.0332 25.2507 27 25.25ZM18.25 12.5C18.25 12.2528 18.3233 12.0111 18.4607 11.8055C18.598 11.6 18.7932 11.4398 19.0216 11.3452C19.2501 11.2505 19.5014 11.2258 19.7439 11.274C19.9863 11.3222 20.2091 11.4413 20.3839 11.6161C20.5587 11.7909 20.6777 12.0137 20.726 12.2561C20.7742 12.4986 20.7495 12.7499 20.6549 12.9784C20.5602 13.2068 20.4 13.402 20.1945 13.5393C19.9889 13.6767 19.7472 13.75 19.5 13.75C19.1685 13.75 18.8505 13.6183 18.6161 13.3839C18.3817 13.1495 18.25 12.8315 18.25 12.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="w-full h-40 bg-neutral-100 border border-neutral-100 border-opacity-20 justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V20.4463L23.5662 16.7625C23.4037 16.6 23.2108 16.4711 22.9985 16.3831C22.7862 16.2951 22.5586 16.2499 22.3288 16.2499C22.0989 16.2499 21.8713 16.2951 21.659 16.3831C21.4467 16.4711 21.2538 16.6 21.0912 16.7625L18.4137 19.44L12.7375 13.7625C12.575 13.6 12.3821 13.4711 12.1697 13.3831C11.9574 13.2951 11.7298 13.2499 11.5 13.2499C11.2702 13.2499 11.0426 13.2951 10.8303 13.3831C10.6179 13.4711 10.425 13.6 10.2625 13.7625L4.75 19.275V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75ZM4.75 25V21.3962L11.3225 14.8237C11.3457 14.8003 11.3734 14.7817 11.4039 14.769C11.4343 14.7563 11.467 14.7498 11.5 14.7498C11.533 14.7498 11.5657 14.7563 11.5961 14.769C11.6266 14.7817 11.6543 14.8003 11.6775 14.8237L22.1038 25.25H5C4.9337 25.25 4.87011 25.2237 4.82322 25.1768C4.77634 25.1299 4.75 25.0663 4.75 25ZM27 25.25H24.225L19.475 20.5L22.1513 17.8225C22.1745 17.7993 22.202 17.7808 22.2324 17.7682C22.2627 17.7557 22.2953 17.7492 22.3281 17.7492C22.361 17.7492 22.3935 17.7557 22.4239 17.7682C22.4542 17.7808 22.4818 17.7993 22.505 17.8225L27.255 22.5725V25C27.255 25.0333 27.2484 25.0662 27.2355 25.0968C27.2226 25.1275 27.2038 25.1553 27.18 25.1786C27.1563 25.2018 27.1281 25.2202 27.0972 25.2324C27.0663 25.2447 27.0332 25.2507 27 25.25ZM18.25 12.5C18.25 12.2528 18.3233 12.0111 18.4607 11.8055C18.598 11.6 18.7932 11.4398 19.0216 11.3452C19.2501 11.2505 19.5014 11.2258 19.7439 11.274C19.9863 11.3222 20.2091 11.4413 20.3839 11.6161C20.5587 11.7909 20.6777 12.0137 20.726 12.2561C20.7742 12.4986 20.7495 12.7499 20.6549 12.9784C20.5602 13.2068 20.4 13.402 20.1945 13.5393C19.9889 13.6767 19.7472 13.75 19.5 13.75C19.1685 13.75 18.8505 13.6183 18.6161 13.3839C18.3817 13.1495 18.25 12.8315 18.25 12.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="w-full h-40 bg-neutral-100 border border-neutral-100 border-opacity-20 justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V20.4463L23.5662 16.7625C23.4037 16.6 23.2108 16.4711 22.9985 16.3831C22.7862 16.2951 22.5586 16.2499 22.3288 16.2499C22.0989 16.2499 21.8713 16.2951 21.659 16.3831C21.4467 16.4711 21.2538 16.6 21.0912 16.7625L18.4137 19.44L12.7375 13.7625C12.575 13.6 12.3821 13.4711 12.1697 13.3831C11.9574 13.2951 11.7298 13.2499 11.5 13.2499C11.2702 13.2499 11.0426 13.2951 10.8303 13.3831C10.6179 13.4711 10.425 13.6 10.2625 13.7625L4.75 19.275V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75ZM4.75 25V21.3962L11.3225 14.8237C11.3457 14.8003 11.3734 14.7817 11.4039 14.769C11.4343 14.7563 11.467 14.7498 11.5 14.7498C11.533 14.7498 11.5657 14.7563 11.5961 14.769C11.6266 14.7817 11.6543 14.8003 11.6775 14.8237L22.1038 25.25H5C4.9337 25.25 4.87011 25.2237 4.82322 25.1768C4.77634 25.1299 4.75 25.0663 4.75 25ZM27 25.25H24.225L19.475 20.5L22.1513 17.8225C22.1745 17.7993 22.202 17.7808 22.2324 17.7682C22.2627 17.7557 22.2953 17.7492 22.3281 17.7492C22.361 17.7492 22.3935 17.7557 22.4239 17.7682C22.4542 17.7808 22.4818 17.7993 22.505 17.8225L27.255 22.5725V25C27.255 25.0333 27.2484 25.0662 27.2355 25.0968C27.2226 25.1275 27.2038 25.1553 27.18 25.1786C27.1563 25.2018 27.1281 25.2202 27.0972 25.2324C27.0663 25.2447 27.0332 25.2507 27 25.25ZM18.25 12.5C18.25 12.2528 18.3233 12.0111 18.4607 11.8055C18.598 11.6 18.7932 11.4398 19.0216 11.3452C19.2501 11.2505 19.5014 11.2258 19.7439 11.274C19.9863 11.3222 20.2091 11.4413 20.3839 11.6161C20.5587 11.7909 20.6777 12.0137 20.726 12.2561C20.7742 12.4986 20.7495 12.7499 20.6549 12.9784C20.5602 13.2068 20.4 13.402 20.1945 13.5393C19.9889 13.6767 19.7472 13.75 19.5 13.75C19.1685 13.75 18.8505 13.6183 18.6161 13.3839C18.3817 13.1495 18.25 12.8315 18.25 12.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="w-full h-40 bg-neutral-100 border border-neutral-100 border-opacity-20 justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V20.4463L23.5662 16.7625C23.4037 16.6 23.2108 16.4711 22.9985 16.3831C22.7862 16.2951 22.5586 16.2499 22.3288 16.2499C22.0989 16.2499 21.8713 16.2951 21.659 16.3831C21.4467 16.4711 21.2538 16.6 21.0912 16.7625L18.4137 19.44L12.7375 13.7625C12.575 13.6 12.3821 13.4711 12.1697 13.3831C11.9574 13.2951 11.7298 13.2499 11.5 13.2499C11.2702 13.2499 11.0426 13.2951 10.8303 13.3831C10.6179 13.4711 10.425 13.6 10.2625 13.7625L4.75 19.275V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75ZM4.75 25V21.3962L11.3225 14.8237C11.3457 14.8003 11.3734 14.7817 11.4039 14.769C11.4343 14.7563 11.467 14.7498 11.5 14.7498C11.533 14.7498 11.5657 14.7563 11.5961 14.769C11.6266 14.7817 11.6543 14.8003 11.6775 14.8237L22.1038 25.25H5C4.9337 25.25 4.87011 25.2237 4.82322 25.1768C4.77634 25.1299 4.75 25.0663 4.75 25ZM27 25.25H24.225L19.475 20.5L22.1513 17.8225C22.1745 17.7993 22.202 17.7808 22.2324 17.7682C22.2627 17.7557 22.2953 17.7492 22.3281 17.7492C22.361 17.7492 22.3935 17.7557 22.4239 17.7682C22.4542 17.7808 22.4818 17.7993 22.505 17.8225L27.255 22.5725V25C27.255 25.0333 27.2484 25.0662 27.2355 25.0968C27.2226 25.1275 27.2038 25.1553 27.18 25.1786C27.1563 25.2018 27.1281 25.2202 27.0972 25.2324C27.0663 25.2447 27.0332 25.2507 27 25.25ZM18.25 12.5C18.25 12.2528 18.3233 12.0111 18.4607 11.8055C18.598 11.6 18.7932 11.4398 19.0216 11.3452C19.2501 11.2505 19.5014 11.2258 19.7439 11.274C19.9863 11.3222 20.2091 11.4413 20.3839 11.6161C20.5587 11.7909 20.6777 12.0137 20.726 12.2561C20.7742 12.4986 20.7495 12.7499 20.6549 12.9784C20.5602 13.2068 20.4 13.402 20.1945 13.5393C19.9889 13.6767 19.7472 13.75 19.5 13.75C19.1685 13.75 18.8505 13.6183 18.6161 13.3839C18.3817 13.1495 18.25 12.8315 18.25 12.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="w-full h-40 bg-neutral-100 border border-neutral-100 border-opacity-20 justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V20.4463L23.5662 16.7625C23.4037 16.6 23.2108 16.4711 22.9985 16.3831C22.7862 16.2951 22.5586 16.2499 22.3288 16.2499C22.0989 16.2499 21.8713 16.2951 21.659 16.3831C21.4467 16.4711 21.2538 16.6 21.0912 16.7625L18.4137 19.44L12.7375 13.7625C12.575 13.6 12.3821 13.4711 12.1697 13.3831C11.9574 13.2951 11.7298 13.2499 11.5 13.2499C11.2702 13.2499 11.0426 13.2951 10.8303 13.3831C10.6179 13.4711 10.425 13.6 10.2625 13.7625L4.75 19.275V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75ZM4.75 25V21.3962L11.3225 14.8237C11.3457 14.8003 11.3734 14.7817 11.4039 14.769C11.4343 14.7563 11.467 14.7498 11.5 14.7498C11.533 14.7498 11.5657 14.7563 11.5961 14.769C11.6266 14.7817 11.6543 14.8003 11.6775 14.8237L22.1038 25.25H5C4.9337 25.25 4.87011 25.2237 4.82322 25.1768C4.77634 25.1299 4.75 25.0663 4.75 25ZM27 25.25H24.225L19.475 20.5L22.1513 17.8225C22.1745 17.7993 22.202 17.7808 22.2324 17.7682C22.2627 17.7557 22.2953 17.7492 22.3281 17.7492C22.361 17.7492 22.3935 17.7557 22.4239 17.7682C22.4542 17.7808 22.4818 17.7993 22.505 17.8225L27.255 22.5725V25C27.255 25.0333 27.2484 25.0662 27.2355 25.0968C27.2226 25.1275 27.2038 25.1553 27.18 25.1786C27.1563 25.2018 27.1281 25.2202 27.0972 25.2324C27.0663 25.2447 27.0332 25.2507 27 25.25ZM18.25 12.5C18.25 12.2528 18.3233 12.0111 18.4607 11.8055C18.598 11.6 18.7932 11.4398 19.0216 11.3452C19.2501 11.2505 19.5014 11.2258 19.7439 11.274C19.9863 11.3222 20.2091 11.4413 20.3839 11.6161C20.5587 11.7909 20.6777 12.0137 20.726 12.2561C20.7742 12.4986 20.7495 12.7499 20.6549 12.9784C20.5602 13.2068 20.4 13.402 20.1945 13.5393C19.9889 13.6767 19.7472 13.75 19.5 13.75C19.1685 13.75 18.8505 13.6183 18.6161 13.3839C18.3817 13.1495 18.25 12.8315 18.25 12.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="w-full h-40 bg-neutral-100 border border-neutral-100 border-opacity-20 justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V20.4463L23.5662 16.7625C23.4037 16.6 23.2108 16.4711 22.9985 16.3831C22.7862 16.2951 22.5586 16.2499 22.3288 16.2499C22.0989 16.2499 21.8713 16.2951 21.659 16.3831C21.4467 16.4711 21.2538 16.6 21.0912 16.7625L18.4137 19.44L12.7375 13.7625C12.575 13.6 12.3821 13.4711 12.1697 13.3831C11.9574 13.2951 11.7298 13.2499 11.5 13.2499C11.2702 13.2499 11.0426 13.2951 10.8303 13.3831C10.6179 13.4711 10.425 13.6 10.2625 13.7625L4.75 19.275V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75ZM4.75 25V21.3962L11.3225 14.8237C11.3457 14.8003 11.3734 14.7817 11.4039 14.769C11.4343 14.7563 11.467 14.7498 11.5 14.7498C11.533 14.7498 11.5657 14.7563 11.5961 14.769C11.6266 14.7817 11.6543 14.8003 11.6775 14.8237L22.1038 25.25H5C4.9337 25.25 4.87011 25.2237 4.82322 25.1768C4.77634 25.1299 4.75 25.0663 4.75 25ZM27 25.25H24.225L19.475 20.5L22.1513 17.8225C22.1745 17.7993 22.202 17.7808 22.2324 17.7682C22.2627 17.7557 22.2953 17.7492 22.3281 17.7492C22.361 17.7492 22.3935 17.7557 22.4239 17.7682C22.4542 17.7808 22.4818 17.7993 22.505 17.8225L27.255 22.5725V25C27.255 25.0333 27.2484 25.0662 27.2355 25.0968C27.2226 25.1275 27.2038 25.1553 27.18 25.1786C27.1563 25.2018 27.1281 25.2202 27.0972 25.2324C27.0663 25.2447 27.0332 25.2507 27 25.25ZM18.25 12.5C18.25 12.2528 18.3233 12.0111 18.4607 11.8055C18.598 11.6 18.7932 11.4398 19.0216 11.3452C19.2501 11.2505 19.5014 11.2258 19.7439 11.274C19.9863 11.3222 20.2091 11.4413 20.3839 11.6161C20.5587 11.7909 20.6777 12.0137 20.726 12.2561C20.7742 12.4986 20.7495 12.7499 20.6549 12.9784C20.5602 13.2068 20.4 13.402 20.1945 13.5393C19.9889 13.6767 19.7472 13.75 19.5 13.75C19.1685 13.75 18.8505 13.6183 18.6161 13.3839C18.3817 13.1495 18.25 12.8315 18.25 12.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="w-full h-40 bg-neutral-100 border border-neutral-100 border-opacity-20 justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V20.4463L23.5662 16.7625C23.4037 16.6 23.2108 16.4711 22.9985 16.3831C22.7862 16.2951 22.5586 16.2499 22.3288 16.2499C22.0989 16.2499 21.8713 16.2951 21.659 16.3831C21.4467 16.4711 21.2538 16.6 21.0912 16.7625L18.4137 19.44L12.7375 13.7625C12.575 13.6 12.3821 13.4711 12.1697 13.3831C11.9574 13.2951 11.7298 13.2499 11.5 13.2499C11.2702 13.2499 11.0426 13.2951 10.8303 13.3831C10.6179 13.4711 10.425 13.6 10.2625 13.7625L4.75 19.275V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75ZM4.75 25V21.3962L11.3225 14.8237C11.3457 14.8003 11.3734 14.7817 11.4039 14.769C11.4343 14.7563 11.467 14.7498 11.5 14.7498C11.533 14.7498 11.5657 14.7563 11.5961 14.769C11.6266 14.7817 11.6543 14.8003 11.6775 14.8237L22.1038 25.25H5C4.9337 25.25 4.87011 25.2237 4.82322 25.1768C4.77634 25.1299 4.75 25.0663 4.75 25ZM27 25.25H24.225L19.475 20.5L22.1513 17.8225C22.1745 17.7993 22.202 17.7808 22.2324 17.7682C22.2627 17.7557 22.2953 17.7492 22.3281 17.7492C22.361 17.7492 22.3935 17.7557 22.4239 17.7682C22.4542 17.7808 22.4818 17.7993 22.505 17.8225L27.255 22.5725V25C27.255 25.0333 27.2484 25.0662 27.2355 25.0968C27.2226 25.1275 27.2038 25.1553 27.18 25.1786C27.1563 25.2018 27.1281 25.2202 27.0972 25.2324C27.0663 25.2447 27.0332 25.2507 27 25.25ZM18.25 12.5C18.25 12.2528 18.3233 12.0111 18.4607 11.8055C18.598 11.6 18.7932 11.4398 19.0216 11.3452C19.2501 11.2505 19.5014 11.2258 19.7439 11.274C19.9863 11.3222 20.2091 11.4413 20.3839 11.6161C20.5587 11.7909 20.6777 12.0137 20.726 12.2561C20.7742 12.4986 20.7495 12.7499 20.6549 12.9784C20.5602 13.2068 20.4 13.402 20.1945 13.5393C19.9889 13.6767 19.7472 13.75 19.5 13.75C19.1685 13.75 18.8505 13.6183 18.6161 13.3839C18.3817 13.1495 18.25 12.8315 18.25 12.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="w-full h-40 bg-neutral-100 border border-neutral-100 border-opacity-20 justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V20.4463L23.5662 16.7625C23.4037 16.6 23.2108 16.4711 22.9985 16.3831C22.7862 16.2951 22.5586 16.2499 22.3288 16.2499C22.0989 16.2499 21.8713 16.2951 21.659 16.3831C21.4467 16.4711 21.2538 16.6 21.0912 16.7625L18.4137 19.44L12.7375 13.7625C12.575 13.6 12.3821 13.4711 12.1697 13.3831C11.9574 13.2951 11.7298 13.2499 11.5 13.2499C11.2702 13.2499 11.0426 13.2951 10.8303 13.3831C10.6179 13.4711 10.425 13.6 10.2625 13.7625L4.75 19.275V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75ZM4.75 25V21.3962L11.3225 14.8237C11.3457 14.8003 11.3734 14.7817 11.4039 14.769C11.4343 14.7563 11.467 14.7498 11.5 14.7498C11.533 14.7498 11.5657 14.7563 11.5961 14.769C11.6266 14.7817 11.6543 14.8003 11.6775 14.8237L22.1038 25.25H5C4.9337 25.25 4.87011 25.2237 4.82322 25.1768C4.77634 25.1299 4.75 25.0663 4.75 25ZM27 25.25H24.225L19.475 20.5L22.1513 17.8225C22.1745 17.7993 22.202 17.7808 22.2324 17.7682C22.2627 17.7557 22.2953 17.7492 22.3281 17.7492C22.361 17.7492 22.3935 17.7557 22.4239 17.7682C22.4542 17.7808 22.4818 17.7993 22.505 17.8225L27.255 22.5725V25C27.255 25.0333 27.2484 25.0662 27.2355 25.0968C27.2226 25.1275 27.2038 25.1553 27.18 25.1786C27.1563 25.2018 27.1281 25.2202 27.0972 25.2324C27.0663 25.2447 27.0332 25.2507 27 25.25ZM18.25 12.5C18.25 12.2528 18.3233 12.0111 18.4607 11.8055C18.598 11.6 18.7932 11.4398 19.0216 11.3452C19.2501 11.2505 19.5014 11.2258 19.7439 11.274C19.9863 11.3222 20.2091 11.4413 20.3839 11.6161C20.5587 11.7909 20.6777 12.0137 20.726 12.2561C20.7742 12.4986 20.7495 12.7499 20.6549 12.9784C20.5602 13.2068 20.4 13.402 20.1945 13.5393C19.9889 13.6767 19.7472 13.75 19.5 13.75C19.1685 13.75 18.8505 13.6183 18.6161 13.3839C18.3817 13.1495 18.25 12.8315 18.25 12.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="w-full h-40 bg-neutral-100 border border-neutral-100 border-opacity-20 justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none">
                  <path
                    d="M27 5.25H5C4.53587 5.25 4.09075 5.43437 3.76256 5.76256C3.43437 6.09075 3.25 6.53587 3.25 7V25C3.25 25.4641 3.43437 25.9092 3.76256 26.2374C4.09075 26.5656 4.53587 26.75 5 26.75H27C27.4641 26.75 27.9092 26.5656 28.2374 26.2374C28.5656 25.9092 28.75 25.4641 28.75 25V7C28.75 6.53587 28.5656 6.09075 28.2374 5.76256C27.9092 5.43437 27.4641 5.25 27 5.25ZM5 6.75H27C27.0663 6.75 27.1299 6.77634 27.1768 6.82322C27.2237 6.87011 27.25 6.9337 27.25 7V20.4463L23.5662 16.7625C23.4037 16.6 23.2108 16.4711 22.9985 16.3831C22.7862 16.2951 22.5586 16.2499 22.3288 16.2499C22.0989 16.2499 21.8713 16.2951 21.659 16.3831C21.4467 16.4711 21.2538 16.6 21.0912 16.7625L18.4137 19.44L12.7375 13.7625C12.575 13.6 12.3821 13.4711 12.1697 13.3831C11.9574 13.2951 11.7298 13.2499 11.5 13.2499C11.2702 13.2499 11.0426 13.2951 10.8303 13.3831C10.6179 13.4711 10.425 13.6 10.2625 13.7625L4.75 19.275V7C4.75 6.9337 4.77634 6.87011 4.82322 6.82322C4.87011 6.77634 4.9337 6.75 5 6.75ZM4.75 25V21.3962L11.3225 14.8237C11.3457 14.8003 11.3734 14.7817 11.4039 14.769C11.4343 14.7563 11.467 14.7498 11.5 14.7498C11.533 14.7498 11.5657 14.7563 11.5961 14.769C11.6266 14.7817 11.6543 14.8003 11.6775 14.8237L22.1038 25.25H5C4.9337 25.25 4.87011 25.2237 4.82322 25.1768C4.77634 25.1299 4.75 25.0663 4.75 25ZM27 25.25H24.225L19.475 20.5L22.1513 17.8225C22.1745 17.7993 22.202 17.7808 22.2324 17.7682C22.2627 17.7557 22.2953 17.7492 22.3281 17.7492C22.361 17.7492 22.3935 17.7557 22.4239 17.7682C22.4542 17.7808 22.4818 17.7993 22.505 17.8225L27.255 22.5725V25C27.255 25.0333 27.2484 25.0662 27.2355 25.0968C27.2226 25.1275 27.2038 25.1553 27.18 25.1786C27.1563 25.2018 27.1281 25.2202 27.0972 25.2324C27.0663 25.2447 27.0332 25.2507 27 25.25ZM18.25 12.5C18.25 12.2528 18.3233 12.0111 18.4607 11.8055C18.598 11.6 18.7932 11.4398 19.0216 11.3452C19.2501 11.2505 19.5014 11.2258 19.7439 11.274C19.9863 11.3222 20.2091 11.4413 20.3839 11.6161C20.5587 11.7909 20.6777 12.0137 20.726 12.2561C20.7742 12.4986 20.7495 12.7499 20.6549 12.9784C20.5602 13.2068 20.4 13.402 20.1945 13.5393C19.9889 13.6767 19.7472 13.75 19.5 13.75C19.1685 13.75 18.8505 13.6183 18.6161 13.3839C18.3817 13.1495 18.25 12.8315 18.25 12.5Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Grid>
          </Grid>
        </div>
        <div
          className="w-full p-5 bg-purple-500 justify-between items-center inline-flex"
          style={{ marginBottom: 24 }}>
          <div className="text-black text-xl font-normal font-['Ubuntu']">
            Read image upload guidelines
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
        {/* button */}
        <div
          className="flex justify-center items-center align-middle"
          style={{ marginTop: 115, marginBottom: 115 }}>
          <button className="w-auto px-20 py-1.5 bg-violet-900 rounded justify-center items-center gap-2.5 inline-flex">
            <span className="text-center text-white text-sm font-normal font-['Ubuntu'] leading-7">
              Move to step 3
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
