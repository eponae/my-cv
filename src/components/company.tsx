import React, { FC } from 'react';
import styled from 'styled-components';
import { CompanyType } from '../types/types';
import StarImage from '../images/star.svg';
import { mediaQueries } from './theme';

type Props = {
  company: CompanyType;
};

const CompanyWrapper = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

const CompanyName = styled.a`
  font-size: ${({ theme }) => theme.h2FontSize};
  color: ${({ theme }) => theme.colors.brown};
  display: inline-block;
  padding-bottom: 8px;
`;

const Experience = styled.li`
  &:not(:first-child) {
    padding-top: 16px;
  }
`;

const Job = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 600;
`;

const Date = styled.div`
  color: ${({ theme }) => theme.colors.brown};
  padding-bottom: 8px;
  font-weight: 500;
`;

const TaskList = styled.ul`
  padding-left: 8px;
  list-style-position: inside;
`;

const Task = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    padding-bottom: 2px;
  }
  ${mediaQueries('sm')`align-items: flex-start;`}
`;

const Environment = styled.p`
  padding-top: 8px;
  color: ${({ theme }) => theme.colors.brown};
  font-weight: 500;
`;

const Img = styled(StarImage)`
  width: 14px;
  height: 14px;
  min-width: 14px;
  min-height: 14px;
  padding-right: 4px;
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
      <h3>{companyDescription.description}</h3>
      <ul>
        {experiences.map((experience, expIndex) => (
          <Experience key={`${id}-exp-${expIndex}`}>
            <Job>{experience.job}</Job>
            <Date>{experience.date}</Date>
            <TaskList>
              {experience.tasks.map((task, taskIndex) => (
                <Task key={`${id}-task-${expIndex}-${taskIndex}`}>
                  <Img />
                  {task}
                </Task>
              ))}
            </TaskList>
            <Environment>{experience.environment.join(' · ')}</Environment>
          </Experience>
        ))}
      </ul>
    </CompanyWrapper>
  );
};

export default Company;
