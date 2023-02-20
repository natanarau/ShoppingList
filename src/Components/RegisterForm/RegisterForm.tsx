import { Box } from "@mui/material";
import React from "react";
import Input from "@/Components/Input";
import * as S from "./styles";
import Button from "../Button";
import { instanceAuth } from "@/service/instance";
import Modal from "@/Modal";

type Props = {};

export default function RegisterForm({}: Props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible] = React.useState(false)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    instanceAuth.post(
      `accounts:signUp?key=${process.env.NEXT_PUBLIC_API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    ).then(() => setVisible(true));
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
        <Button
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
      <Modal open={visible} onClose={() => setVisible(false)}><div>teste</div></Modal>
    </S.Wrapper>
  );
}
