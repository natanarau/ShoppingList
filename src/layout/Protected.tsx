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
          gap="30px"
          data-id="content"
          m="20px auto"
          p="20px"
          maxWidth="1000px"
          flex={1}
        >
          <Header />
          {children}
        </Box>
      </Box>
  );
}
