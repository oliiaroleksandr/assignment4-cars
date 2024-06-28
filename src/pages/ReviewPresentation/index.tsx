import { Box } from "@mui/material";
import { Description, Gallery, Heading } from "./components";

import classes from "./ReviewPresentation.module.scss";

const ReviewPresentationPage = () => {
  return (
    <>
      <Heading />
      <Box className={classes['review-presentation']}>
        <Gallery />
        <Description />
      </Box>
    </>
  );
};

export default ReviewPresentationPage;
