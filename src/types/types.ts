export type CompanyType = {
  id: string;
  company: {
    description: string;
    link: string;
    name: string;
  };
  experiences: Array<{
    date: string;
    environment: Array<string>;
    job: string;
    tasks: Array<string>;
  }>;
};

export type ExperienceType = {
  title: string;
  companies: Array<CompanyType>;
};

export type SummaryType = string;

export type ContactType = {
  list: Array<{ id: string; name: string; link: string }>;
  title: string;
};

export type BasicsType = {
  caption: string;
  job: string;
  keywords: string;
  name: string;
  description: string;
  site: string;
  title: string;
};

export type SkillsType = Array<string>;

export type HobbiesType = Array<{
  title: string;
  list: Array<{ id: string; name: string }>;
}>;

type Education = {
  list: Array<{ id: string; title: string }>;
  title: string;
};

export type EducationType = {
  languages: Array<Education>;
  certificates: Array<Education>;
  title: string;
};
