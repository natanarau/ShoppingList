import theme from "@/theme/theme";
import { Box } from "@mui/material";
import styled from "styled-components";

export const BoxMenu = styled(Box)`
  display: grid;
  align-content: space-between;
  height: 100vh;
  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 10px 10px 10px 20px;
    gap: 10px;
    text-decoration: none;
    color: ${theme.palette.grey[400]};
    transition: 0.3s;

    &:hover {
      color: ${theme.palette.grey[200]};
    }
  }
  .borderEffect {
    color: ${theme.palette.grey[200]};
    border-left: 10px solid ${theme.palette.info.main};
  }
`;
