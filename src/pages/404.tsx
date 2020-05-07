import React, { FC } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page non trouvée" />
    <h1>Cette page n'existe pas</h1>
  </Layout>
);

export default NotFoundPage;
