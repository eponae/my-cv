import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import ArrowRightCircle from '../images/arrow-right-circle.svg';
import ArrowLeftCircle from '../images/arrow-left-circle.svg';
import Plant from '../images/plant.svg';
import { screenDimensions } from './theme';

type Props = {
  index: number;
  lastIndex: number;
  goBack: (event: MouseEvent<HTMLButtonElement>) => void;
  goNext: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ScrollBarWrapper = styled.div`
  width: 70%;
  border-bottom: 3px solid ${({ theme }) => theme.colors.orange};
  margin-left: 24px;
  margin-right: 24px;
  position: relative;
  height: 35px;
  @media ${screenDimensions.smScreen} {
    width: 94%;
  }
`;

const LeftPlantWrapper = styled(Plant)`
  position: absolute;
  left: -24px;
  bottom: -25px;
`;

const ArrowLeftButton = styled.button`
  position: absolute;
  left: -28px;
  bottom: -22px;
`;

const RightPlantWrapper = styled(Plant)`
  position: absolute;
  right: -25px;
  bottom: -25px;
`;

const ArrowRightButton = styled.button`
  position: absolute;
  right: 0;
  bottom: -22px;
`;

const Scrollbar: FC<Props> = ({ index, lastIndex, goBack, goNext }) => {
  return (
    <>
      <ScrollBarWrapper>
        {index === 0 && <LeftPlantWrapper />}
        {index > 0 && (
          <ArrowLeftButton onClick={goBack}>
            <ArrowLeftCircle />
          </ArrowLeftButton>
        )}
        {index === lastIndex && <RightPlantWrapper />}
        {index < lastIndex && (
          <ArrowRightButton onClick={goNext}>
            <ArrowRightCircle />
          </ArrowRightButton>
        )}
      </ScrollBarWrapper>
    </>
  );
};

export default Scrollbar;
