import { createContext } from 'react';

export type Language = 'en' | 'fr';

export const defaultLanguage = 'fr';

export const LanguageContext = createContext<Language>(defaultLanguage);
