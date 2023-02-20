import { Box } from "@mui/material";
import React from "react";
import Input from "@/Components/Input";
import * as S from "./styles";
import Button from "../Button";

type Props = {};

export default function RegisterForm({}: Props) {
  return (
    <S.Wrapper>
      <Box
        component="img"
        src="images/logo.png"
        alt="Logo do sistema"
        width="150px"
        height="120px"
      />
      <S.RegisterFormBox>
        <Input
          type="text"
          title="Nome Completo"
          placeholder="Digite seu nome"
        />
        <Input type="email" title="E-mail" placeholder="mail@mail.com" />
        <Input
          type="password"
          title="Senha"
          placeholder="Digite uma senha segura"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "info.main",
            ":hover": { backgroundColor: "info.light" },
          }}
        >
          Cadastrar
        </Button>
      </S.RegisterFormBox>
    </S.Wrapper>
  );
}
