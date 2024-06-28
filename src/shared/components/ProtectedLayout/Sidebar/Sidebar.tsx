import { Box } from "@mui/material";
import { sidebarItems } from "./const";
import { Link } from "react-router-dom";

import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <Box
      component="aside"
      className={classes.sidebar}
      sx={{ backgroundColor: "darkgray" }}
    >
      {sidebarItems.map((item) => (
        <Link key={item.id} to={item.href}>
          <Box className={classes.sidebar__item} color="black">
            {item.icon}
            <Box component="span">{item.label}</Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default Sidebar;
