import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { useAuth } from "@/hooks/useAuth";
import { Box } from "@mui/material";
import React from "react";

type Protectedtypes = {
  children: React.ReactNode;
};

export default function Protected({ children }: Protectedtypes) {
  const { loggeding } = useAuth()

  if(!loggeding) {
    return <></>
  }

  return (
      <Box display="flex">
        <Sidebar />
        <Box
          display="grid"
          alignContent="flex-start"
          gap="20px"
          data-id="content"
          m="20px auto"
        >
          <Header />
          {children}
        </Box>
      </Box>
  );
}
