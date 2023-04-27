import theme from "@/theme/theme";
import { Autocomplete as AutocompleteMui } from "@mui/material";
import styled, { css } from "styled-components";

export const Autocomplete = styled(AutocompleteMui)`
  label {
    display: none;
  }

  input {
    color: ${theme.palette.text.secondary} !important;
    padding: 0;
  }
  fieldset {
    border: none;
    border-bottom: 1px solid ${theme.palette.grey[400]};
    border-radius: 0;
    transition: 200ms;
    &:hover {
      border: 1px solid ${theme.palette.grey[400]} !important;
    }
  }
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
