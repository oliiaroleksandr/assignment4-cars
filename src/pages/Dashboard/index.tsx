import { Box } from "@mui/material";
import { MainTable, SideTable } from "./components";

import classes from "./Dashboard.module.scss";

const DashboardPage = () => {
  return (
    <Box className={classes.dashboard}>
      <MainTable />
      <SideTable />
    </Box>
  );
};

export default DashboardPage;
