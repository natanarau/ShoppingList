import styled from "styled-components";
import { Box } from "@mui/material";
import theme from "@/theme/theme";

export const BoxField = styled(Box)`
    display: grid;
    background-color: ${theme.palette.grey[800]};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    padding: 10px;
`;
