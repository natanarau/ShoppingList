import theme from "@/theme/theme";
import { Box } from "@mui/material";
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;
export const BoxLink = styled(Box)`
  a {
    text-decoration: none;
    color: ${theme.palette.grey[400]};
    font-weight: bold;
    transition: 0.3s;
    &:hover {
      color: ${theme.palette.grey[500]};
    }
  }
`;
