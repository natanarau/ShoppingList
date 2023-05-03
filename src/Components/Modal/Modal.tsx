import React from "react";
import * as S from "./styles";
import { Modal as ModalMui } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ModalTypes = {
  open: boolean;
  children: React.ReactElement;
  onClose: () => void;
  maxWidth?: string;
  maxHeight?: string;
};

export default function Modal({
  open,
  onClose,
  children,
  maxWidth,
  maxHeight,
}: ModalTypes) {
  return (
    <ModalMui
      open={open}
      onClose={onClose}
      sx={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <S.Wrapper
        width="80vw"
        maxWidth={maxWidth}
      >
        <S.BoxButton onClick={onClose}>
          <CloseIcon color="action" />
        </S.BoxButton>
        {children}
      </S.Wrapper>
    </ModalMui>
  );
}
