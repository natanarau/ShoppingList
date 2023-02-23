import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { AuthenticationProvider } from "@/provider/AuthenticationContext";
import { Box } from "@mui/material";
import React from "react";

type Protectedtypes = {
  children: React.ReactNode;
};

export default function Protected({ children }: Protectedtypes) {
  return (
    <AuthenticationProvider>
      <Box display="flex">
        <Sidebar />
        <Box
          display="grid"
          alignContent="flex-start"
          gap="20px"
          data-id="content"
          maxWidth="1000px"
          width="100%"
          m="20px auto"
        >
          <Header />
          {children}
        </Box>
      </Box>
    </AuthenticationProvider>
  );
}
