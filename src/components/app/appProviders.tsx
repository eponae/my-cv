import React, { FC, useState } from 'react';
import { defaultLanguage, Language, LanguageContext } from './languageContext';
import Theme from './theme';
import SEO from '../seo';

const AppProviders: FC = ({ children }) => {
  const [lang, setLang] = useState<Language>(defaultLanguage);
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, selectedCompanyIndex, setSelectedCompanyIndex }}
    >
      <Theme>
        <SEO />
        {children}
      </Theme>
    </LanguageContext.Provider>
  );
};

export default AppProviders;
