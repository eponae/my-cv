import React, { useContext } from 'react';
import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import { LanguageContext } from '../components/languageContext';
import { getSiteData } from '../utils/dataUtils';

const App = () => {
  const { lang } = useContext(LanguageContext);
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
    <>
      <Header data={{ summary, contact, basics, language }} />
      <Content
        data={{
          education,
          experience,
          skills,
          hobbies,
          seeMore: language.seeMore,
        }}
      />
      <Footer footer={basics.footer} />
    </>
  );
};

export default App;
