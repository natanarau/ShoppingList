import Button from "@/Components/Button";
import Protected from "@/layout/Protected";
import React from "react";
import Alert from "@/Components/Alert";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "@/service/firebase";
import Modal from "@/Components/Modal";
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import Input from "@/Components/Input";
import { useAuth } from "@/hooks/useAuth";
import "firebase/firestore";
import Lists from "@/Components/Lists";
import { DataProps } from "@/types";
import { formatarDataHora } from "@/utils";
import Skeleton from "@mui/material/Skeleton";
import AutoComplete from "@/Components/AutoComplete";

export default function ListaDeCompras() {
  const [open, setOpen] = React.useState(false);
  const [listName, setListName] = React.useState("");
  const [marketplace, setMarketplace] = React.useState("");
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [data, setData] = React.useState<DataProps[]>([]);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const { userOn } = useAuth();
  const handleClose = () => {
    setOpen(false);
  };

  const createList = async () => {
    handleClose();
    setOpenBackdrop(true);
    const date = new Date();
    const newListData = {
      listName: listName,
      marketplace: marketplace,
      userId: auth.currentUser?.uid,
      createdAt: Timestamp.fromDate(date),
    };

    const userDocRef = doc(db, "lists", `${userOn?.id}`);
    const collectionRef = collection(userDocRef, "lists");

    await addDoc(collectionRef, newListData)
      .then(() => {
        setAlertOpen(true);
        setListName("");
        setMarketplace("");
        setOpenBackdrop(false);
      })
      .catch((err) => {
        console.log(err);
        setOpenBackdrop(false);
      });
  };

  const verifyDate = (createdAt: any) => {
    if (createdAt instanceof Timestamp) {
      return formatarDataHora(createdAt.toDate());
    } else {
      return createdAt;
    }
  };

  React.useEffect(() => {
    const handlerList = async () => {
      const userRef = doc(db, "lists", `${userOn?.id}`);
      const listsRef = collection(userRef, "lists");
      await getDocs(listsRef)
        .then((doc) => {
          const dataInicial: any = [];
          doc.forEach((doc) => {
            const date = verifyDate(doc.data().createdAt);

            dataInicial.push({
              id: doc.id,
              formattedDate: date,
              ...doc.data(),
            });
          });
          setData(dataInicial);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    handlerList();
  }, [userOn, alertOpen]);

  return (
    <Protected>
      <Backdrop
        sx={{ color: "#fff", zIndex: 1 }}
        open={openBackdrop}
        onClick={() => setOpenBackdrop(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Button
        variant="contained"
        sx={{ maxWidth: "250px" }}
        onClick={() => setOpen(true)}
      >
        Iniciar nova lista
      </Button>

      {data.length > 0 ? (
        <Lists data={data} />
      ) : (
        <Typography color="text.secondary">
          {!loading ? "Nenhuma lista encontrada" : <Skeleton height="80px" />}
        </Typography>
      )}

      <Alert
        title="Sucesso"
        description="Lista criada com sucesso"
        icon="success"
        open={alertOpen}
        cancel={() => setAlertOpen(false)}
      >
        <Button variant="contained" onClick={() => setAlertOpen(false)}>
          ok
        </Button>
      </Alert>
      <Modal open={open} onClose={handleClose}>
        <Box display="grid" gap="15px">
          <Typography typography="h1" fontSize="2em" fontWeight={700}>
            Criar uma nova <br />
            <Box component="span" color="secondary.main">
              lista de compras
            </Box>
          </Typography>
          <Input
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            className="light"
            title="Dê um nome a lista"
            placeholder="Digite aqui"
          />
          <Input
            value={marketplace}
            onChange={(e) => setMarketplace(e.target.value)}
            className="light"
            title="Em qual mercado vc está?"
            placeholder="Digite aqui"
          />
          <Box display="grid" justifyItems="flex-end" gap="10px">
            <AutoComplete label="Escolha o mercado" className="light" />
            <Button
              variant="outlined"
              sx={{ width: "120px", fontSize: "10px" }}
            >
              Add Mercado
            </Button>
          </Box>
          <Button variant="contained" onClick={createList}>
            Salvar
          </Button>
        </Box>
      </Modal>
    </Protected>
  );
}
