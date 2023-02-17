import theme from "@/theme/theme";
import { Box } from "@mui/material";
import styled from "styled-components";

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: ${theme.palette.grey[800]};
  width: 300px;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
