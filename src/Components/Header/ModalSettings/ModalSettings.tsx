import React from "react";
import { Box } from "@mui/material";

type ModalSettingsTypes = {
  visible: boolean;
  children: React.ReactNode;
};

export default function ModalSettings({
  visible,
  children,
}: ModalSettingsTypes) {
  return (
    <>
      {visible && (
        <Box
          bgcolor="grey.200"
          position="absolute"
          borderRadius="25px"
          width="250px"
          height="300px"
          right="0"
          top="55px"
          boxShadow="rgb(0 0 0 / 35%) 0px 5px 15px"
          p="20px"
        >
          {children}
        </Box>
      )}
    </>
  );
}
