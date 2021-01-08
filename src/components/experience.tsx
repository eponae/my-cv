import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CompanyType } from '../types/types';
import Company from './company';
import { getNodeData } from '../utils/dataUtils';
import Title from './title';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.orangeBackground};
  padding-top: 48px;
  padding-bottom: 48px;
  margin-top: 48px;
  margin-bottom: 48px;
`;

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
    <ExperienceWrapper>
      <Title>{title}</Title>
      {companies.map((company: CompanyType) => (
        <Company key={company.id} company={company} />
      ))}
    </ExperienceWrapper>
  );
};

export default Experience;
