import React from 'react';
import styled from 'styled-components';

const DotWrapper = styled.div`
  height: 8px;
  width: 8px;
  min-width: 8px;
  max-width: 8px;
  min-height: 8px;
  max-height: 8px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.orange};
  margin-right: 8px;
`;

const Dot = () => {
  return <DotWrapper />;
};

export default Dot;
