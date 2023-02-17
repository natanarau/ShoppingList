import React from "react";
import * as S from "./styles";

type ButtonTypes = {
  children: React.ReactNode;
  variant: "contained" | "outlined" | "text";
  sx?: any;
};

export default function Button({ children, ...props }: ButtonTypes) {
  return <S.Button {...props}>{children}</S.Button>;
}
