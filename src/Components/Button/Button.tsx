import React from "react";
import * as S from "./styles";

type ButtonTypes = {
  children: React.ReactNode;
  variant: "contained" | "outlined" | "text";
  sx?: any;
  type?: "button" | "submit" | "reset" | undefined
};

export default function Button({ children, ...props }: ButtonTypes) {
  return <S.Button {...props}>{children}</S.Button>;
}
