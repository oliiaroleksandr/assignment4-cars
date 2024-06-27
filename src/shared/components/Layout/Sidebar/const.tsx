import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GarageIcon from "@mui/icons-material/Garage";

type SidebarItem = {
  id: number;
  label: string;
  icon: JSX.Element;
};

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    label: "Garage",
    icon: <GarageIcon />,
  },
  {
    id: 2,
    label: "Content",
    icon: <InsertPhotoIcon />,
  },
  {
    id: 3,
    label: "CDN",
    icon: <LanguageIcon />,
  },
  {
    id: 4,
    label: "ROD",
    icon: <PhotoCameraIcon />,
  },
  {
    id: 5,
    label: "Menu",
    icon: <MenuIcon />,
  },
];
