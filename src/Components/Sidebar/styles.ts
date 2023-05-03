import theme from "@/theme/theme";
import { MenuVisibleType } from "@/types";
import { Box } from "@mui/material";
import styled, { css } from "styled-components";

export const Session = styled(Box)`
  position: relative;
  display: flex;
  width: 250px;
  transition: 0.5s !important;
  ${(props) =>
    props.className === "indented" &&
    css`
      width: 80px;
      a {
        justify-content: center;
      }
      img {
        display: none;
      }
      .menu {
        width: 80px !important;
      }
      .listName {
        display: none;
      }
      .wrapperMenu {
        width: 80px;
      }
    `}

  @media only screen and (max-width: 925px) {
    display: none;
  }
`;

export const BoxMenu = styled(Box)`
  position: fixed;
  display: grid;
  align-content: space-between;
  height: 100vh;
  width: 250px;
  background-color: ${theme.palette.grey[800]};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  a {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 10px;
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

export const BoxIcon = styled(Box)`
  position: absolute;
  right: -30px;
  top: 10px;
  background-color: ${theme.palette.secondary.main};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  transition: 0.3s;
  .left {
    transform: rotate(180deg);
  }
  .right {
    transform: rotate(0deg);
  }
  &:hover {
    background-color: ${theme.palette.info.main};
  }
`;

export const BoxMenuMobile = styled(Box)`
  display: none;
  @media only screen and (max-width: 925px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    position: fixed;
    background-color: ${theme.palette.grey[800]};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 1;
    bottom: 0;
    height: 60px;
    a {
      display: flex;
      align-items: center;
      padding: 10px;
      gap: 10px;
      text-decoration: none;
      color: ${theme.palette.grey[400]};
      transition: 0.3s;

      &:hover {
        color: ${theme.palette.grey[200]};
      }
    }
  }
`;

export const ButtonAddList = styled(Box) `
  display: none;
  @media only screen and (max-width: 925px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    background-color: ${theme.palette.info.main};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
   top: -70px;
   right: 5px;
  }
`
