import { SxProps, Theme } from "@mui/material";
import React from "react";
import * as S from "./styles";

type SquareFieldType = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  sx?: SxProps<Theme> | undefined
};

export default function SquareField({ children, ...props }: SquareFieldType) {
  return <S.BoxField {...props}>{children}</S.BoxField>;
}
