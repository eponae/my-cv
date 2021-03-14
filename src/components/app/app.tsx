import React, { useContext } from 'react';
import Content from './content';
import Footer from '../footer/footer';
import Header from '../header/header';
import { LanguageContext } from './languageContext';
import { getSiteData } from '../../utils/dataUtils';

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
