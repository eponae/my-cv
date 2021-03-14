import React, { FC } from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  font-size: 26px;
  padding-bottom: 16px;
`;

const Title: FC = ({ children }) => <TitleWrapper>{children}</TitleWrapper>;

export default Title;
