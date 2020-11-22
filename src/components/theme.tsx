import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  fontFamily: 'Georgia',
  colors: {
    white: '#fff',
    blue: '#3e86c4',
    brown: '#6f421c',
    darkGray: '#4c4c4c',
    lightGray: '#ededed',
    black: '#000',
  },
  padding: '32px',
  borderRadius: '12px',
  h2FontSize: '24px',
};

export type ThemeType = typeof theme;

export const breakpoints = {
  sm: 1024,
  md: 1315,
} as const;

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | string) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};

export const AppStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    font-family: ${({ theme }) => theme.fontFamily};
  }
  h1 {
   color: ${({ theme }) => theme.colors.blue};
   font-size: 32px;
  }
  h2 {
    color: ${({ theme }) => theme.colors.brown};
    font-size: ${({ theme }) => theme.h2FontSize};
  }
  h3 {
    font-size: 16px;
  }
  h1, h2, h3, p, ul, li {
    padding: 0;
    margin: 0;
  }
  h1, h2, h3 {
    padding-bottom: 16px;
  }
  ul {
    list-style-type: none;
  }
  div, p, span {
    color: ${({ theme }) => theme.colors.darkGray};
  }
  a {
    color: ${({ theme }) => theme.colors.blue};
  }
  body {
    margin: 64px auto;
    max-width: 1280px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    ${mediaQueries('md')`max-width: 90%; margin: 32px auto;`}
  }
`;

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AppStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
