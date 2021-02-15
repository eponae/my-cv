import { createContext } from 'react';

export type Language = 'en' | 'fr';
export type LanguageContextType = {
  lang: 'en' | 'fr';
  setLang: (lang: Language) => void;
  selectedCompanyIndex: number;
  setSelectedCompanyIndex: (index: number) => void;
};

export const defaultLanguage = 'fr';

export const LanguageContext = createContext<LanguageContextType>({
  lang: defaultLanguage,
  setLang: () => {},
  selectedCompanyIndex: 0,
  setSelectedCompanyIndex: () => {},
});
