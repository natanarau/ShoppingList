import styled, { css } from "styled-components";
import theme from "@/theme/theme";
import { Box, InputBase } from "@mui/material";

export const BoxInput = styled(Box)``;

export const Input = styled(InputBase)`
  ${(props) => {
    switch (props.className) {
      case "dark":
        return css`
          border: 1px solid ${theme.palette.grey[700]} !important;
          background-color: ${theme.palette.grey[800]} !important;
          color: ${theme.palette.text.primary} !important;
          padding: 0.2rem 0.8rem !important;
          font-size: 1rem;
          border-radius: 5px;
          &:hover {
            border-color: ${theme.palette.grey[600]};
          }
          &:focus {
            outline: none;
            box-shadow: 0px 0px 0px 1px ${theme.palette.grey[600]};
          }
        `;
      case "light":
        return css`
          border: none;
          border-bottom: 1px solid ${theme.palette.grey[700]} !important;
          background-color: transparent !important;
          color: ${theme.palette.text.secondary} !important;
          font-size: 1rem;
        `;
    }
  }}
`;
export const Label = styled.label`
  ${(props) => {
    switch (props.className) {
      case "light":
        return css`
          color: ${theme.palette.text.secondary} !important;
        `;
      case "dark":
        return css`
          color: ${theme.palette.text.primary} !important;
        `;
    }
  }}
  font-weight: 600;
  font-size: 0.9rem;
`;
