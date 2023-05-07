import styled, { css } from "styled-components";
import { Switch as SwitchMui } from "@mui/material";
import theme from "@/theme/theme";

export const Switch = styled(SwitchMui)`
  .Mui-checked {
    .MuiSwitch-thumb {
      background-color: ${theme.palette.info.light};
    }
  }
  .MuiSwitch-thumb {
    background-color: ${theme.palette.grey[200]};
  }
  .MuiSwitch-track {
    background-color: ${theme.palette.info.light} !important;
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
