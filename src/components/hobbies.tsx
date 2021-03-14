import React, { FC } from 'react';
import { HobbiesType } from '../types/types';
import Title from './title/title';
import SectionWithBackground from './section/sectionWithBackground';
import Horse from '../images/horse.svg';
import styled from 'styled-components';
import { screenDimensions } from './app/theme';

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

type Props = {
  hobbies: HobbiesType;
};

const Hobbies: FC<Props> = ({ hobbies }) => {
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
