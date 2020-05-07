import React from "react";

import { Layout } from "../components/layout";
import { Seo } from "../components/seo";

export const IndexPage = () => (
  <Layout>
    <Seo title="CV" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
);
