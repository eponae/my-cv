import React from 'react';
import App from '../components/app';
import AppProviders from '../components/appProviders';

const IndexPage = () => {
  return (
    <AppProviders>
      <App />
    </AppProviders>
  );
};

export default IndexPage;
