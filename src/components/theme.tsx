import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  fontFamily: 'Source Sans Pro',
  colors: {
    white: '#fff',
    black: '#000',
    orange: '#e0694e',
    lightBlue: '#87b9e7',
    orangeBackground: '#fef9f8',
  },
  padding: '32px',
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
  }
  a {
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
  }
  body {
    margin: 64px 0;
    max-width: 1280px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    ${mediaQueries('md')`max-width: 90%; margin: 32px 0;`}
  }
`;

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AppStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
