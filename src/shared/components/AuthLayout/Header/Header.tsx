import { Box, Typography } from "@mui/material";
import classes from "./Header.module.scss";


const Header = () => {
  return (
    <Box component="header" className={classes.header}>
      <Typography variant="h5" component="p">
        Logo
      </Typography>
    </Box>
  );
};

export default Header;
