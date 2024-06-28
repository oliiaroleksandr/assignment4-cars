import { Box } from "@mui/material";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

import classes from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <Box className={classes.content}>
        <Sidebar />
        <Box component="main" className={classes.main}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
