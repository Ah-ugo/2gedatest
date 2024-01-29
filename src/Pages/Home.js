import React, { useEffect } from "react";
import Mainbody from "../Component/Layout/Mainbody";
import { CiSearch } from "react-icons/ci";
import ProductCard from "../Component/ProductCard";
import SuggestedBusinessCard from "../Component/SuggestedBusinessCard";
import { Grid } from "@mui/material";
import MainLayout from "../Component/Layout/MainLayout";

export default function Home() {
  return (
    // <div>
    <MainLayout>
      <Mainbody>
        <div style={{ marginLeft: 29, marginRight: 29, marginTop: 26 }}>
          <div
            className="flex justify-between items-center align-middle"
            style={{ marginBottom: 22 }}>
            <span className="text-black text-base font-medium font-['Ubuntu']">
              Buy and sell instantly
            </span>

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
          {/* card 1 */}
          <div
            className="w-full h-full bg-white"
            style={{
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 8,
              paddingBottom: 15,
            }}>
            <span className="text-black text-opacity-80 text-base font-medium font-['Ubuntu']">
              Trending and Hot
            </span>

            <div style={{ paddingTop: 23 }}>
              <div
                style={{
                  overflowX: "scroll",
                  height: "100%",
                  display: "flex",
                  flexWrap: "nowrap",
                  gap: 20,
                  scrollbarWidth: "none",
                }}>
                <ProductCard
                  img={require("../../src/utils/assets/images/hot1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/hot2.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/hot3.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/hot4.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/hot5.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/hot6.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/hot7.jpeg")}
                />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
          {/* banner */}
          <div style={{ paddingTop: 24, paddingBottom: 24 }}>
            <img
              className="w-full h-28"
              src={require("../utils/assets/images/banner.jpeg")}
            />
          </div>

          {/* card 2 */}
          <div
            className="w-full h-full bg-white"
            style={{
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 8,
              paddingBottom: 15,
            }}>
            <span className="text-black text-opacity-80 text-base font-medium font-['Ubuntu']">
              Automobile
            </span>

            <div style={{ paddingTop: 23 }}>
              <div
                style={{
                  overflowX: "scroll",
                  height: "100%",
                  display: "flex",
                  flexWrap: "nowrap",
                  gap: 20,
                  scrollbarWidth: "none",
                }}>
                <ProductCard
                  img={require("../../src/utils/assets/images/auto1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/auto2.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/auto3.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/auto4.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/auto5.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/auto6.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/auto7.jpeg")}
                />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>

          {/* Suggested Businesses */}

          <div>
            <div
              className="w-full h-full bg-white"
              style={{
                paddingLeft: 14,
                paddingRight: 14,
                paddingTop: 36,
                paddingBottom: 15,
                marginTop: 34,
              }}>
              <div style={{ marginBottom: 20 }}>
                <span className="text-black text-base font-medium font-['Ubuntu']">
                  Suggested Businesses
                </span>
              </div>
              <Grid
                // style={{ marginTop: 5 }}
                //   marginTop={5}
                container
                spacing={4}>
                <Grid item xs={6} sm={12} md={6}>
                  <SuggestedBusinessCard
                    img={require("../utils/assets/images/bus1.jpeg")}
                  />
                </Grid>
                <Grid item xs={6} sm={12} md={6}>
                  <SuggestedBusinessCard
                    img={require("../utils/assets/images/bus2.jpeg")}
                  />
                </Grid>
                <Grid item xs={6} sm={12} md={6}>
                  <SuggestedBusinessCard
                    img={require("../utils/assets/images/bus3.jpeg")}
                  />
                </Grid>
                <Grid item xs={6} sm={12} md={6}>
                  <SuggestedBusinessCard
                    img={require("../utils/assets/images/bus1.jpeg")}
                  />
                </Grid>
                <Grid item xs={6} sm={12} md={6}>
                  <SuggestedBusinessCard
                    img={require("../utils/assets/images/bus2.jpeg")}
                  />
                </Grid>
                <Grid item xs={6} sm={12} md={6}>
                  <SuggestedBusinessCard
                    img={require("../utils/assets/images/bus3.jpeg")}
                  />
                </Grid>
              </Grid>
            </div>
          </div>

          {/* Fashion And Lifestyle */}

          {/* card 4 */}
          <div
            className="w-full h-full bg-white"
            style={{
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 8,
              paddingBottom: 15,
              marginTop: 34,
            }}>
            <span className="text-black text-opacity-80 text-base font-medium font-['Ubuntu']">
              Fashion and Lifestyle
            </span>

            <div style={{ paddingTop: 23 }}>
              <div
                style={{
                  overflowX: "scroll",
                  height: "100%",
                  display: "flex",
                  flexWrap: "nowrap",
                  gap: 20,
                  scrollbarWidth: "none",
                }}>
                <ProductCard
                  img={require("../../src/utils/assets/images/fash1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash2.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash3.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash4.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash5.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash6.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash7.jpeg")}
                />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>

          {/* card 5 */}
          <div
            className="w-full h-full bg-white"
            style={{
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 8,
              paddingBottom: 15,
              marginTop: 34,
            }}>
            <span className="text-black text-opacity-80 text-base font-medium font-['Ubuntu']">
              Kids and Toys
            </span>

            <div style={{ paddingTop: 23 }}>
              <div
                style={{
                  overflowX: "scroll",
                  height: "100%",
                  display: "flex",
                  flexWrap: "nowrap",
                  gap: 20,
                  scrollbarWidth: "none",
                }}>
                <ProductCard
                  img={require("../../src/utils/assets/images/fash1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash2.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash3.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash4.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash5.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash6.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash7.jpeg")}
                />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div
            className="w-full h-full bg-white"
            style={{
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 8,
              paddingBottom: 15,
              marginTop: 34,
            }}>
            <span className="text-black text-opacity-80 text-base font-medium font-['Ubuntu']">
              Furnitures & Decoration
            </span>

            <div style={{ paddingTop: 23 }}>
              <div
                style={{
                  overflowX: "scroll",
                  height: "100%",
                  display: "flex",
                  flexWrap: "nowrap",
                  gap: 20,
                  scrollbarWidth: "none",
                }}>
                <ProductCard
                  img={require("../../src/utils/assets/images/fash1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash2.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash3.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash4.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash5.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash6.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash7.jpeg")}
                />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>

          {/* card 7 */}
          <div
            className="w-full h-full bg-white"
            style={{
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 8,
              paddingBottom: 15,
              marginTop: 34,
            }}>
            <span className="text-black text-opacity-80 text-base font-medium font-['Ubuntu']">
              Skin Care
            </span>

            <div style={{ paddingTop: 23 }}>
              <div
                style={{
                  overflowX: "scroll",
                  height: "100%",
                  display: "flex",
                  flexWrap: "nowrap",
                  gap: 20,
                  scrollbarWidth: "none",
                }}>
                <ProductCard
                  img={require("../../src/utils/assets/images/fash1.jpeg")}
                  name={"Semi detached duplex"}
                  price={"#200,000"}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash2.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash3.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash4.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash5.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash6.jpeg")}
                />
                <ProductCard
                  img={require("../../src/utils/assets/images/fash7.jpeg")}
                />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>

          {/* </div> */}
        </div>
      </Mainbody>
    </MainLayout>
  );
}
