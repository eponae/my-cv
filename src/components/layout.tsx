/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LayoutWrapper>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Créé avec
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
