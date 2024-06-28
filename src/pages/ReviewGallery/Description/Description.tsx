import { Box, Typography } from "@mui/material";

import classes from "./Description.module.scss";

const Description = () => {
  return (
    <Box className={classes.description}>
      <Box
        className={classes.description__panel}
        sx={{ backgroundColor: "darkgray" }}
      />
      <Box className={classes.description__body}>
        <Typography
          variant="subtitle1"
          sx={{ textTransform: "uppercase", fontWeight: "normal", mb: 1 }}
        >
          Camera Name
        </Typography>
        <Typography
          variant="caption"
          sx={{ textTransform: "uppercase", mb: 0, color: "dimgray" }}
        >
          Review description
        </Typography>{" "}
        <br />
        <Typography variant="caption" color="dimgray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum,
          officiis recusandae provident repellendus sunt eligendi veritatis est
          dolorem, explicabo fugit similique tempora molestiae dolorum possimus
          exercitationem quasi. Reiciendis, vitae!
        </Typography>
      </Box>
      <Box
        className={classes.description__panel}
        sx={{ backgroundColor: "darkgray" }}
      />
    </Box>
  );
};

export default Description;
