import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { HobbiesType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import Title from './title';
import SectionWithBackground from './sectionWithBackground';
import Horse from '../images/horse.svg';
import styled from 'styled-components';
import { screenDimensions } from './theme';

const HorseWrapper = styled(Horse)`
  display: inline-block;
  vertical-align: middle;
  @media ${screenDimensions.smScreen} {
    display: none;
  }
`;

const HobbiesWrapper = styled.div`
  display: inline-block;
  padding-right: 8px;
  @media ${screenDimensions.smScreen} {
    padding-right: 0;
  }
`;

const Hobby = styled.li`
  padding-bottom: 8px;
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
      <HobbiesWrapper>
        <Title>{hobbies.title}</Title>
        <ul>
          {hobbies.list.map((hobby) => (
            <Hobby key={hobby.id}>{hobby.name}</Hobby>
          ))}
        </ul>
      </HobbiesWrapper>
      <HorseWrapper />
    </SectionWithBackground>
  );
};

export default Hobbies;
