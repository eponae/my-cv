import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Section from './section';
import { EducationType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import styled from 'styled-components';
import Timeline from './timeline';
import { mediaQueries } from './theme';

const EducationWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  ${mediaQueries('sm')`flex-flow: column nowrap;`}
`;

const Top = styled.div`
  padding-bottom: 16px;
  width: 30%;
`;

const Bottom = styled.div`
  width: 70%;
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
      <EducationWrapper>
        <Top>
          <h2>{languages.title}</h2>
          <ul>
            {languages.list.map((language) => (
              <li key={language.id}>{language.title}</li>
            ))}
          </ul>
        </Top>
        <Bottom>
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
        </Bottom>
      </EducationWrapper>
    </Section>
  );
};

export default Education;
