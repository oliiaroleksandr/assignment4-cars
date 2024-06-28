import { Box } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import classes from "./Description.module.scss";
import { DescriptionTop } from "./DescriptionTop";
import FeaturesList from "./FeaturesList";

const Description = () => {
  return (
    <Box className={classes.description}>
      <DescriptionTop />
      <Box className={classes.description__body}>
        <FeaturesList />
      </Box>
      <Box
        className={classes.description__bottom}
        sx={{ backgroundColor: "darkgray", color: "black" }}
      >
        <GridViewIcon />
      </Box>
    </Box>
  );
};

export default Description;
