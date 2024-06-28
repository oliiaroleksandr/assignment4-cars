import { Box } from "@mui/material";
import { Heading } from "./Heading";
import { Outlet } from "react-router-dom";

import classes from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <Heading />
      <Box className={classes.content}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
