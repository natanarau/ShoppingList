import React from "react";
import { Box } from "@mui/material";
import Input from "../Input";
import * as S from "./styles";
import Button from "@/Components/Button";

export default function LoginForm() {
  const handleLogin = () => {
    console.log("teste ");
  };
  return (
    <S.Form onSubmit={handleLogin}>
      <Box
        display="flex"
        gap="15px"
        alignItems="center"
        flexDirection="column"
        width="100%"
        maxWidth="400px"
        m="15px"
      >
        <Input type="email" title="Usuário" />
        <Input type="password" title="Senha" />
        <Button variant="contained" sx={{ maxWidth: "200px", width: "100%" }}>
          Entrar
        </Button>
      </Box>
    </S.Form>
  );
}
