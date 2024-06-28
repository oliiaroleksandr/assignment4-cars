import { Box, Button, Typography } from "@mui/material";
import classes from "./Gallery.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { images } from "./const";
import { useSelectedSnapDisplay } from "./hooks";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi);

  return (
    <Box className={classes.gallery}>
      <Box className={classes.gallery__frame} sx={{ borderColor: "darkgray" }}>
        <Box className={classes.gallery__carousel} ref={emblaRef}>
          <Box className={classes.gallery__container}>
            {images.map((image, index) => (
              <Box
                key={index}
                className={classes.gallery__slide}
                sx={{ borderColor: "darkgray" }}
              >
                <img src={image} alt="car" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className={classes.gallery__controls} color="darkgray">
        <Button
          onClick={scrollPrev}
          startIcon={<ArrowCircleLeftOutlinedIcon />}
          color="inherit"
          disabled={selectedSnap === 0}
        >
          PREV
        </Button>
        <Typography>
          {selectedSnap + 1} / {snapCount}
        </Typography>

        <Button
          onClick={scrollNext}
          endIcon={<ArrowCircleRightOutlinedIcon />}
          color="inherit"
          disabled={selectedSnap === snapCount - 1}
        >
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

export default Gallery;
