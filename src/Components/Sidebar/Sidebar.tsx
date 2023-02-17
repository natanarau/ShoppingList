import { Box } from "@mui/material";
import React from "react";
import SideBarMenu from "./SideBarMenu";
import * as S from "./styles";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <S.Content>
      <SideBarMenu />
    </S.Content>
  );
}
