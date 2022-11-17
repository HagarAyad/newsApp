import {I18nManager} from 'react-native';
import {I18n} from 'i18n-js';
import ar from './ar.json';
import en from './en.json';

const i18n = new I18n({
  en: en,
  ar: ar,
});

i18n.locale = I18nManager.isRTL ? 'ar' : 'en';

export const setLocale = (locale: string) => {
  i18n.locale = locale;
};

export const getCurrentLocale = () => i18n.locale;

export default i18n;
