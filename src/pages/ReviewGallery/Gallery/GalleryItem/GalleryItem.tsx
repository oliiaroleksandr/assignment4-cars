import { Box, Grid, Typography } from "@mui/material";

import classes from "./GalleryItem.module.scss";

type Props = {
  image: string;
  label: string;
};

const GalleryItem = ({ image, label }: Props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Typography variant="subtitle1" sx={{ textTransform: "uppercase" }}>
        {label}
      </Typography>
      <Box className={classes.gallery__image}>
        <img src={image} alt={label} />
      </Box>
    </Grid>
  );
};

export default GalleryItem;
