import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { HobbiesType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import Title from './title';

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
    <div>
      <Title>{hobbies.title}</Title>
      <ul>
        {hobbies.list.map((hobby) => (
          <li key={hobby.id}>{hobby.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
