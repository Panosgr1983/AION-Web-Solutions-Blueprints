import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import el from './locales/el';
import en from './locales/en';

const savedLanguage = localStorage.getItem('language');
const defaultLanguage = savedLanguage || 'el';

i18n.use(initReactI18next).init({
  resources: { el: { translation: el }, en: { translation: en } },
  lng: defaultLanguage,
  fallbackLng: 'el',
  interpolation: { escapeValue: false },
});

export default i18n;
