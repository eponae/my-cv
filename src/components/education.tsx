import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from './section';
import { EducationType, HobbiesType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import styled from 'styled-components';
import Timeline from './timeline';
import { mediaQueries } from './theme';

const ArticleTop = styled.div`
  padding-bottom: 16px;
`;

const Certificate = styled.li`
  padding-bottom: 4px;
`;

const Year = styled.span`
  font-weight: 700;
`;

const TimelineMobile = styled.ul`
  display: none;
  ${mediaQueries('sm')`display: block;`}
`;

const Education: FC = () => {
  const {
    allDataJson: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          nodes {
            education {
              title
              languages {
                title
                list {
                  id
                  title
                }
              }
              certificates {
                title
                list {
                  id
                  year
                  title
                  info
                }
              }
            }
          }
        }
      }
    `,
  );
  const { education }: { education: EducationType } = getNodeData(
    'education',
    nodes,
  );
  const { title, languages, certificates } = education;
  return (
    <Section title={title}>
      <ArticleTop>
        <h2>{languages.title}</h2>
        <ul>
          {languages.list.map((language) => (
            <li key={language.id}>{language.title}</li>
          ))}
        </ul>
      </ArticleTop>
      <div>
        <h2>{certificates.title}</h2>
        <Timeline data={certificates.list} />
        <TimelineMobile>
          <ul>
            {certificates.list.map((certificate) => (
              <Certificate key={certificate.id}>
                <Year>{certificate.year}</Year>
                <span>{` ${certificate.title} ${certificate.info}`}</span>
              </Certificate>
            ))}
          </ul>
        </TimelineMobile>
      </div>
    </Section>
  );
};

export default Education;
