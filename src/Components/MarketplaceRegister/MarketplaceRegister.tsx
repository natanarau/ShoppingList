import React from "react";
import { Box, Typography } from "@mui/material";
import Modal from "../Modal";
import useHash from "@/hooks/useHash";
import Input from "../Input";
import Switch from "../Switch";
import Button from "../Button";
import { Timestamp, addDoc, collection, doc } from "firebase/firestore";
import { db } from "@/service/firebase";
import { useAuth } from "@/hooks/useAuth";
import Alert from "../Alert";

export default function MarketplaceRegister() {
  const { hash, mRemoveQuery } = useHash();
  const [checked, setChecked] = React.useState(false);
  const [name, setName] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");
  const [road, setRoad] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [neighborhood, setNeighborhood] = React.useState("");
  const [confirm, setConfirm] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const { userOn } = useAuth();

  const createMarketplace = async () => {
    mRemoveQuery();
    // setOpenBackdrop(true);
    const date = new Date();
    const newListData = {
      name: name,
      tel: tel,
      zipCode: zipCode,
      road: road,
      city: city,
      state: state,
      neighborhood: neighborhood,
      createdAt: Timestamp.fromDate(date),
      updatedAt: Timestamp.fromDate(date),
    };

    const userDocRef = doc(db, "marketplace", `${userOn?.id}`);
    const collectionRef = collection(userDocRef, "marketplace");

    await addDoc(collectionRef, newListData)
      .then(() => {
        setConfirm(false);
        setName("");
        setTel("");
        setZipCode("");
        setRoad("");
        setCity("");
        setState("");
        setNeighborhood("");
      })
      .catch((err) => {
        console.log(err);
        // setOpenBackdrop(false);
      });
  };

  return (
    <>
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
            <Input
              title="Qual o nome do Mercado? *"
              className="light"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              title="Telefone:"
              className="light"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <Switch
              className="light"
              title="Deseja inserir endereço?"
              checked={checked}
              onChange={(e) => setChecked(e.currentTarget.checked)}
            />
            {checked && (
              <Box
                display="flex"
                gap="25px"
                flexWrap="wrap"
                alignItems="flex-start"
              >
                <Box display="grid" minWidth="100px" gap="15px">
                  <Input
                    title="Cep"
                    className="light"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                  <Input
                    title="Rua"
                    className="light"
                    value={road}
                    onChange={(e) => setRoad(e.target.value)}
                  />
                  <Input
                    title="Bairro"
                    className="light"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                  />
                </Box>
                <Box display="grid" minWidth="100px" gap="15px">
                  <Input
                    title="Cidade"
                    className="light"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <Input
                    title="Estado"
                    className="light"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </Box>
              </Box>
            )}
          </Box>
          <Typography typography="p" fontSize="12px">
            Campos com * são obrigatórios.
          </Typography>
          <Button
            variant="contained"
            sx={{ maxWidth: "200px", width: "100%", margin: "auto" }}
            disabled={name === ""}
            onClick={() => setConfirm(true)}
          >
            Continuar
          </Button>
        </Box>
      </Modal>
      <Alert
        title="Atenção"
        description={`Deseja cadastrar o mercado ${name}?`}
        icon="warning"
        open={confirm}
        cancel={() => setConfirm(false)}
      >
        <Button
          variant="contained"
          onClick={() => {
            setConfirm(false);
            createMarketplace();
            setAlert(true);
          }}
        >
          ok
        </Button>
      </Alert>
      <Alert
        title="Sucesso"
        description={`Você cadastrou o mercado com sucesso.`}
        icon="success"
        open={alert}
        cancel={() => setAlert(false)}
      >
        <Button
          variant="contained"
          onClick={() => {
            setAlert(false);
          }}
        >
          ok
        </Button>
      </Alert>
    </>
  );
}
