import React, { FC } from 'react';
import styled from 'styled-components';
import { screenDimensions } from './theme';

const SectionWrapper = styled.div`
  padding: ${({ theme }) => `${theme.paddingSpace} ${theme.padding}`};
  @media ${screenDimensions.smScreen} {
    padding-left: ${({ theme }) => theme.mobilePadding};
    padding-right: ${({ theme }) => theme.mobilePadding};
  }
`;

const Section: FC = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default Section;
