import { Box } from "@mui/material";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

import classes from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Box component="main" className={classes.main}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
