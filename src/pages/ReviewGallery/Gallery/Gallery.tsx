import { Box, Button, Grid } from "@mui/material";
import { items } from "./const";
import { Link } from "react-router-dom";
import { GalleryItem } from "./GalleryItem";

import classes from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <Box className={classes.gallery}>
      <Link to="/reviewPresentation">
        <Button variant="contained" className={classes.gallery__button}>
          View presentation
        </Button>
      </Link>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
