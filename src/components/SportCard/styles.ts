import { Box } from "@mui/material";
import styled from "styled-components";

export const SportButtonBox = styled(Box)<{ selected: boolean }>`
  width: 100px;
  height: 80px;
  background: ${(props) =>
    props.selected
      ? "linear-gradient(180deg, #54B052 0%, #287226 100%), linear-gradient(0deg, #54B052, #54B052)"
      : "linear-gradient(180deg, #232323 0%, #151515 100%)"};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 4px;
  padding: 4px 12px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  transition: 0.15s all linear;

  bottom: ${(props) => (props.selected ? "0" : "-6px")};
  &:hover {
    bottom: 0;
    cursor: pointer;
    background: linear-gradient(180deg, #232344 0%, #151515 100%);
  }
`;
