import { Divider, List, ListItemText } from "@mui/material";

const FeaturesList = () => {
  return (
    <List>
      <ListItemText primary="Engine" secondary="Inline-4" />
      <Divider />
      <ListItemText primary="Doors" secondary="5" />
      <Divider />
      <ListItemText primary="Transmission" secondary="Manual" />
      <Divider />
      <ListItemText primary="Drivetrain" secondary="FWD" />
      <Divider />
      <ListItemText primary="Fuel Type" secondary="Gasoline" />
      <Divider />
      <ListItemText
        primary="Interior Features"
        secondary="Air conditioning, infotainment system, navigation, leather seats, ADAS"
      />
      <Divider />
      <ListItemText
        primary="Safety Features"
        secondary="Airbags, ABS, traction control, ESC, collision avoidance, lane-keeping assist"
      />
    </List>
  );
};

export default FeaturesList;
