import { Grid } from "@mui/material";
import LeftSider from "./LeftSider";
import Navbar from "./Navbar";
import Home from "../../Pages/Home";
import RightSider from "./RightSider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavbarMobile from "./NavbarMobile";

function MainLayout({ children }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
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
      {matches ? (
        <Grid container>
          <Grid
            item
            xs={2}
            // className="none md:none lg:block"
          >
            <LeftSider />
          </Grid>
          <Grid item xs={10}>
            <Navbar />
            <Grid container>
              <Grid item xs={9}>
                {children}
              </Grid>
              <Grid
                item
                xs={3}
                // className="none md:none lg:block"
              >
                <RightSider />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <NavbarMobile />
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default MainLayout;
