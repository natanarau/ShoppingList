import React from "react";
import { Box } from "@mui/material";
import SquareField from "@/Components/SquareField";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ModalSettings from "./ModalSettings";
import CloseIcon from "@mui/icons-material/Close";
import * as S from "./styles";
import Button from "../Button";
import { useAuth } from "@/hooks/useAuth";
import useHash from "@/hooks/useHash";
import Modal from "../Modal";
import MarketplaceRegister from "../MarketplaceRegister";

export default function Header() {
  const [settingsVisible, setSettingsVisible] = React.useState(false);
  const { Logout, userOn } = useAuth();
  const { hash, mRemoveQuery } = useHash();
  
  return (
    <>
      <SquareField
        height="30px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <NotificationsActiveIcon
          sx={{
            color: "text.secondary",
            cursor: "pointer",
            transition: "0.3s",
            ":hover": { color: "text.primary" },
          }}
        />
        <Box display="flex" alignItems="center" gap="10px">
          <Box
            component="h4"
            color="text.secondary"
            fontSize="15px"
            fontWeight={600}
            m="0"
          >
            {userOn?.displayName}
          </Box>
          <SettingsIcon
            sx={{
              color: "text.secondary",
              cursor: "pointer",
              transition: "0.3s",
              ":hover": { color: "text.primary" },
            }}
            onClick={() => setSettingsVisible(!settingsVisible)}
          />
        </Box>
        <ModalSettings visible={settingsVisible}>
          <S.BoxIcon onClick={() => setSettingsVisible(false)}>
            <CloseIcon sx={{ margin: "2px" }} />
          </S.BoxIcon>
          <Button variant="contained" type="button" onClick={() => Logout()}>
            Sair
          </Button>
        </ModalSettings>
      </SquareField>
      
      <MarketplaceRegister />
    </>
  );
}
