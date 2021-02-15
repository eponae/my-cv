import React, { FC } from 'react';
import styled from 'styled-components';
import { screenDimensions } from './theme';

const SectionBackgroundWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.orangeBackground};
  padding: 48px 0;
  margin-top: ${({ theme }) => theme.paddingSpace};
  margin-bottom: ${({ theme }) => theme.paddingSpace};
  @media print {
    margin-top: ${({ theme }) => theme.printPaddingSpace};
    margin-bottom: ${({ theme }) => theme.printPaddingSpace};
    padding-top: ${({ theme }) => theme.printPaddingSpace};
    padding-bottom: ${({ theme }) => theme.printPaddingSpace};
  }
`;

const SectionContent = styled.div`
  max-width: ${({ theme }) => theme.maxContentWidth};
  margin: 0 auto;
  @media ${screenDimensions.smScreen} {
    max-width: 90%;
  }
`;

const SectionWithBackground: FC = ({ children }) => {
  return (
    <SectionBackgroundWrapper>
      <SectionContent>{children}</SectionContent>
    </SectionBackgroundWrapper>
  );
};

export default SectionWithBackground;
