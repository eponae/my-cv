import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  subtitle?: string;
};

const SectionWrapper = styled.section`
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.gray};
`;

const Title = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.purple};
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.brown};
`;

const Section: FC<Props> = ({ title, subtitle, children }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {children}
  </SectionWrapper>
);

export default Section;
