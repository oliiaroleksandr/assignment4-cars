import { Box, Stack, Typography } from "@mui/material";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <Box component="footer" className={classes.footer}>
      <Stack>
        <Typography variant="subtitle1" component="p">
          HOME
        </Typography>
        <Typography variant="subtitle1" component="p">
          ABOUT
        </Typography>
      </Stack>
      <Box className={classes.footer__info}>
        <Stack>
          <Typography variant="subtitle1" component="p">
            LA Office
          </Typography>
          <Typography variant="h5" color="GrayText" component="p">
            5-03pm
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="subtitle1" component="p">
            UK Office
          </Typography>
          <Typography variant="h5" color="GrayText" component="p">
            3-03am
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
