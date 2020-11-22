import React, { FC } from 'react';
import styled from 'styled-components';
import Header from './header';

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 48px 48px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Layout: FC = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <Header />
        <main>{children}</main>
        <footer>
          Créé avec
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
