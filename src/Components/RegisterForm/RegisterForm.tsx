import { Box, CircularProgress } from "@mui/material";
import React from "react";
import Input from "@/Components/Input";
import * as S from "./styles";
import Button from "../Button";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/service/firebase";
import { useNotifications } from "@/hooks/useNotifications";
import Notifications from "../Notification";
import Link from "next/link";

type Props = {};

export default function RegisterForm({}: Props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const { setVisible, setCode, code } = useNotifications();
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = auth.currentUser;
        if (user) {
          updateProfile(user, {
            displayName: name,
          });
          sendEmailVerification(user).then(() => {
            setCode("success");
            setVisible(true);
          });
          setLoading(false);
          setName("");
          setEmail("");
          setPassword("");
          setPasswordConfirm("");
        }
      })
      .catch((error) => {
        setCode(error.code);
        setVisible(true);
        setLoading(false);
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
        {password && passwordConfirm && password != passwordConfirm && (
          <Box component="p" color="red">
            Senhas não confere
          </Box>
        )}
        <S.BoxSubmit>
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
              width: "100%",
              maxWidth: "150px",
              backgroundColor: "info.main",
              ":hover": { backgroundColor: "info.light" },
            }}
          >
            {!loading ? "Cadastrar" : <CircularProgress size="24px" />}
          </Button>
          {code === "success" && <Link href="/login">Entrar no login</Link>}
        </S.BoxSubmit>
      </S.RegisterFormBox>
      <Notifications email={email} />
    </S.Wrapper>
  );
}
