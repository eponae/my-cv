import React, { FC } from 'react';
import styled from 'styled-components';
import { screenDimensions } from './theme';

const SectionBackgroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.orangeBackground};
  padding: 48px ${({ theme }) => theme.padding};
  margin-top: ${({ theme }) => theme.paddingSpace};
  margin-bottom: ${({ theme }) => theme.paddingSpace};
  @media ${screenDimensions.smScreen} {
    padding-left: ${({ theme }) => theme.mobilePadding};
    padding-right: ${({ theme }) => theme.mobilePadding};
  }
`;

const SectionWithBackground: FC = ({ children }) => {
  return <SectionBackgroundWrapper>{children}</SectionBackgroundWrapper>;
};

export default SectionWithBackground;
