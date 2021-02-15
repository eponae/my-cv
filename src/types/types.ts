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

export type SummaryType = {
  description: string;
};

export type ContactType = {
  list: Array<{ id: string; name: string; link: string }>;
};

export type LanguageType = {
  description: string;
  print: string;
  seeMore: string;
};

export type BasicsType = {
  caption: string;
  job: string;
  keywords: string;
  name: string;
  description: string;
  site: string;
  title: string;
  location: string;
  mode: string;
  footer: {
    title: string;
    mention: string;
    build: string;
  };
};

export type LightBasicsType = {
  name: BasicsType['name'];
  job: BasicsType['job'];
  location: BasicsType['location'];
  mode: BasicsType['mode'];
  footer: BasicsType['footer'];
};

export type SkillsType = { list: Array<string>; title: string };

export type HobbiesType = {
  list: Array<{ id: string; name: string }>;
  title: string;
};

export type EducationType = {
  languages: {
    list: Array<{ id: string; title: string }>;
    title: string;
  };
  certificates: {
    list: Array<{ id: string; title: string; year: number }>;
    title: string;
  };
};
