import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  fontFamily: 'Georgia',
  colors: {
    white: '#fff',
    blue: '#3366cc',
    brown: '#382d1d',
    darkGray: '#4c4c4c',
    lightGray: '#ededed',
    black: '#000',
    purple: '#481c48',
  },
  padding: '16px 32px',
  borderRadius: '12px',
};

export type ThemeType = typeof theme;

export const AppStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    font-family: ${({ theme }) => theme.fontFamily};
  }
  h1 {
   color: ${({ theme }) => theme.colors.brown};

  }
  h2 {
    color: ${({ theme }) => theme.colors.purple};
  }
  h1, h2, h3 {
    padding: 0;
    margin: 0;
  }
  ul {
    list-style-type: none;
  }
  div, p, span {
    color: ${({ theme }) => theme.colors.darkGray};
  }
  body {
    margin: 64px auto;
    max-width: 1280px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
`;

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AppStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
