import React from 'react';
import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import SEO from '../components/seo';
import Theme from '../components/theme';

const IndexPage = () => (
  <Theme>
    <Header />
    <SEO />
    <Content />
    <Footer />
  </Theme>
);

export default IndexPage;
