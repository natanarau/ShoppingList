import theme from "@/theme/theme";
import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  position: relative;
  background-color: ${theme.palette.grey[100]};
  padding: 30px;
  border-radius: 20px;
`;

export const BoxButton = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.palette.grey[200]};
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    opacity: 80%;
  }
`;
