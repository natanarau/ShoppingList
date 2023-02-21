import React, { useContext } from "react";
import { useNotifications } from "@/hooks/useNotifications";
import Modal from "@/Modal";
import { Box } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import * as S from './styles'

export const Notifications = () => {
  const { visible, setVisible, code } = useNotifications();

  const data = [
    {
      code: "auth/email-already-in-use",
      title: "Atenção",
      description: "E-mail ja cadastrado, tente novamente.",
      icon: <WarningAmberIcon  color="error"/>,
    },
    {
      code: "auth/weak-password",
      title: "Atenção",
      description: "Senha deve conter no mínimo 6 caracteres.",
      icon: <WarningAmberIcon  color="error"/>,
    },
    {
      code: "success",
      title: "Sucesso!",
      description: "Você se cadastrou com sucesso! Aproveite o sistema :)",
      icon: <CheckCircleOutlineIcon color="success"/>,
    },
  ];

  const unique = data.filter((e) => e.code === code);

  return (
    <Modal open={visible} onClose={() => setVisible(false)}>
      <>
        {unique.map((e) => (
          <Box display="grid" justifyItems="center">
            <S.BoxIcon>{e.icon}</S.BoxIcon>
            <Box component="h1">{e.title}</Box>
            <Box>{e.description}</Box>
          </Box>
        ))}
      </>
    </Modal>
  );
};
