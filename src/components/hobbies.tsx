import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from './section';
import { HobbiesType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';

const Hobbies: FC = () => {
  const {
    allDataJson: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          nodes {
            hobbies {
              title
              list {
                id
                name
              }
            }
          }
        }
      }
    `,
  );
  const { hobbies }: { hobbies: HobbiesType } = getNodeData('hobbies', nodes);
  return (
    <Section title={hobbies.title}>
      <ul>
        {hobbies.list.map((hobby) => (
          <li key={hobby.id}>{hobby.name}</li>
        ))}
      </ul>
    </Section>
  );
};

export default Hobbies;
