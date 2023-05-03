import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EggAltIcon from "@mui/icons-material/EggAlt";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ButtonAddList } from "./styles";

type MenuListTypes = {
  title: string;
  path: string;
  icon: JSX.Element;
};

export const SiderBarMenuList: MenuListTypes[] = [
  {
    title: "Dashboar",
    path: "/",
    icon: <HomeIcon fontSize="medium" />,
  },
  {
    title: "Alimentos",
    path: "/alimentos",
    icon: <EggAltIcon fontSize="medium" />,
  },
  {
    title: "Listas",
    path: "/lista-de-compras",
    icon: <PlaylistPlayIcon fontSize="medium" />,
  },
  {
    title: "Mercados",
    path: "/lista-de-mercados",
    icon: <StorefrontIcon fontSize="medium" />,
  },
];
