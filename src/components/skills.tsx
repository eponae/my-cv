import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from './section';
import { SkillsType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';

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
      <p>{skills.list.join(' · ')}</p>
    </Section>
  );
};

export default Skills;
