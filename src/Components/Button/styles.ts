import styled, { css } from "styled-components";
import { Button as ButtonUi } from "@mui/material";
import theme from "@/theme/theme";

export const Button = styled(ButtonUi)`
  font-weight: bold;
  transition: 0.3s;
  ${(props) => {
    switch (props.variant) {
      case "contained":
        return css`
          background-color: ${theme.palette.info.main};
          &:hover {
            background-color: ${theme.palette.info.main};
            opacity: 80%;
          }
        `;
      case "outlined":
        return css`
          background-color: ${theme.palette.info.main};
          &:hover {
            background-color: ${theme.palette.info.main};
            opacity: 80%;
          }
        `;
      case "text":
        return css`
          background-color: ${theme.palette.info.main};
          &:hover {
            background-color: ${theme.palette.info.main};
            opacity: 80%;
          }
        `;
    }
  }}

  :disabled {
    background-color: ${theme.palette.grey[500]} !important;
  }
`;
