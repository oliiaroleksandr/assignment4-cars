import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GarageIcon from "@mui/icons-material/Garage";

type SidebarItem = {
  id: number;
  label: string;
  href: string;
  icon: JSX.Element;
};

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    label: "Garage",
    icon: <GarageIcon />,
    href: "/dashboard",
  },
  {
    id: 2,
    label: "Content",
    icon: <InsertPhotoIcon />,
    href: "/reviewGallery",
  },
  {
    id: 3,
    label: "CDN",
    icon: <LanguageIcon />,
    href: "/dashboard",
  },
  {
    id: 4,
    label: "ROD",
    icon: <PhotoCameraIcon />,
    href: "/dashboard",
  },
  {
    id: 5,
    label: "Menu",
    icon: <MenuIcon />,
    href: "/dashboard",
  },
];
