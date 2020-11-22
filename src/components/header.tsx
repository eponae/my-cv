import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import { BasicsType, ContactType, SummaryType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import { mediaQueries } from './theme';

const HeaderWrapper = styled.header`
  text-align: left;
  padding: ${({ theme }) => theme.padding};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const SummaryTitle = styled.h1`
  padding-top: 16px;
`;

const SummaryDescription = styled.p`
  font-weight: 500;
  padding-bottom: 24px;
  max-width: 50%;
  ${mediaQueries('sm')`max-width: 100%;`}
`;

const Contact = styled.li`
  &:not(:first-child) {
    padding-top: 4px;
  }
`;

const Header: FC = () => {
  const {
    allDataJson: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          nodes {
            summary {
              title
              description
            }
            contact {
              title
              list {
                id
                link
                name
              }
            }
            basics {
              name
              job
              location
              mode
            }
          }
        }
      }
    `,
  );
  const { summary }: { summary: SummaryType } = getNodeData('summary', nodes);
  const { contact }: { contact: ContactType } = getNodeData('contact', nodes);
  const {
    basics,
  }: {
    basics: {
      name: BasicsType['name'];
      job: BasicsType['job'];
      location: BasicsType['location'];
      mode: BasicsType['mode'];
    };
  } = getNodeData('basics', nodes);

  return (
    <HeaderWrapper>
      <h1>{basics.name}</h1>
      <h2>{basics.job}</h2>
      <h3>
        {basics.location}
        {` · `}
        {basics.mode}
      </h3>
      <SummaryTitle>{summary.title}</SummaryTitle>
      <SummaryDescription>{summary.description}</SummaryDescription>
      <h3>{contact.title}</h3>
      <ul>
        {contact.list.map((link) => (
          <Contact key={`${link.id}`}>
            <a href={link.link} target="_blank" rel="noreferrer noopener">
              {link.name}
            </a>
          </Contact>
        ))}
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
