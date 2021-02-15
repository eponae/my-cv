import React, { FC } from 'react';
import styled from 'styled-components';
import Ida from '../images/ida.svg';
import { BasicsType } from '../types/types';
import { screenDimensions } from './theme';

type Props = {
  footer: BasicsType['footer'];
};

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.paddingSpace} 0`};
  max-width: ${({ theme }) => theme.maxContentWidth};
  margin: 0 auto;
  @media ${screenDimensions.smScreen} {
    max-width: 90%;
  }
  @media print {
    padding-top: ${({ theme }) => theme.printPaddingSpace};
    padding-bottom: ${({ theme }) => theme.printPaddingSpace};
  }
`;

const FooterText = styled.div`
  padding-left: 8px;
`;

const FooterDesign = styled.a`
  display: inline-block;
  padding-bottom: 8px;
`;

const FooterTitle = styled.p`
  font-weight: 600;
  padding-bottom: 8px;
`;

const Footer: FC<Props> = ({ footer }) => {
  const { title, mention, build } = footer;
  return (
    <FooterWrapper>
      <Ida />
      <FooterText>
        <FooterTitle>{title}</FooterTitle>
        {mention}
        {` `}
        <FooterDesign
          href="https://www.linkedin.com/in/mariannehirsch"
          target="_blank"
          rel="noreferrer noopener"
        >
          Marianne Hirsch
        </FooterDesign>
        <p>
          {build}
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
