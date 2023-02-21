import { Box } from "@mui/material";
import React from "react";
import Input from "@/Components/Input";
import * as S from "./styles";
import Button from "../Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/service/firebase";
import { useNotifications } from "@/hooks/useNotifications";
import Notifications from "../Notification";

type Props = {};

export default function RegisterForm({}: Props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const {setVisible, setCode} = useNotifications()
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setCode("success")
        setVisible(true);
      })
      .catch((error) => {
        setCode(error.code)
        setVisible(true);
      });
  };

  return (
    <S.Wrapper>
      <Box
        component="img"
        src="images/logo.png"
        alt="Logo do sistema"
        width="150px"
        height="120px"
      />
      <S.RegisterFormBox onSubmit={(e) => handleLogin(e)}>
        <Input
          type="text"
          title="Nome Completo"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          title="E-mail"
          placeholder="mail@mail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          title="Senha"
          placeholder="Digite uma senha segura"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Input
          type="password"
          title="Confirme sua senha"
          placeholder="Digite sua senha novamente"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        {password != passwordConfirm && (
          <Box component="p" color="red">
            Senhas não confere
          </Box>
        )}
        <Button
          disabled={
            !email ||
            !password ||
            !passwordConfirm ||
            password !== passwordConfirm
          }
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "info.main",
            ":hover": { backgroundColor: "info.light" },
          }}
        >
          Cadastrar
        </Button>
      </S.RegisterFormBox>
      <Notifications />
    </S.Wrapper>
  );
}
