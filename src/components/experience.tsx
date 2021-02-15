import React, { FC, useState } from 'react';
import Company from './company';
import Title from './title';
import SectionWithBackground from './sectionWithBackground';
import Scrollbar from './scrollbar';
import { ExperienceType } from '../types/types';

type Props = {
  experience: ExperienceType;
};

const Experience: FC<Props> = ({ experience }) => {
  const { title, companies } = experience;

  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState<number>(0);

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
    </SectionWithBackground>
  );
};

export default Experience;
