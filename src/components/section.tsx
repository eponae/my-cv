import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
};

const SectionWrapper = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.padding};
  margin: 32px 0;
`;

const Section: FC<Props> = ({ title, children }) => (
  <SectionWrapper>
    <h1>{title}</h1>
    {children}
  </SectionWrapper>
);

export default Section;
