import { Box } from "@mui/material";
import React from "react";
import SquareField from "../SquareField";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

type Props = {};

export default function Header({}: Props) {
  return (
    <SquareField
      height="30px"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
          Natã Araujo
        </Box>
        <SettingsIcon
          sx={{
            color: "text.secondary",
            cursor: "pointer",
            transition: "0.3s",
            ":hover": { color: "text.primary" },
          }}
        />
      </Box>
    </SquareField>
  );
}
