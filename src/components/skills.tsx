import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from './section';
import { SkillsType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import styled from 'styled-components';

const Skill = styled.p`
  font-weight: 600;
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
    <Section title={skills.title}>
      <Skill>{skills.list.join(' · ')}</Skill>
    </Section>
  );
};

export default Skills;
