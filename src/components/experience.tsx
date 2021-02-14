import React, { FC, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Company from './company';
import { getNodeData } from '../utils/dataUtils';
import Title from './title';
import SectionWithBackground from './sectionWithBackground';
import Scrollbar from './scrollbar';

const Experience: FC = () => {
  const {
    allFrJson: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allFrJson {
          nodes {
            experience {
              title
              companies {
                id
                company {
                  description
                  link
                  name
                }
                experiences {
                  date
                  environment
                  job
                  tasks
                }
              }
            }
          }
        }
      }
    `,
  );
  const data = getNodeData('experience', nodes);
  const { title, companies } = data.experience;

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
