import React from "react";
import * as S from "./styles";
import { Modal as ModalMui } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ModalTypes = {
  open: boolean;
  children: React.ReactElement;
  onClose: () => void;
};

export default function Modal({ open, onClose, children }: ModalTypes) {
  return (
    <ModalMui
      open={open}
      onClose={onClose}
      sx={{ display: "grid", justifyContent: "center", alignContent: "center" }}
    >
      <S.Wrapper>
        <CloseIcon
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={onClose}
        />
        {children}
      </S.Wrapper>
    </ModalMui>
  );
}
