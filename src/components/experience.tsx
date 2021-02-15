import React, { FC, useContext } from 'react';
import Company from './company';
import Title from './title';
import SectionWithBackground from './sectionWithBackground';
import Scrollbar from './scrollbar';
import { ExperienceType, LanguageType } from '../types/types';
import { LanguageContext } from './languageContext';
import styled from 'styled-components';

type Props = {
  experience: ExperienceType;
  seeMore: LanguageType['seeMore'];
};

const PrintInformation = styled.div`
  display: none;
  @media print {
    display: block;
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

const Experience: FC<Props> = ({ experience, seeMore }) => {
  const { title, companies } = experience;
  const { selectedCompanyIndex, setSelectedCompanyIndex } = useContext(
    LanguageContext,
  );

  const goBack = () => {
    if (selectedCompanyIndex > 0) {
      setSelectedCompanyIndex(selectedCompanyIndex - 1);
    }
  };

  const goNext = () => {
    if (selectedCompanyIndex < companies.length - 1) {
      setSelectedCompanyIndex(selectedCompanyIndex + 1);
    }
  };

  return (
    <SectionWithBackground>
      <Title>{title}</Title>
      <Scrollbar
        index={selectedCompanyIndex}
        lastIndex={companies.length - 1}
        goBack={goBack}
        goNext={goNext}
      />
      <Company
        key={companies[selectedCompanyIndex].id}
        company={companies[selectedCompanyIndex]}
      />
      <PrintInformation>{seeMore}</PrintInformation>
    </SectionWithBackground>
  );
};

export default Experience;
