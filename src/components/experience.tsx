import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CompanyType } from '../types/types';
import Company from './company';
import { getNodeData } from '../utils/dataUtils';
import Title from './title';
import SectionWithBackground from './sectionWithBackground';

const Experience: FC = () => {
  const {
    allDataJson: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allDataJson {
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

  return (
    <SectionWithBackground>
      <Title>{title}</Title>
      {companies.map((company: CompanyType) => (
        <Company key={company.id} company={company} />
      ))}
    </SectionWithBackground>
  );
};

export default Experience;
