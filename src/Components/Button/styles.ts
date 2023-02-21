import styled from "styled-components";
import { Box, Button as ButtonUi } from "@mui/material";
import theme from "@/theme/theme";

export const Button = styled(ButtonUi)`
  font-weight: bold;
  :disabled {
    background-color: ${theme.palette.grey[500]} !important;
  }
`;
