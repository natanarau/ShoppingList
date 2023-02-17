import theme from "@/theme/theme";
import { Box, InputBase } from "@mui/material";
import styled from "styled-components";

export const BoxInput = styled(Box)`
`;

export const Input = styled(InputBase)`
   border: 1px solid ${theme.palette.grey[700]} !important;
   background-color: ${theme.palette.grey[800]} !important;
   color: ${theme.palette.text.primary} !important;
   padding: .2rem .8rem !important;
   font-size: 1rem;
   border-radius: 5px;
   &:hover {
    border-color: ${theme.palette.grey[600]};
   };
   &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 1px ${theme.palette.grey[600]};
   }
`
export const Label = styled.label`
   color: ${theme.palette.text.primary};
   font-weight: 600;
   font-size: .9rem;
`