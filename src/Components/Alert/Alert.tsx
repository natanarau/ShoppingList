import React from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type AlertProps = {
  title: string;
  description: string;
  icon: string;
  open: boolean;
  children: React.ReactNode;
  cancel: () => void;
};

export default function Alert({
  title,
  description,
  icon,
  open,
  cancel,
  children,
}: AlertProps) {
  return (
    <Dialog open={open} onClose={cancel} className="teste">
      <Box width="350px" p="20px">
        <Box display="grid" alignItems="center" justifyItems="center">
          {icon === "warning" && (
            <ReportProblemIcon color="warning" sx={{ fontSize: "60px" }} />
          )}
          {icon === "success" && (
            <CheckCircleOutlineIcon color="success" sx={{ fontSize: "60px" }} />
          )}
          <DialogTitle
            color="grey.800"
            fontWeight={600}
            fontSize="28px"
            id="responsive-dialog-title"
            padding="0px"
            sx={{ padding: "0" }}
          >
            {title}
          </DialogTitle>
        </Box>
        <DialogContent>
          <DialogContentText textAlign="center">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          {children}
        </DialogActions>
      </Box>
    </Dialog>
  );
}
