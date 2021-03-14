import React, { FC } from 'react';
import styled from 'styled-components';
import { screenDimensions } from '../app/theme';

const SectionWrapper = styled.section`
  padding: ${({ theme }) => `${theme.paddingSpace} 0`};
  max-width: ${({ theme }) => theme.maxContentWidth};
  margin: 0 auto;
  @media ${screenDimensions.smScreen} {
    max-width: 90%;
  }
  @media print {
    padding-top: ${({ theme }) => theme.printPaddingSpace};
    padding-bottom: ${({ theme }) => theme.printPaddingSpace};
  }
`;

const Section: FC = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default Section;
