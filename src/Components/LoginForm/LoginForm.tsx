import React from "react";
import { Box, CircularProgress } from "@mui/material";
import Input from "../Input";
import * as S from "./styles";
import Button from "@/Components/Button";
import { useAuth } from "@/hooks/useAuth";
import Notification from "../Notification";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { Login, loading } = useAuth();

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
          <S.BoxLink>
            <Link href="/registrar">Me cadastrar</Link>
          </S.BoxLink>
          <Button
            disabled={!email || !password}
            type="submit"
            variant="contained"
            sx={{
              maxWidth: "200px",
              width: "100%",
              backgroundColor: "info.main",
              ":hover": { backgroundColor: "info.light" },
            }}
          >
            {!loading ? "Entrar" : <CircularProgress size="24px" />}
          </Button>
        </Box>
      </S.Form>
      <Notification />
    </>
  );
}
