import Sidebar from "@/Components/Sidebar";
import SquareField from "@/Components/SquareField";
import Protected from "@/layout/Protected";
import { Box } from "@mui/material";
import React from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChartList from "@/Components/ChartList";

export default function Home() {
  return (
    <Protected>
      <Box display="flex" gap="10px">
        <SquareField width="280px" height="150px">
          <Box
            display="flex"
            justifyContent="flex-end"
            gap="20px"
            alignItems="center"
          >
            <Box
              component="h2"
              fontSize="18px"
              color="text.secondary"
              m="0"
              textAlign="center"
            >
              Total de Alimentos
            </Box>
            <FastfoodIcon color="secondary" sx={{ fontSize: "50px" }} />
          </Box>
          <Box
            component="h4"
            fontSize="40px"
            textAlign="center"
            color="text.primary"
            m="0"
          >
            154
          </Box>
        </SquareField>
        <SquareField width="280px" height="150px">
          <Box
            display="flex"
            justifyContent="flex-end"
            gap="20px"
            alignItems="center"
          >
            <Box
              component="h2"
              fontSize="18px"
              color="text.secondary"
              m="0"
              textAlign="center"
            >
              Lista de compra
            </Box>
            <ShoppingCartIcon color="secondary" sx={{ fontSize: "50px" }} />
          </Box>
          <Box
            component="h4"
            fontSize="40px"
            color="text.primary"
            m="0"
            textAlign="center"
          >
            1
          </Box>
          <Box
            component="h4"
            fontSize="1em"
            fontWeight={500}
            textAlign="center"
            color="text.secondary"
          >
            Gasto previsto: R$ 1.254,26
          </Box>
        </SquareField>
      </Box>
      <Box width="60vw" height="60vh">
        <ChartList />
      </Box>
    </Protected>
  );
}
