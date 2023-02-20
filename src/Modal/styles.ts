import theme from "@/theme/theme";
import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  position: relative;
  background-color: ${theme.palette.grey[300]};
  max-width: 60vw;
  max-height: 80vh;
  padding: 30px;
  border-radius: 20px;
`;
