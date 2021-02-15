import React, { createContext, useState } from 'react';
import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import {
  defaultLanguage,
  Language,
  LanguageContext,
} from '../components/languageContext';
import SEO from '../components/seo';
import Theme from '../components/theme';
import { getSiteData } from '../utils/dataUtils';

const IndexPage = () => {
  const [lang, setLang] = useState<Language>(defaultLanguage);
  const {
    summary,
    contact,
    basics,
    language,
    education,
    experience,
    skills,
    hobbies,
  } = getSiteData(lang);

  return (
    <LanguageContext.Provider value={lang}>
      <Theme>
        <Header
          setLang={setLang}
          data={{ summary, contact, basics, language }}
        />
        <SEO />
        <Content data={{ education, experience, skills, hobbies }} />
        <Footer />
      </Theme>
    </LanguageContext.Provider>
  );
};

export default IndexPage;
