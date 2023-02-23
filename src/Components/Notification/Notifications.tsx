import React, { useContext } from "react";
import { useNotifications } from "@/hooks/useNotifications";
import Modal from "@/Modal";
import { Box } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import * as S from './styles'

type NotificatioType = {
  email?: string
}

export const Notifications = ({ email }: NotificatioType) => {
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
      description: <>Acesse seu e-mail <b>{email}</b> e confirme o cadastro.</>, 
      icon: <CheckCircleOutlineIcon color="success"/>,
    },
    {
      code: 401,
      title: "Atenção!",
      description: <>Você ainda não validou seu e-mail, verifique sua caixa de entrada e confirme o cadastro.</>, 
      icon: <WarningAmberIcon  color="error"/>,
    },
  ];

  const unique = data.filter((e) => e.code === code);

  return (
    <Modal open={visible} onClose={() => setVisible(false)}>
      <>
        {unique.map((e, index) => (
          <Box key={index} display="grid" justifyItems="center">
            <S.BoxIcon>{e.icon}</S.BoxIcon>
            <Box component="h1">{e.title}</Box>
            <Box>{e.description}</Box>
          </Box>
        ))}
      </>
    </Modal>
  );
};
