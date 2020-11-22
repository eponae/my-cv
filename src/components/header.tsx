import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import { BasicsType, ContactType, SummaryType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import { mediaQueries } from './theme';

const HeaderWrapper = styled.header`
  text-align: left;
  padding: ${({ theme }) => theme.padding};
  max-width: 50%;
  ${mediaQueries('sm')`max-width: 100%;`}
`;

const SummaryDescription = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.brown};
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
      <h1>{summary.title}</h1>
      <SummaryDescription>{summary.description}</SummaryDescription>
      <h3>{contact.title}</h3>
      <ul>
        {contact.list.map((link, index) => (
          <li key={`${link.id}`}>
            <a href={link.link} target="_blank" rel="noreferrer noopener">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
