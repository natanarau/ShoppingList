import Button from "@/Components/Button";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { SiderBarMenuList } from "./SiderBarMenu.list";
import * as S from "./styles";
import { useRouter } from "next/router";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function SideBarMenu() {
  const { route } = useRouter();
  const [visible, setVisible] = React.useState(
    localStorage.getItem("menuVisible")
  );

  const menuVisible = () => {
    if (localStorage.getItem("menuVisible") === "open") {
      localStorage.setItem("menuVisible", "closed");
    } else if (localStorage.getItem("menuVisible") === "closed") {
      localStorage.setItem("menuVisible", "open");
    }
    setVisible(localStorage.getItem("menuVisible"));
  };

  return (
    <>
      <S.Session className={`${visible === "open" ? "visibled" : "indented"}`}>
        <S.BoxMenu className="menu">
          <S.BoxIcon onClick={() => menuVisible()}>
            <KeyboardArrowRightIcon
              className={`${visible === "open" ? "left" : "right"}`}
              sx={{ transition: "500ms" }}
            />
          </S.BoxIcon>
          <Box className="wrapperMenu">
            <Box
              component="img"
              alt="Logo do sistema"
              src="images/logo-shopping-list.png"
              width="200px"
              display="block"
              m="10px auto 20px auto"
            />
            <Box
              component="h4"
              fontWeight={500}
              color="text.secondary"
              m="10px"
              fontSize="12px"
            >
              Menu
            </Box>
            {SiderBarMenuList.map((value, index) => (
              <Link
                key={index}
                href={value.path}
                className={`${value.path === route && "borderEffect"}`}
              >
                {value.icon}{" "}
                <Box component="span" className="listName">
                  {value.title}
                </Box>
              </Link>
            ))}
          </Box>
        </S.BoxMenu>
      </S.Session>
      <S.BoxMenuMobile>
        <S.ButtonAddList><AddShoppingCartIcon fontSize="large"/></S.ButtonAddList>
        {SiderBarMenuList.map((value, index) => (
          <Link key={index} href={value.path}>
            {value.icon}
          </Link>
        ))}
      </S.BoxMenuMobile>
    </>
  );
}
