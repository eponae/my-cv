import React, { FC } from 'react';
import styled from 'styled-components';
import { CompanyType } from '../types/types';
import Dot from './dot';
import { screenDimensions } from './theme';

type Props = {
  company: CompanyType;
};

const CompanyWrapper = styled.div`
  padding-top: 32px;
  padding-bottom: ${({ theme }) => theme.paddingSpace};
  width: 80%;
  @media ${screenDimensions.smScreen} {
    width: 100%;
  }
  @media print {
    padding-top: ${({ theme }) => theme.printPaddingSpace};
    padding-bottom: ${({ theme }) => theme.printPaddingSpace};
  }
`;

const CompanyName = styled.a`
  color: ${({ theme }) => theme.colors.black};
  display: inline-block;
  font-weight: bold;
  font-size: 26px;
`;

const Experience = styled.li`
  &:not(:first-child) {
    padding-top: 16px;
  }
`;

const ExperienceList = styled.ul`
  padding-top: 16px;
`;

const Job = styled.div`
  font-weight: 900;
  color: ${({ theme }) => theme.colors.orange};
  padding-bottom: 8px;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  padding-top: 16px;
  padding-bottom: 8px;
`;

const TaskList = styled.ul`
  padding-left: 8px;
  list-style-position: inside;
`;

const Task = styled.li`
  display: flex;
  align-items: flex-start;
  padding-bottom: 8px;
`;

const Environment = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;
`;

const Company: FC<Props> = ({ company }) => {
  const { company: companyDescription, experiences, id } = company;
  return (
    <CompanyWrapper>
      <CompanyName
        href={companyDescription.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {companyDescription.name}
      </CompanyName>
      <div>{companyDescription.description}</div>
      <ExperienceList>
        {experiences.map((experience, expIndex) => (
          <Experience key={`${id}-exp-${expIndex}`}>
            <Job>{experience.job}</Job>
            <Environment>{experience.environment.join(' · ')}</Environment>
            <Date>{experience.date}</Date>
            <TaskList>
              {experience.tasks.map((task, taskIndex) => (
                <Task key={`${id}-task-${expIndex}-${taskIndex}`}>
                  <Dot />
                  {task}
                </Task>
              ))}
            </TaskList>
          </Experience>
        ))}
      </ExperienceList>
    </CompanyWrapper>
  );
};

export default Company;
