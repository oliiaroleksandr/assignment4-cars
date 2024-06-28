import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

import FeaturesList from "../FeaturesList";
import classes from "./DescriptionTop.module.scss";

const DescriptionTop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box
        className={classes.description__top}
        sx={{ backgroundColor: "darkgray", color: "black", fontWeight: "bold" }}
      >
        <Stack direction="row" alignItems="center" gap={0.5}>
          <ArrowBackIosIcon />
          <Typography sx={{ fontWeight: "inherit" }}>V3.0</Typography>
        </Stack>
        <IconButton sx={{ color: "black", p: 0 }} onClick={handleClickOpen}>
          <FullscreenExitIcon />
        </IconButton>
      </Box>
      <Dialog fullScreen onClose={handleClose} open={isModalOpen}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Project Name
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ p: 2 }}>
          <FeaturesList />
        </Box>
      </Dialog>
    </>
  );
};

export default DescriptionTop;
