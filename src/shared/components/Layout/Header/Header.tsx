import { Box, Typography } from "@mui/material";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <Box component="header" className={classes.header}>
      <Box className={classes.header__info}>
        <Typography variant="h6" component="h6" color="GrayText">
          Title
        </Typography>
        <Typography variant="h6" component="h6" color="GrayText">
          User FirstName LastName
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
