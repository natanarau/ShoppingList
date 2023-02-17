import Sidebar from "@/Components/Sidebar";
import SquareField from "@/Components/SquareField";
import Protected from "@/layout/Protected";
import { Box } from "@mui/material";
import React from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";

export default function Home() {
  return (
    <Protected>
      <Box>
        <SquareField width="280px" height="150px">
          <Box
            display="flex"
            justifyContent="center"
            gap="20px"
            alignItems="center"
          >
            <Box component="h2" fontSize="18px" color="text.secondary" m="0" textAlign="center">
              Total de Alimentos
            </Box>
            <FastfoodIcon color="secondary" sx={{ fontSize: "50px" }} />
          </Box>
          <Box component="h4" fontSize="40px" textAlign="center" color="text.primary" m="0">
            154
          </Box>
        </SquareField>
      </Box>
    </Protected>
  );
}
