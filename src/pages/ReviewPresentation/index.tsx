import { Box } from "@mui/material";
import { Description, Gallery } from "./components";

import classes from "./ReviewPresentation.module.scss";

const ReviewPresentationPage = () => {
  return (
    <>
      <Box className={classes['review-presentation']}>
        <Gallery />
        <Description />
      </Box>
    </>
  );
};

export default ReviewPresentationPage;
