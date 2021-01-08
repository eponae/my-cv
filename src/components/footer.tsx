import React from 'react';
import styled from 'styled-components';
import Ida from '../images/ida.svg';
import { screenDimensions } from './theme';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.paddingSpace} ${theme.padding}`};
  @media ${screenDimensions.smScreen} {
    padding-left: ${({ theme }) => theme.mobilePadding};
    padding-right: ${({ theme }) => theme.mobilePadding};
  }
`;

const FooterText = styled.div`
  padding-left: 8px;
`;

const FooterDesign = styled.a`
  display: block;
  padding-bottom: 8px;
`;

const FooterTitle = styled.p`
  font-weight: 600;
  padding-bottom: 8px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Ida />
      <FooterText>
        <FooterTitle>Alice Rimassa CV 2021</FooterTitle>
        <FooterDesign
          href="https://fr.linkedin.com/in/mariannehirsch"
          target="_blank"
          rel="noreferrer noopener"
        >
          Design par Marianne Hirsch
        </FooterDesign>
        <p>
          Créé avec
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
