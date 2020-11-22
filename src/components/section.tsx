import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  subtitle?: string;
};

const SectionWrapper = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.padding};
  margin: 32px 0;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
`;

const Section: FC<Props> = ({ title, subtitle, children }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {children}
  </SectionWrapper>
);

export default Section;
