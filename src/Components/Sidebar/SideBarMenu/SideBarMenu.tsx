import Button from "@/Components/Button";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { SiderBarMenuList } from "./SiderBarMenu.list";
import * as S from "./styles";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

type Props = {};

export default function SideBarMenu({}: Props) {
  const { route } = useRouter();
  
  return (
    <>
      <S.BoxMenu>
        <Box>
          <Box
            component="img"
            alt="Logo do sistema"
            src="images/logo.png"
            width="100px"
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
              {value.icon} {value.title}
            </Link>
          ))}
        </Box>
        <Button
          variant="outlined"
          sx={{ borderColor: "info.main", color: "info.main", margin: "10px" }}
        >
          Sair
        </Button>
      </S.BoxMenu>
    </>
  );
}
