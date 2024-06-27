import { Box } from "@mui/material";
import { sidebarItems } from "./const";

import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <Box
      component="aside"
      className={classes.sidebar}
      sx={{ backgroundColor: "darkgray" }}
    >
      {sidebarItems.map((item) => (
        <Box key={item.id} className={classes.sidebar__item} color="black">
          {item.icon}
          <Box component="span">{item.label}</Box>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
