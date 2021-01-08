import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { HobbiesType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import Title from './title';
import SectionWithBackground from './sectionWithBackground';
import Dot from './dot';
import Horse from '../images/horse.svg';
import styled from 'styled-components';
import { screenDimensions } from './theme';

const HorseWrapper = styled(Horse)`
  @media ${screenDimensions.smScreen} {
    display: none;
  }
`;

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
    <SectionWithBackground>
      <Title>{hobbies.title}</Title>
      <ul>
        {hobbies.list.map((hobby) => (
          <li key={hobby.id}>
            <Dot />
            {hobby.name}
          </li>
        ))}
      </ul>
      <HorseWrapper />
    </SectionWithBackground>
  );
};

export default Hobbies;
