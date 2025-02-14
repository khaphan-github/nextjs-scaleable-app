"use client"
import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

import { ReactNode } from 'react';
import AppAppBar from './components/AppAppBar';

interface GuestLayoutProps {
  children: ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar>
      </AppAppBar>
      <Container>
        <Box my={4}>
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default GuestLayout;