import theme from "@/theme/theme";
import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxIcon = styled(Box)`
  display: grid;
  background-color: ${theme.palette.secondary.main};
  position: absolute;
  border-radius: 50%;
  right: 0;
  top: 0;
  margin: 10px;
  cursor: pointer;
`;
