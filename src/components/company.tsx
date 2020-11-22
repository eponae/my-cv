import React, { FC } from 'react';
import styled from 'styled-components';
import { CompanyType } from '../types/types';

type Props = {
  company: CompanyType;
};

const CompanyName = styled.a`
  font-size: ${({ theme }) => theme.h2FontSize};
  color: ${({ theme }) => theme.colors.brown};
`;

const Company: FC<Props> = ({ company }) => {
  const { company: companyDescription, experiences, id } = company;
  return (
    <div>
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
          <li key={`${id}-exp-${expIndex}`}>
            <div>{experience.job}</div>
            <div>{experience.date}</div>
            <ul>
              {experience.tasks.map((task, taskIndex) => (
                <li key={`${id}-task-${expIndex}-${taskIndex}`}>{task}</li>
              ))}
            </ul>
            <p>{experience.environment.join(' · ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Company;
