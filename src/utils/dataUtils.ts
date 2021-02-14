import { graphql, useStaticQuery } from 'gatsby';
import { Language } from '../components/languageContext';
import {
  ContactType,
  LanguageType,
  LightBasicsType,
  SummaryType,
} from '../types/types';

export function getNodeData(nodeKey: string, nodes: Array<any>) {
  return nodes.find((node) => !!node[nodeKey]);
}

export const HeaderFragment = graphql`
  fragment HeaderFragment on FrJson {
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

export function getSiteData(lang: Language) {
  const results = useStaticQuery(
    graphql`
      query {
        allFrJson {
          nodes {
            ...HeaderFragment
          }
        }
      }
    `,
  );
  const nodes =
    lang === 'en' ? results.allEnJson.nodes : results.allFrJson.nodes;
  const { summary }: { summary: SummaryType } = getNodeData('summary', nodes);
  const { contact }: { contact: ContactType } = getNodeData('contact', nodes);
  const {
    basics,
  }: {
    basics: LightBasicsType;
  } = getNodeData('basics', nodes);
  const { language }: { language: LanguageType } = getNodeData(
    'language',
    nodes,
  );

  return { summary, contact, basics, language };
}
