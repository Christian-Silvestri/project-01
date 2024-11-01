//import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { styled } from '@mui/system';

export const AppLayout = styled(Box)`
  height: 100vh;
  //height: 400px;
  overflow-y: auto;
  box-sizing: border-box;
`;

/* export const AppContainer = styled(Box)`
  padding: 24px;
`; */

export const AppContainer = styled(Box)(({ theme }) => ({
  padding: '24px',
  [theme.breakpoints.down('md')]: {
    padding: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px',
  },
}));
