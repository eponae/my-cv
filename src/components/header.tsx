import { graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';

const Header: FC = () => {
  const {
    allDataJson: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allDataJson {
          nodes {
            summary
            skills
            contact {
              title
              list {
                id
                link
                name
              }
            }
            basics {
              name
              job
            }
          }
        }
      }
    `,
  );
  const summary;

  return <header></header>;
};

export default Header;
