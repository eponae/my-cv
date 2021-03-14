import React from 'react';
import App from '../components/app/app';
import AppProviders from '../components/app/appProviders';

const IndexPage = () => {
  return (
    <AppProviders>
      <App />
    </AppProviders>
  );
};

export default IndexPage;
