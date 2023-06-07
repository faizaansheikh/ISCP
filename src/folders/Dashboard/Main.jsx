import { useMediaQuery } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import ResponsiveSideBar from "./ResponsiveSideBar";
import Setup from "../Setups/Setup";
function Main() {
  const isMobile = useMediaQuery("(min-width:600px)");

  return <>{isMobile ? <Sidebar /> : <ResponsiveSideBar />}
  <Setup/>
  </>;
}

export default Main;
