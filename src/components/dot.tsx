import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  hasContactColor?: boolean;
};

const DotWrapper = styled.div<Props>`
  height: 8px;
  width: 8px;
  min-width: 8px;
  max-width: 8px;
  min-height: 8px;
  max-height: 8px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${({ theme, hasContactColor }) =>
    hasContactColor ? theme.colors.lightBlue : theme.colors.orange};
  margin-right: 8px;
`;

const Dot: FC<Props> = ({ hasContactColor = false }) => {
  return <DotWrapper hasContactColor={hasContactColor} />;
};

export default Dot;
