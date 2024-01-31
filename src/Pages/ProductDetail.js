import React from "react";
import MainLayout from "../Component/Layout/MainLayout";
import Mainbody from "../Component/Layout/Mainbody";
import { CiSearch } from "react-icons/ci";
import { Button, Grid } from "@mui/material";
import ProductCard from "../Component/ProductCard";
import ReviewsComponent from "../Component/ReviewsComponent";

export default function ProductDetail() {
  return (
    <MainLayout>
      <Mainbody>
        {/* <div></div> */}
        <div style={{ marginLeft: 16, marginRight: 16, paddingTop: 21 }}>
          <main
            className="w-full bg-white flex justify-between align-center items-middle"
            style={{
              paddingLeft: 21,
              paddingRight: 21,
              paddingTop: 18,
              paddingBottom: 18,
            }}>
            <div className="flex items-middle align-center gap-20">
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
                  d="M5.5605 12L11.781 18.219C11.9218 18.3598 12.0009 18.5508 12.0009 18.75C12.0009 18.9491 11.9218 19.1401 11.781 19.281C11.6402 19.4218 11.4492 19.5009 11.25 19.5009C11.0508 19.5009 10.8598 19.4218 10.719 19.281L3.969 12.531C3.89915 12.4613 3.84374 12.3785 3.80593 12.2874C3.76812 12.1963 3.74866 12.0986 3.74866 12C3.74866 11.9013 3.76812 11.8036 3.80593 11.7125C3.84374 11.6214 3.89915 11.5386 3.969 11.469L10.719 4.71897C10.8598 4.57814 11.0508 4.49902 11.25 4.49902C11.4492 4.49902 11.6402 4.57814 11.781 4.71897C11.9218 4.8598 12.0009 5.05081 12.0009 5.24997C12.0009 5.44913 11.9218 5.64014 11.781 5.78097L5.5605 12Z"
                  fill="black"
                />
              </svg>
              <div className="text-black text-opacity-80 text-2xl font-medium font-['Ubuntu']">
                Product details
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M12 12H12.01V12.01H12V12ZM12 5H12.01V5.01H12V5ZM12 19H12.01V19.01H12V19Z"
                stroke="black"
                stroke-width="3.75"
                stroke-linejoin="round"
              />
            </svg>
          </main>

          <main
            className="w-full h-auto bg-white flex align-center items-middle mt-1"
            style={{
              paddingLeft: 21,
              paddingRight: 35,
              paddingTop: 18,
              paddingBottom: 18,
              columnGap: 29,
            }}>
            <div className="w-full">
              <img
                src={require("../utils/assets/images/detailImgBanner.jpeg")}
                className="w-full h-full rounded-lg"
              />
            </div>
            {/* <div> */}
            <div
              className="w-full rounded-lg border border-black border-opacity-10"
              style={{
                paddingLeft: 21,

                paddingTop: 10,
                paddingBottom: 49,
              }}>
              <div
                className="text-black text-opacity-80 text-2xl font-medium font-['Ubuntu']"
                style={{ paddingRight: 21 }}>
                Original Leather Bag
              </div>
              <div
                className="text-black text-opacity-80 text-base font-normal font-['Ubuntu']"
                style={{ marginTop: 8, paddingRight: 21 }}>
                Lagos, Nigeria
              </div>
              <div
                style={{ marginTop: 8, paddingRight: 21 }}
                className="text-violet-900 text-xl font-bold font-['Ubuntu']">
                #200,000
              </div>
              <div
                style={{
                  overflowX: "scroll",
                  //   height: "100%",
                  display: "flex",
                  //   flexWrap: "nowrap",
                  columnGap: 20,
                  scrollbarWidth: "none",
                  marginTop: 8,
                }}>
                <img
                  className="w-14 h-11 rounded"
                  src="https://via.placeholder.com/59x46"
                />
                <img
                  className="w-14 h-11 rounded"
                  src="https://via.placeholder.com/59x46"
                />
                <img
                  className="w-14 h-11 rounded"
                  src="https://via.placeholder.com/59x46"
                />
                <img
                  className="w-14 h-11 rounded"
                  src="https://via.placeholder.com/59x46"
                />
                <img
                  className="w-14 h-11 rounded"
                  src="https://via.placeholder.com/59x46"
                />
                <img
                  className="w-14 h-11 rounded"
                  src="https://via.placeholder.com/59x46"
                />
              </div>
              <div
                className="text-black text-opacity-80 text-sm font-medium font-['Ubuntu']"
                style={{ marginBottom: 2, marginTop: 13, paddingRight: 21 }}>
                Product Description
              </div>
              <div className="w-full h-px border border-black border-opacity-10"></div>
              <div
                className="text-black text-opacity-80 text-xs font-light font-['Ubuntu']"
                style={{ marginTop: 2, paddingRight: 21 }}>
                A newly open boxed sneakers for sale.A newly open boxed sneakers
                for sale.
                <br />A newly open boxed sneakers for sale.A newly open boxed
                sneakers for sale.
                <br />A newly open boxed sneakers for sale.
              </div>
              <div
                className="flex justify-between align-center items-middle md:flex-col lg:flex-row"
                style={{ marginLeft: 36, marginRight: 36, marginTop: 18 }}>
                <button
                  style={{
                    paddingTop: 11,
                    paddingBottom: 11,
                    paddingLeft: 34,
                    paddingRight: 34,
                  }}
                  className="bg-orange-500 rounded text-white text-xs font-medium font-['Ubuntu']">
                  <span>Message seller</span>
                </button>
                <button
                  style={{
                    paddingTop: 11,
                    paddingBottom: 11,
                    paddingLeft: 34,
                    paddingRight: 34,
                  }}
                  className="bg-violet-900 rounded text-white text-xs font-medium font-['Ubuntu']">
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
            {/* </div> */}
          </main>

          <main
            className="w-full h-auto bg-white mt-1"
            style={{
              paddingLeft: 21,
              paddingRight: 35,
              paddingTop: 18,
              paddingBottom: 18,
              columnGap: 29,
            }}>
            <div
              style={{ marginBottom: 14 }}
              className="text-black text-2xl font-medium font-['Ubuntu']">
              About business
            </div>

            <div className="w-40 h-14 justify-start items-center gap-3.5 inline-flex">
              <img
                className="w-14 h-14"
                src="https://via.placeholder.com/59x53"
              />
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-black text-opacity-80 text-2xl font-medium font-['Ubuntu']">
                  FedEx
                </div>
                <div className="text-violet-900 text-base font-light font-['Ubuntu'] underline">
                  View profile
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div
              style={{ marginBottom: 5, marginTop: 68 }}
              className="text-black text-2xl font-medium font-['Ubuntu']">
              Reviews
            </div>
            <div
              style={{ marginBottom: 14 }}
              className="text-violet-900 text-xs font-normal font-['Ubuntu']">
              56 reviews
            </div>
            <div
              style={{
                borderRadius: "5px",
                border: "1px solid rgba(0, 0, 0, 0.10)",
                background: "#FFF",
              }}>
              <div
                style={{
                  paddingLeft: "13px",
                  paddingRight: "29px",
                  paddingTop: "19px",
                  paddingBottom: "19px",
                }}>
                <ReviewsComponent />
              </div>
              <div className="w-full h-px border border-black border-opacity-10" />
              <div
                style={{
                  paddingLeft: "13px",
                  paddingRight: "29px",
                  paddingTop: "19px",
                  paddingBottom: "19px",
                }}>
                <ReviewsComponent />
              </div>
              <div className="w-full h-px border border-black border-opacity-10" />
              <div
                style={{
                  paddingLeft: "13px",
                  paddingRight: "29px",
                  paddingTop: "19px",
                  paddingBottom: "19px",
                }}>
                <ReviewsComponent />
              </div>
              <div className="w-full h-px border border-black border-opacity-10" />
              <div
                style={{
                  paddingLeft: "13px",
                  paddingRight: "29px",
                  paddingTop: "19px",
                  paddingBottom: "19px",
                }}>
                <ReviewsComponent />
              </div>
            </div>
            <div
              style={{ marginTop: 14, marginBottom: 10 }}
              className="text-black text-opacity-80 text-2xl font-medium font-['Ubuntu']">
              Add a review
            </div>

            <textarea
              rows={4}
              className="w-full bg-white rounded border border-black border-opacity-10"></textarea>

            <div
              style={{ marginTop: 10 }}
              className="w-full h-auto justify-between items-center inline-flex">
              <div className="w-36 h-7 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="148"
                  height="28"
                  viewBox="0 0 148 28"
                  fill="none">
                  <path
                    d="M14.4813 20.8578L19.9938 24.3578C20.7048 24.8063 21.5798 24.1391 21.372 23.3188L19.7751 17.0407C19.7319 16.8666 19.7388 16.684 19.7949 16.5137C19.851 16.3434 19.9541 16.1924 20.0923 16.0782L25.036 11.9547C25.6813 11.4188 25.3532 10.336 24.511 10.2813L18.0579 9.86565C17.8818 9.85541 17.7125 9.79409 17.5708 9.68921C17.429 9.58432 17.3208 9.44039 17.2595 9.27503L14.8532 3.21565C14.7895 3.04055 14.6735 2.88928 14.5209 2.78239C14.3682 2.6755 14.1864 2.61816 14.0001 2.61816C13.8138 2.61816 13.6319 2.6755 13.4793 2.78239C13.3267 2.88928 13.2107 3.04055 13.147 3.21565L10.7407 9.27503C10.6794 9.44039 10.5712 9.58432 10.4294 9.68921C10.2876 9.79409 10.1183 9.85541 9.94227 9.86565L3.48915 10.2813C2.64696 10.336 2.31884 11.4188 2.96415 11.9547L7.9079 16.0782C8.04608 16.1924 8.14917 16.3434 8.20528 16.5137C8.2614 16.684 8.26827 16.8666 8.22509 17.0407L6.74852 22.8594C6.49696 23.8438 7.54696 24.6422 8.38915 24.1063L13.5188 20.8578C13.6627 20.7664 13.8296 20.7178 14.0001 20.7178C14.1706 20.7178 14.3375 20.7664 14.4813 20.8578V20.8578Z"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M44.4813 20.8578L49.9938 24.3578C50.7048 24.8063 51.5798 24.1391 51.372 23.3188L49.7751 17.0407C49.7319 16.8666 49.7388 16.684 49.7949 16.5137C49.851 16.3434 49.9541 16.1924 50.0923 16.0782L55.036 11.9547C55.6813 11.4188 55.3532 10.336 54.511 10.2813L48.0579 9.86565C47.8818 9.85541 47.7125 9.79409 47.5708 9.68921C47.429 9.58432 47.3208 9.44039 47.2595 9.27503L44.8532 3.21565C44.7895 3.04055 44.6735 2.88928 44.5209 2.78239C44.3682 2.6755 44.1864 2.61816 44.0001 2.61816C43.8138 2.61816 43.6319 2.6755 43.4793 2.78239C43.3267 2.88928 43.2107 3.04055 43.147 3.21565L40.7407 9.27503C40.6794 9.44039 40.5712 9.58432 40.4294 9.68921C40.2876 9.79409 40.1183 9.85541 39.9423 9.86565L33.4891 10.2813C32.647 10.336 32.3188 11.4188 32.9641 11.9547L37.9079 16.0782C38.0461 16.1924 38.1492 16.3434 38.2053 16.5137C38.2614 16.684 38.2683 16.8666 38.2251 17.0407L36.7485 22.8594C36.497 23.8438 37.547 24.6422 38.3891 24.1063L43.5188 20.8578C43.6627 20.7664 43.8296 20.7178 44.0001 20.7178C44.1706 20.7178 44.3375 20.7664 44.4813 20.8578V20.8578Z"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M74.4813 20.8578L79.9938 24.3578C80.7048 24.8063 81.5798 24.1391 81.372 23.3188L79.7751 17.0407C79.7319 16.8666 79.7388 16.684 79.7949 16.5137C79.851 16.3434 79.9541 16.1924 80.0923 16.0782L85.036 11.9547C85.6813 11.4188 85.3532 10.336 84.511 10.2813L78.0579 9.86565C77.8818 9.85541 77.7125 9.79409 77.5708 9.68921C77.429 9.58432 77.3208 9.44039 77.2595 9.27503L74.8532 3.21565C74.7895 3.04055 74.6735 2.88928 74.5209 2.78239C74.3682 2.6755 74.1864 2.61816 74.0001 2.61816C73.8138 2.61816 73.6319 2.6755 73.4793 2.78239C73.3267 2.88928 73.2107 3.04055 73.147 3.21565L70.7407 9.27503C70.6794 9.44039 70.5712 9.58432 70.4294 9.68921C70.2876 9.79409 70.1183 9.85541 69.9423 9.86565L63.4891 10.2813C62.647 10.336 62.3188 11.4188 62.9641 11.9547L67.9079 16.0782C68.0461 16.1924 68.1492 16.3434 68.2053 16.5137C68.2614 16.684 68.2683 16.8666 68.2251 17.0407L66.7485 22.8594C66.497 23.8438 67.547 24.6422 68.3891 24.1063L73.5188 20.8578C73.6627 20.7664 73.8296 20.7178 74.0001 20.7178C74.1706 20.7178 74.3375 20.7664 74.4813 20.8578V20.8578Z"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M104.481 20.8578L109.994 24.3578C110.705 24.8063 111.58 24.1391 111.372 23.3188L109.775 17.0407C109.732 16.8666 109.739 16.684 109.795 16.5137C109.851 16.3434 109.954 16.1924 110.092 16.0782L115.036 11.9547C115.681 11.4188 115.353 10.336 114.511 10.2813L108.058 9.86565C107.882 9.85541 107.713 9.79409 107.571 9.68921C107.429 9.58432 107.321 9.44039 107.259 9.27503L104.853 3.21565C104.79 3.04055 104.673 2.88928 104.521 2.78239C104.368 2.6755 104.186 2.61816 104 2.61816C103.814 2.61816 103.632 2.6755 103.479 2.78239C103.327 2.88928 103.211 3.04055 103.147 3.21565L100.741 9.27503C100.679 9.44039 100.571 9.58432 100.429 9.68921C100.288 9.79409 100.118 9.85541 99.9423 9.86565L93.4891 10.2813C92.647 10.336 92.3188 11.4188 92.9641 11.9547L97.9079 16.0782C98.0461 16.1924 98.1492 16.3434 98.2053 16.5137C98.2614 16.684 98.2683 16.8666 98.2251 17.0407L96.7485 22.8594C96.497 23.8438 97.547 24.6422 98.3891 24.1063L103.519 20.8578C103.663 20.7664 103.83 20.7178 104 20.7178C104.171 20.7178 104.337 20.7664 104.481 20.8578V20.8578Z"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M134.481 20.8578L139.994 24.3578C140.705 24.8063 141.58 24.1391 141.372 23.3188L139.775 17.0407C139.732 16.8666 139.739 16.684 139.795 16.5137C139.851 16.3434 139.954 16.1924 140.092 16.0782L145.036 11.9547C145.681 11.4188 145.353 10.336 144.511 10.2813L138.058 9.86565C137.882 9.85541 137.713 9.79409 137.571 9.68921C137.429 9.58432 137.321 9.44039 137.259 9.27503L134.853 3.21565C134.79 3.04055 134.673 2.88928 134.521 2.78239C134.368 2.6755 134.186 2.61816 134 2.61816C133.814 2.61816 133.632 2.6755 133.479 2.78239C133.327 2.88928 133.211 3.04055 133.147 3.21565L130.741 9.27503C130.679 9.44039 130.571 9.58432 130.429 9.68921C130.288 9.79409 130.118 9.85541 129.942 9.86565L123.489 10.2813C122.647 10.336 122.319 11.4188 122.964 11.9547L127.908 16.0782C128.046 16.1924 128.149 16.3434 128.205 16.5137C128.261 16.684 128.268 16.8666 128.225 17.0407L126.749 22.8594C126.497 23.8438 127.547 24.6422 128.389 24.1063L133.519 20.8578C133.663 20.7664 133.83 20.7178 134 20.7178C134.171 20.7178 134.337 20.7664 134.481 20.8578V20.8578Z"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <button className="px-5 py-2.5 bg-violet-900 rounded justify-center items-center gap-2.5 flex">
                <div className="text-white text-base font-normal font-['Ubuntu']">
                  Post review
                </div>
              </button>
            </div>
            {/* banner */}
            <div style={{ paddingTop: 24, paddingBottom: 24 }}>
              <img
                className="w-full h-28"
                src={require("../utils/assets/images/banner.jpeg")}
              />
            </div>

            {/* people viewed */}
            <div
              style={{ marginBottom: "13px" }}
              className="text-black text-opacity-80 text-2xl font-medium font-['Ubuntu']">
              People also viewed
            </div>

            <Grid container rowSpacing={4} marginBottom={40}>
              <Grid item xs={1.7}>
                <ProductCard
                  img={require("../utils/assets/images/peopleView.jpeg")}
                />
              </Grid>
              <Grid item xs={1.7}>
                <ProductCard
                  img={require("../utils/assets/images/peopleView.jpeg")}
                />
              </Grid>
              <Grid item xs={1.7}>
                <ProductCard
                  img={require("../utils/assets/images/peopleView.jpeg")}
                />
              </Grid>
              <Grid item xs={1.7}>
                <ProductCard
                  img={require("../utils/assets/images/peopleView.jpeg")}
                />
              </Grid>
              <Grid item xs={1.7}>
                <ProductCard
                  img={require("../utils/assets/images/peopleView.jpeg")}
                />
              </Grid>
              <Grid item xs={1.7}>
                <ProductCard
                  img={require("../utils/assets/images/peopleView.jpeg")}
                />
              </Grid>
              <Grid item xs={1.7}>
                <ProductCard
                  img={require("../utils/assets/images/peopleView.jpeg")}
                />
              </Grid>
            </Grid>
          </main>
        </div>
      </Mainbody>
    </MainLayout>
  );
}
