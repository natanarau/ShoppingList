import theme from "@/theme/theme";
import { Box } from "@mui/material";
import styled from "styled-components";

export const Content = styled(Box)`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.grey[800]};
  width: 250px;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const BoxIcon = styled(Box)`
  position: absolute;
  right: -13px;
  top: 10px;
  background-color: ${theme.palette.secondary.main};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  transition: 0.3s;
  &:hover {
    background-color: ${theme.palette.info.main};
  }
`;
