import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import { BasicsType, ContactType, SummaryType } from '../types/types';
import { getNodeData } from '../utils/dataUtils';
import Ida from '../images/ida-plant.svg';
import { screenDimensions } from './theme';
import Dot from './dot';

const HeaderWrapper = styled.header`
  padding: ${({ theme }) => `48px ${theme.padding} ${theme.paddingSpace}`};
  @media ${screenDimensions.smScreen} {
    padding-left: ${({ theme }) => theme.mobilePadding};
    padding-right: ${({ theme }) => theme.mobilePadding};
  }
`;

const Contact = styled.li`
  &:not(:first-child) {
    padding-left: 64px;
  }
`;

const ContactList = styled.ul`
  display: flex;
  list-style-position: inside;
  padding: 32px 0;
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

const Summary = styled.div`
  max-width: 625px;
  padding-right: 42px;
  @media ${screenDimensions.smScreen} {
    max-width: unset;
    padding-right: 0;
  }
`;

const SummaryWrapper = styled.div`
  display: flex;
`;

const IdaWrapper = styled(Ida)`
  @media ${screenDimensions.smScreen} {
    display: none;
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
    <HeaderWrapper>
      <TitleName>{basics.name}</TitleName>
      <TitleJob>
        {basics.job} · {basics.mode}
      </TitleJob>
      <ContactList>
        {contact.list.map((link) => (
          <Contact key={`${link.id}`}>
            <Dot hasContactColor />
            <a href={link.link} target="_blank" rel="noreferrer noopener">
              {link.name}
            </a>
          </Contact>
        ))}
      </ContactList>
      <SummaryWrapper>
        <Summary dangerouslySetInnerHTML={{ __html: summary.description }} />
        <IdaWrapper />
      </SummaryWrapper>
    </HeaderWrapper>
  );
};

export default Header;
