import { Box } from "@mui/material";
import styled from "styled-components";

export const AppTopBar = styled(Box)`
  height: 70px;
  display: flex;
  align-items: center;
`;
export const Logo = styled(Box)`
  img {
    height: 100%;
    object-fit: contain;
  }
`;
export const AppMainSection = styled(Box)`
  height: calc(100vh - 140px);
  color: white;
`;
