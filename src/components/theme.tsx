import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  fontFamily: 'Georgia',
  colors: {
    white: '#fff',
    red: '#bb7866',
    brown: '#382d1d',
    gray: '4c4c4c',
    black: '#000',
    purple: '#481c48',
  },
};

export type ThemeType = typeof theme;

export const AppStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AppStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
