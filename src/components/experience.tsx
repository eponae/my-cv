import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Section from './section';
import { CompanyType, ExperienceType } from '../types/types';
import Company from './company';

type Node = {
  experience: ExperienceType | null;
};

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
  const data = nodes.find((node: Node) => !!node.experience);
  const { title, companies } = data.experience;

  return (
    <Section title={title}>
      {companies.map((company: CompanyType) => (
        <Company key={company.id} company={company} />
      ))}
    </Section>
  );
};

export default Experience;
