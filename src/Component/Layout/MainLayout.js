import { Grid } from "@mui/material";
import LeftSider from "./LeftSider";
import Navbar from "./Navbar";
import Home from "../../Pages/Home";
import RightSider from "./RightSider";

function MainLayout({ children }) {
  return (
    <div
    // className="grid grid-cols-13 grid-flow-col bg-gray-100"
    >
      {/* <div className="col-span-1">
        <LeftSider />
      </div>
      <div className="col-span-12 flex justify-between flex-col">
        <Navbar />
        <div className="flex">
          <Home />
          <RightSider />
        </div>
      </div> */}
      <Grid container>
        <Grid item xs={2}>
          <LeftSider />
        </Grid>
        <Grid item xs={10}>
          <Navbar />
          <Grid container>
            <Grid item xs={9}>
              {children}
            </Grid>
            <Grid item xs={3}>
              <RightSider />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainLayout;
