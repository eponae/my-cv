import { graphql } from 'gatsby';

export const HeaderFrFragment = graphql`
  fragment HeaderFrFragment on FrJson {
    summary {
      description
    }
    contact {
      list {
        id
        link
        name
      }
    }
    basics {
      name
      job
      location
      mode
    }
    language {
      description
    }
  }
`;

export const HeaderEnFragment = graphql`
  fragment HeaderEnFragment on EnJson {
    summary {
      description
    }
    contact {
      list {
        id
        link
        name
      }
    }
    basics {
      name
      job
      location
      mode
    }
    language {
      description
    }
  }
`;

export const EducationFrFragment = graphql`
  fragment EducationFrFragment on FrJson {
    education {
      languages {
        title
        list {
          id
          title
        }
      }
      certificates {
        title
        list {
          id
          year
          title
        }
      }
    }
  }
`;

export const EducationEnFragment = graphql`
  fragment EducationEnFragment on EnJson {
    education {
      languages {
        title
        list {
          id
          title
        }
      }
      certificates {
        title
        list {
          id
          year
          title
        }
      }
    }
  }
`;

export const ExperienceFrFragment = graphql`
  fragment ExperienceFrFragment on FrJson {
    experience {
      title
      companies {
        id
        company {
          description
          link
          name
        }
        experiences {
          date
          environment
          job
          tasks
        }
      }
    }
  }
`;

export const ExperienceEnFragment = graphql`
  fragment ExperienceEnFragment on EnJson {
    experience {
      title
      companies {
        id
        company {
          description
          link
          name
        }
        experiences {
          date
          environment
          job
          tasks
        }
      }
    }
  }
`;

export const SkillsFrFragment = graphql`
  fragment SkillsFrFragment on FrJson {
    skills {
      title
      list
    }
  }
`;

export const SkillsEnFragment = graphql`
  fragment SkillsEnFragment on EnJson {
    skills {
      title
      list
    }
  }
`;

export const HobbiesFrFragment = graphql`
  fragment HobbiesFrFragment on FrJson {
    hobbies {
      title
      list {
        id
        name
      }
    }
  }
`;

export const HobbiesEnFragment = graphql`
  fragment HobbiesEnFragment on EnJson {
    hobbies {
      title
      list {
        id
        name
      }
    }
  }
`;
