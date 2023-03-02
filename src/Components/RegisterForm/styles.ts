import theme from "@/theme/theme";
import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const RegisterFormBox = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 10px;
  gap: 15px;
`;

export const BoxSubmit = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    text-decoration: none;
    color: ${theme.palette.grey[400]};
    font-weight: 600;
  }
`;
