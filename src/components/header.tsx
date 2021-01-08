import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import { BasicsType, ContactType, SummaryType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import { mediaQueries } from './theme';

const SummaryDescription = styled.p`
  font-weight: 500;
  padding-bottom: 24px;
  max-width: 50%;
  ${mediaQueries('sm')`max-width: 100%;`}
`;

const Contact = styled.li`
  &:not(:first-child) {
    padding-left: 64px;
  }
`;

const ContactList = styled.ul`
  display: flex;
  list-style-position: inside;
`;

const TitleName = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.orange};
`;

const TitleJob = styled.h2`
  font-weight: 900;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.orange};
`;

const ContactDot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
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
              description
            }
            contact {
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
    <header>
      <TitleName>{basics.name}</TitleName>
      <TitleJob>{basics.job}</TitleJob>
      <TitleJob>{basics.mode}</TitleJob>
      <ContactList>
        {contact.list.map((link) => (
          <Contact key={`${link.id}`}>
            <ContactDot />
            <a href={link.link} target="_blank" rel="noreferrer noopener">
              {link.name}
            </a>
          </Contact>
        ))}
      </ContactList>
      <SummaryDescription>{summary.description}</SummaryDescription>
    </header>
  );
};

export default Header;
