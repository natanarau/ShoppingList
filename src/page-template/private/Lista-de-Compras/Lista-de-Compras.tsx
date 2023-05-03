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
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "@/service/firebase";
import Modal from "@/Components/Modal";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Backdrop,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import Input from "@/Components/Input";
import { useAuth } from "@/hooks/useAuth";
import "firebase/firestore";
import Lists from "@/Components/Lists";
import { DataProps } from "@/types";
import { formatarDataHora } from "@/utils";
import Skeleton from "@mui/material/Skeleton";
import AutoComplete from "@/Components/AutoComplete";

type Option = {
  id: number;
  label: string;
};

export default function ListaDeCompras() {
  const [open, setOpen] = React.useState(false);
  const [listName, setListName] = React.useState("");
  const [marketplace, setMarketplace] = React.useState<Option | null>(null);
  const [marketplaceValue, setMarketplaceValue] = React.useState("");
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
      marketplace: marketplace?.label,
      userId: auth.currentUser?.uid,
      createdAt: Timestamp.fromDate(date),
    };

    const userDocRef = doc(db, "lists", `${userOn?.id}`);
    const collectionRef = collection(userDocRef, "lists");

    await addDoc(collectionRef, newListData)
      .then(() => {
        setAlertOpen(true);
        setListName("");
        setMarketplace(null);
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
      const q = query(listsRef, orderBy("createdAt", "desc"));
      await getDocs(q)
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

  const handleChange = (event: any, newValue: Option | null) => {
    setMarketplace(newValue);
  };

  return (
    <Protected>
      <Box>
        <Backdrop
          sx={{ color: "#fff", zIndex: 1 }}
          open={openBackdrop}
          onClick={() => setOpenBackdrop(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Button
          variant="contained"
          sx={{ maxWidth: "250px", marginBottom: "10px" }}
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
      </Box>
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
      <Modal open={open} onClose={handleClose} maxWidth="350px">
        <Box display="flex" flexDirection="column" gap="35px">
          <Typography typography="h1" fontSize="30px" fontWeight={700}>
            Criar uma nova <br />
            <Box component="span" fontSize="1em" color="secondary.main">
              lista de compras
            </Box>
          </Typography>
          <Box display="grid" gap="20px">
            <Input
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              className="light"
              title="Dê um nome a lista"
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyItems="flex-end"
              gap="10px"
            >
              <AutoComplete
                label="Escolha o mercado"
                className="light"
                value={marketplace}
                onChange={handleChange}
              />

              <Button
                variant="outlined"
                sx={{ maxWidth: "145px", fontSize: "12px" }}
              >
                Cadastrar Mercado
              </Button>
            </Box>
          </Box>
          <Button
            variant="contained"
            onClick={createList}
            disabled={!marketplace || !listName}
            sx={{maxWidth: "150px", width: "100%", margin: "auto"}}
          >
            Salvar
          </Button>
        </Box>
      </Modal>
    </Protected>
  );
}
