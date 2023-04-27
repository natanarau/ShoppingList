import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import EggAltIcon from '@mui/icons-material/EggAlt';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import StorefrontIcon from '@mui/icons-material/Storefront';

type MenuListTypes = {
  title: string;
  path: string;
  icon: JSX.Element;
};

export const SiderBarMenuList: MenuListTypes[] = [
  {
    title: "Dashboar",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Alimentos",
    path: "/alimentos",
    icon: <EggAltIcon />,
  },
  {
    title: "Lista de compras",
    path: "/lista-de-compras",
    icon: <PlaylistPlayIcon />,
  },
  {
    title: "Mercados",
    path: "/lista-de-mercados",
    icon: <StorefrontIcon />,
  },
];
