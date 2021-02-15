import React, { FC } from 'react';
import { SkillsType } from '../types/types';
import styled from 'styled-components';
import Title from './title';
import Section from './section';

const Skill = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.orange};
`;

type Props = {
  skills: SkillsType;
};

const Skills: FC<Props> = ({ skills }) => {
  return (
    <Section>
      <Title>{skills.title}</Title>
      <Skill>{skills.list.join(' · ')}</Skill>
    </Section>
  );
};

export default Skills;
