import React from 'react';
import Content from '../components/content';
import Header from '../components/header';
import SEO from '../components/seo';
import Theme from '../components/theme';

const IndexPage = () => (
  <Theme>
    <Header />
    <SEO />
    <Content />
    <footer>
      Créé avec
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Theme>
);

export default IndexPage;
