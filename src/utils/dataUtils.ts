import { graphql, useStaticQuery } from 'gatsby';
import { Language } from '../components/languageContext';
import {
  ContactType,
  EducationType,
  ExperienceType,
  HobbiesType,
  LanguageType,
  LightBasicsType,
  SkillsType,
  SummaryType,
} from '../types/types';

export function getNodeData(nodeKey: string, nodes: Array<any>) {
  return nodes.find((node) => !!node[nodeKey]);
}

export function getSiteData(lang: Language) {
  const results = useStaticQuery(
    graphql`
      query GetData {
        allFrJson {
          nodes {
            ...HeaderFrFragment
            ...EducationFrFragment
            ...ExperienceFrFragment
            ...SkillsFrFragment
            ...HobbiesFrFragment
          }
        }
        allEnJson {
          nodes {
            ...HeaderEnFragment
            ...EducationEnFragment
            ...ExperienceEnFragment
            ...SkillsEnFragment
            ...HobbiesEnFragment
          }
        }
      }
    `,
  );

  const nodes =
    lang === 'en' ? results.allEnJson.nodes : results.allFrJson.nodes;
  const { summary }: { summary: SummaryType } = getNodeData('summary', nodes);
  const { contact }: { contact: ContactType } = getNodeData('contact', nodes);
  const { education }: { education: EducationType } = getNodeData(
    'education',
    nodes,
  );
  const {
    basics,
  }: {
    basics: LightBasicsType;
  } = getNodeData('basics', nodes);
  const { language }: { language: LanguageType } = getNodeData(
    'language',
    nodes,
  );
  const { experience }: { experience: ExperienceType } = getNodeData(
    'experience',
    nodes,
  );
  const { skills }: { skills: SkillsType } = getNodeData('skills', nodes);
  const { hobbies }: { hobbies: HobbiesType } = getNodeData('hobbies', nodes);

  return {
    summary,
    contact,
    basics,
    language,
    education,
    experience,
    skills,
    hobbies,
  };
}
