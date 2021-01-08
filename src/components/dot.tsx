import React from 'react';
import styled from 'styled-components';

const DotWrapper = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.orange};
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
`;

const Dot = () => {
  return <DotWrapper />;
};

export default Dot;
