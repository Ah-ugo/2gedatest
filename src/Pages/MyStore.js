import React from "react";
import MainLayout from "../Component/Layout/MainLayout";
import Mainbody from "../Component/Layout/Mainbody";
import { CiSearch } from "react-icons/ci";
import { Grid } from "@mui/material";
import ProductCard from "../Component/ProductCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function MyStore() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <MainLayout>
      <Mainbody>
        {/* <div></div> */}
        <div style={{ marginLeft: 16, marginRight: 16, paddingTop: 21 }}>
          <main
            className="w-full bg-white"
            style={{
              paddingLeft: 21,
              paddingRight: 21,
              paddingTop: 18,
              paddingBottom: 341,
            }}>
            <div className="flex justify-between align-center items-middle">
              <div className="flex gap-5 align-center items-middle">
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
                <span className="text-black text-opacity-80 text-2xl font-medium font-['Ubuntu']">
                  My store
                </span>
              </div>
              <div className="hidden space-x-3 items-end md:flex">
                <div className="flex align-middle items-center">
                  <div
                    class="pt-2 relative mx-auto text-gray-600"
                    // style={{ marginRight: 71 }}
                  >
                    <input
                      class="border-2 border-gray-300 w-auto bg-white px-5 pr-16 rounded-lg text-sm focus:outline-none"
                      type="search"
                      name="search"
                      style={{ width: "full", height: "36px" }}
                      placeholder="Search Name, Place and Jobs"
                    />
                    <button
                      type="submit"
                      class="absolute right-0 top-0 mt-5 mr-4">
                      <CiSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* product section */}
            <Grid container rowSpacing={2} columnSpacing={3} marginTop={"15px"}>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot2.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot3.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot4.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot5.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot6.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot7.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot2.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot3.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot4.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot5.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot6.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot7.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={12}>
                {/* banner */}
                <div style={{ paddingTop: 24, paddingBottom: 24 }}>
                  <img
                    className="w-full h-28"
                    src={require("../utils/assets/images/banner.jpeg")}
                  />
                </div>
              </Grid>

              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot2.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot3.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot4.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot5.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot6.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot7.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot2.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot3.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot4.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot5.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot6.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot7.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={12}>
                {/* banner */}
                <div style={{ paddingTop: 24, paddingBottom: 24 }}>
                  <img
                    className="w-full h-28"
                    src={require("../utils/assets/images/banner.jpeg")}
                  />
                </div>
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot2.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot3.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot4.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot5.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot6.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot7.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot2.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot3.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot4.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot5.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot6.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot7.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={12}>
                {/* banner */}
                <div style={{ paddingTop: 24, paddingBottom: 24 }}>
                  <img
                    className="w-full h-28"
                    src={require("../utils/assets/images/banner.jpeg")}
                  />
                </div>
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot2.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot3.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot4.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot5.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot6.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot7.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot2.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot3.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot4.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot5.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot6.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
              <Grid item xs={matches ? 1.7142857142857 : 6}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot7.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
              </Grid>
            </Grid>
          </main>
        </div>
      </Mainbody>
    </MainLayout>
  );
}
