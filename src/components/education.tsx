import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { EducationType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import styled from 'styled-components';
import Section from './section';
import Title from './title';
import { screenDimensions } from './theme';

const EducationWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  @media ${screenDimensions.smScreen} {
    flex-flow: column nowrap;
  }
`;

const Top = styled.div`
  padding-bottom: 16px;
  width: 50%;
  @media ${screenDimensions.smScreen} {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 50%;
  @media ${screenDimensions.smScreen} {
    width: 100%;
  }
`;

const Item = styled.li`
  padding-bottom: 8px;
`;

const CertificateYear = styled.span`
  font-weight: 700;
`;

const CertificateTitle = styled.span`
  display: inline-block;
  padding-left: 8px;
`;

const Education: FC = () => {
  const {
    allFrJson: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allFrJson {
          nodes {
            education {
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
  const { languages, certificates } = education;
  return (
    <Section>
      <EducationWrapper>
        <Top>
          <Title>{certificates.title}</Title>
          <ul>
            {certificates.list.map((certificate) => (
              <Item key={`mobile-${certificate.id}`}>
                <CertificateYear>{certificate.year}</CertificateYear>
                <CertificateTitle>{certificate.title}</CertificateTitle>
              </Item>
            ))}
          </ul>
        </Top>
        <Bottom>
          <Title>{languages.title}</Title>
          <ul>
            {languages.list.map((language) => (
              <Item key={language.id}>{language.title}</Item>
            ))}
          </ul>
        </Bottom>
      </EducationWrapper>
    </Section>
  );
};

export default Education;
