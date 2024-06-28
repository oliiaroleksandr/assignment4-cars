import { Box, Typography } from "@mui/material";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <Box component="header" className={classes.header}>
      <Box className={classes.header__info}>
        <Typography variant="h6" component="h6" color="darkgray">
          Title
        </Typography>
        <Typography variant="h6" component="h6" color="darkgray">
          User FirstName LastName
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
