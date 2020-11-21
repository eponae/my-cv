import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ImageWrapper = styled(Img)`
  width: 500px;
  height: 500px;
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "in-progress.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <ImageWrapper fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Image;
