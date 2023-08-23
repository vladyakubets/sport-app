import { Button, TableCell, TableHead } from "@mui/material";
import styled from "styled-components";

export const CustomTableHead = styled(TableHead)`
  height: 48px;
`;
export const CustomTableCell = styled(TableCell)`
  &.MuiTableCell-root {
    color: white;
  }
`;

export const OddsButton = styled(Button)<{ isup?: string }>`
  &.MuiButtonBase-root {
    width: 40px;
    min-width: 40px;
    height: 40px;
    background: linear-gradient(180deg, #f1f1f1 0%, #9e9e9e 100%);
    border-radius: 3px;
    margin: 2px;
    position: relative;
    color: black;
    border-top: 2px solid linear-gradient(180deg, #54b052 0%, #287226 100%);
    border-bottom: 2px solid linear-gradient(180deg, #c50f2d 0%, #571114 100%);
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(180deg, #54b052 0%, #287226 100%);
      border-radius: 3px;
      display: ${(props) => (props.isup === "u" ? "block" : "none")};
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(180deg, #c50f2d 0%, #571114 100%);
      border-radius: 3px;
      display: ${(props) => (props.isup !== "u" ? "block" : "none")};
    }
  }
`;
