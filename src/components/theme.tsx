import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

export const breakpoints = {
  sm: 870,
} as const;

export const screenDimensions = {
  smScreen: `(max-width: ${breakpoints.sm}px)`,
} as const;

const theme = {
  fontFamily: 'Source Sans Pro',
  colors: {
    white: '#fff',
    black: '#000',
    orange: '#e0694e',
    lightBlue: '#87b9e7',
    darkBlue: '#191970',
    orangeBackground: '#fef9f8',
  },
  maxContentWidth: '800px',
  paddingSpace: '24px',
  printPaddingSpace: '8px',
};

export type ThemeType = typeof theme;

export const AppStyles = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  * {
    font-family: ${({ theme }) => theme.fontFamily};
  }
  h1, h2, h3, p, ul, li {
    padding: 0;
    margin: 0;
  }
  ul {
    list-style-type: none;
  }
  div, p, span {
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    font-weight: 400;
  }
  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: underline;
  }
  button {
    border: 0;
    padding: 0;
    margin: 0;
    background: none;
    cursor: pointer;
  }
  body {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
  #___gatsby {
    width: 100%;
  }
`;

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AppStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
