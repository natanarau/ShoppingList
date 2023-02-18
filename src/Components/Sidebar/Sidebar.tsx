import React from "react";
import { Box } from "@mui/material";
import SideBarMenu from "./SideBarMenu";
import * as S from "./styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type Props = {};

export default function Sidebar({}: Props) {
  const [visible, setVisible] = React.useState(false);

  return (
    <S.Content>
      <S.BoxIcon>
        <KeyboardArrowRightIcon color="primary" />
      </S.BoxIcon>

      <SideBarMenu />
    </S.Content>
  );
}
