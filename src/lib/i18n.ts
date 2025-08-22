// Static i18n solution for static export
import enMessages from '../../messages/en.json';
import koMessages from '../../messages/ko.json';
import hbMessages from '../../messages/hb.json';

export type Locale = 'en' | 'ko' | 'hb';

export const locales: Locale[] = ['en', 'ko', 'hb'];
export const defaultLocale: Locale = 'en';

const messages = {
  en: enMessages,
  ko: koMessages,
  hb: hbMessages,
};

export function getMessages(locale: Locale) {
  return messages[locale] || messages[defaultLocale];
}

// Simple translation function
export function createTranslator(locale: Locale) {
  const msgs = getMessages(locale);
  
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = msgs;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key} (${locale})`);
        return key; // Return the key if translation is missing
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}

// Check if locale is valid
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
