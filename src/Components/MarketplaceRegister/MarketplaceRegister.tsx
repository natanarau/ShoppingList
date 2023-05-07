import React from "react";
import { Box, Typography } from "@mui/material";
import Modal from "../Modal";
import useHash from "@/hooks/useHash";
import Input from "../Input";
import Switch from "../Switch";
import Button from "../Button";

export default function MarketplaceRegister() {
  const { hash, mRemoveQuery } = useHash();
  const [checked, setChecked] = React.useState(false);

  return (
    <Modal
      open={hash === "cadastrar-mercado"}
      onClose={mRemoveQuery}
      maxWidth="450px"
    >
      <Box display="grid" gap="35px">
        <Typography typography="h1" fontSize="30px" fontWeight={700}>
          Cadastrar novo <br />
          <Box component="span" fontSize="1em" color="secondary.main">
            Mercado
          </Box>
        </Typography>
        <Box display="grid" gap="15px">
          <Input title="Qual o nome do Mercado? *" className="light" required />
          <Input title="Telefone:" className="light" />
          <Switch
            className="light"
            title="Deseja inserir endereço?"
            checked={checked}
            onChange={(e) => setChecked(e.currentTarget.checked)}
          />
          {checked && (
            <Box display="flex" gap="25px" flexWrap="wrap" alignItems="flex-start">
              <Box display="grid" minWidth="100px" gap="15px">
                <Input title="Cep" className="light" />
                <Input title="Rua" className="light" />
                <Input title="Bairro" className="light" />
              </Box>
              <Box display="grid" minWidth="100px" gap="15px">
                <Input title="Cidade" className="light" />
                <Input title="Estado" className="light" />
              </Box>
            </Box>
          )}
        </Box>
        <Button
          variant="contained"
          sx={{ maxWidth: "200px", width: "100%", margin: "auto" }}
        >
          Continuar
        </Button>
      </Box>
    </Modal>
  );
}
