import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SkillsType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import styled from 'styled-components';
import Title from './title';
import Section from './section';

const Skill = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange};
`;

const Skills: FC = () => {
  const {
    allDataJson: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          nodes {
            skills {
              title
              list
            }
          }
        }
      }
    `,
  );
  const { skills }: { skills: SkillsType } = getNodeData('skills', nodes);
  return (
    <Section>
      <Title>{skills.title}</Title>
      <Skill>{skills.list.join(' · ')}</Skill>
    </Section>
  );
};

export default Skills;
