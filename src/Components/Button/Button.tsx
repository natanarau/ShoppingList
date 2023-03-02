import theme from "@/theme/theme";
import React from "react";
import * as S from "./styles";

type ButtonTypes = {
  children: React.ReactNode;
  variant: "contained" | "outlined" | "text";
  sx?: any;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
};

export default function Button({ disabled, children, ...props }: ButtonTypes) {
  return (
    <S.Button disabled={disabled} {...props}>
      {children}
    </S.Button>
  );
}
