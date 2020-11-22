import React, { FC } from 'react';
import { CompanyType } from '../types/types';

type Props = {
  company: CompanyType;
};

const Company: FC<Props> = ({ company }) => {
  const { company: companyDescription, experiences, id } = company;
  return (
    <div>
      <a
        href={companyDescription.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {companyDescription.name}
      </a>
      <div>{companyDescription.description}</div>
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
            <ul>
              {experience.environment.map((env, envIndex) => (
                <li key={`${id}-env-${expIndex}-${envIndex}`}>{env}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Company;
