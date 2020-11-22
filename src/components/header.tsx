import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import {
  BasicsType,
  ContactType,
  SkillsType,
  SummaryType,
} from '../types/types';
import { getNodeData } from '../utils/dataUtils';

const HeaderWrapper = styled.header`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  text-align: left;
  padding: ${({ theme }) => theme.padding};
`;

const Header: FC = () => {
  const {
    allDataJson: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          nodes {
            summary {
              title
              description
            }
            skills
            contact {
              title
              list {
                id
                link
                name
              }
            }
            basics {
              name
              job
              location
              mode
            }
          }
        }
      }
    `,
  );
  const { summary }: { summary: SummaryType } = getNodeData('summary', nodes);
  const { skills }: { skills: SkillsType } = getNodeData('skills', nodes);
  const { contact }: { contact: ContactType } = getNodeData('contact', nodes);
  const {
    basics,
  }: {
    basics: {
      name: BasicsType['name'];
      job: BasicsType['job'];
      location: BasicsType['location'];
      mode: BasicsType['mode'];
    };
  } = getNodeData('basics', nodes);

  return (
    <HeaderWrapper>
      <h1>{basics.name}</h1>
      <h2>{basics.job}</h2>
      <h3>{basics.location}</h3>
      <div>{basics.mode}</div>
    </HeaderWrapper>
  );
};

export default Header;
