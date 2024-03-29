import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';
import ArrowRightCircle from '../../images/arrow-right-circle.svg';
import ArrowLeftCircle from '../../images/arrow-left-circle.svg';
import Plant from '../../images/plant.svg';
import { screenDimensions } from '../app/theme';

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
    width: 80%;
  }
  @media print {
    display: none;
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
  bottom: -29px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1, 1.1) translateX(-10px);
  }
`;

const RightPlantWrapper = styled(Plant)`
  position: absolute;
  right: -25px;
  bottom: -25px;
`;

const ArrowRightButton = styled.button`
  position: absolute;
  right: -2px;
  bottom: -29px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1, 1.1) translateX(10px);
  }
`;

const ArrowRightImage = styled(ArrowRightCircle)`
  height: 50px;
  width: 50px;
`;

const ArrowLeftImage = styled(ArrowLeftCircle)`
  height: 50px;
  width: 50px;
`;

const Scrollbar: FC<Props> = ({ index, lastIndex, goBack, goNext }) => {
  return (
    <>
      <ScrollBarWrapper>
        {index === 0 && <LeftPlantWrapper />}
        {index > 0 && (
          <ArrowLeftButton onClick={goBack}>
            <ArrowLeftImage />
          </ArrowLeftButton>
        )}
        {index === lastIndex && <RightPlantWrapper />}
        {index < lastIndex && (
          <ArrowRightButton onClick={goNext}>
            <ArrowRightImage />
          </ArrowRightButton>
        )}
      </ScrollBarWrapper>
    </>
  );
};

export default Scrollbar;
