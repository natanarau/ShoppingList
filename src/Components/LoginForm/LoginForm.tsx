import React from "react";
import { Box } from "@mui/material";
import Input from "../Input";
import * as S from "./styles";
import Button from "@/Components/Button";
import { useAuth } from "@/hooks/useAuth";
import Notification from "../Notification";

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { Login } = useAuth();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Login({ email, password });
  };

  return (
    <>
    <S.Form onSubmit={(e) => handleLogin(e)}>
      <Box
        display="flex"
        gap="15px"
        alignItems="center"
        flexDirection="column"
        width="100%"
        maxWidth="400px"
        m="15px"
      >
        <Input
          type="email"
          title="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          title="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ maxWidth: "200px", width: "100%" }}
        >
          Entrar
        </Button>
      </Box>
    </S.Form>
    <Notification />
    </>
  );
}
