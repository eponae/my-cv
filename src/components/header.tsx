import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import {
  ContactType,
  LanguageType,
  LightBasicsType,
  SummaryType,
} from '../types/types';
import Ida from '../images/ida-plant.svg';
import { screenDimensions } from './theme';
import Dot from './dot';
import { defaultLanguage, Language, LanguageContext } from './languageContext';

type Props = {
  setLang: (lang: Language) => void;
  data: {
    summary: SummaryType;
    basics: LightBasicsType;
    language: LanguageType;
    contact: ContactType;
  };
};

const HeaderWrapper = styled.header`
  padding: ${({ theme }) => `48px 0 ${theme.paddingSpace}`};
  max-width: ${({ theme }) => theme.maxContentWidth};
  margin: 0 auto;
  @media ${screenDimensions.smScreen} {
    max-width: 90%;
  }
`;

const Contact = styled.li`
  &:not(:first-child) {
    padding-left: 64px;
  }
`;

const ContactList = styled.ul`
  display: flex;
  list-style-position: inside;
  padding: 32px 0;
`;

const TitleName = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.orange};
`;

const TitleJob = styled.h2`
  font-weight: 900;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.orange};
`;

const Summary = styled.div`
  max-width: 625px;
  padding-right: 42px;
  @media ${screenDimensions.smScreen} {
    max-width: unset;
    padding-right: 0;
  }
`;

const SummaryWrapper = styled.div`
  display: flex;
`;

const IdaWrapper = styled(Ida)`
  @media ${screenDimensions.smScreen} {
    display: none;
  }
`;

const TitleHeader = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  @media ${screenDimensions.smScreen} {
    flex-flow: column-reverse nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const SwitchLangButton = styled.button`
  font-weight: 400;
  font-size: 16px;
  text-decoration: underline;
  color: #191970;
`;

const Header: FC<Props> = ({
  setLang,
  data: { summary, language, basics, contact },
}) => {
  const currentLanguage = useContext(LanguageContext);
  const switchLanguage = () => {
    if (currentLanguage === defaultLanguage) {
      return setLang('en');
    }
    return setLang(defaultLanguage);
  };

  return (
    <HeaderWrapper>
      <TitleHeader>
        <TitleName>{basics.name}</TitleName>
        <SwitchLangButton onClick={switchLanguage}>
          {language.description}
        </SwitchLangButton>
      </TitleHeader>
      <TitleJob>{basics.job}</TitleJob>
      <TitleJob>{basics.mode}</TitleJob>
      <ContactList>
        {contact.list.map((link) => (
          <Contact key={`${link.id}`}>
            <Dot hasContactColor />
            <a href={link.link} target="_blank" rel="noreferrer noopener">
              {link.name}
            </a>
          </Contact>
        ))}
      </ContactList>
      <SummaryWrapper>
        <Summary dangerouslySetInnerHTML={{ __html: summary.description }} />
        <IdaWrapper />
      </SummaryWrapper>
    </HeaderWrapper>
  );
};

export default Header;
