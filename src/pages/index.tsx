import React from 'react';
import Experience from '../components/experience';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Theme from '../components/theme';

const IndexPage = () => (
  <Theme>
    <Layout>
      <SEO />
      <Experience />
    </Layout>
  </Theme>
);

export default IndexPage;
