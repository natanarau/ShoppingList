import React from "react";
import * as S from "./styles";

type SquareFieldType = {
  children: React.ReactNode;
  width?: string;
  height?: string;
};

export default function SquareField({ children, ...props }: SquareFieldType) {
  return <S.BoxField {...props}>{children}</S.BoxField>;
}
