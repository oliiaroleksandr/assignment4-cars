import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import classes from "./Heading.module.scss";

const Heading = () => {
  return (
    <Box className={classes.heading} sx={{ borderColor: "darkgray" }}>
      <Box className={classes.heading__left}>
        <Typography
          variant="h5"
          component="h2"
          color="darkgray"
          sx={{ mb: 0.5 }}
        >
          Project Name
        </Typography>
        <ToggleButtonGroup value="config" className={classes.heading__toggle}>
          <ToggleButton value="camera">Camera</ToggleButton>
          <ToggleButton value="config">Config</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={classes.heading__right}>
        <Typography
          variant="h5"
          component="h2"
          color="darkgray"
          sx={{ fontWeight: "bold" }}
        >
          Milestone title / Feedback Due: 02/15/21
        </Typography>
        <Typography variant="h5" component="h2" color="darkgray">
          Status: in production
        </Typography>
      </Box>
    </Box>
  );
};

export default Heading;
