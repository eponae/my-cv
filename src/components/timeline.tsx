import React, { FC } from 'react';
import styled from 'styled-components';
import { EducationType } from '../types/types';
import Tooltip from 'react-tooltip';
import { mediaQueries } from './theme';

type Props = {
  data: EducationType['certificates']['list'];
};

const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  ${mediaQueries('sm')`display: none`}
`;

const Line = styled.div`
  height: 5px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 4px;
  position: relative;
`;

const Circle = styled.div<{ left: string }>`
  width: 15px;
  height: 15px;
  background: ${({ theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 100%;
  position: absolute;
  top: -7px;
  left: ${(props) => props.left};
  cursor: pointer;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 16px;
  position: absolute;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContent = styled.span`
  font-weight: 700;
  padding-right: 4px;
`;

const TextInfo = styled.span`
  white-space: nowrap;
`;

const Timeline: FC<Props> = ({ data }) => {
  data.sort((dataA, dataB) => dataB.year - dataA.year);
  const startYear = data[0].year;
  const endYear = data[data.length - 1].year;
  const totalYears = endYear - startYear;

  return (
    <TimelineWrapper>
      <Line>
        {data.map((certificate) => {
          const left = ((endYear - certificate.year) * 100) / totalYears;
          return (
            <>
              <Circle
                key={certificate.id}
                left={`${left}%`}
                data-tip
                data-for={certificate.id}
              >
                <Text>
                  <TextContent>{certificate.year}</TextContent>
                  <TextInfo>{certificate.title}</TextInfo>
                </Text>
              </Circle>
              <Tooltip id={certificate.id} effect="solid">
                {certificate.info}
              </Tooltip>
            </>
          );
        })}
      </Line>
    </TimelineWrapper>
  );
};

export default Timeline;
