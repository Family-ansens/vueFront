import Vue from 'vue';
import VueI18n from 'vue-i18n';

import elementEnLocale from 'element-ui/lib/locale/lang/en';
import elementZhCnLocale from 'element-ui/lib/locale/lang/zh-CN';
import { commonUtil } from '@/utils/common-utils';

import enLocale from './en';
import zhCnLocale from './zhCn';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zhCn: {
    ...zhCnLocale,
    ...elementZhCnLocale
  }
};

export const getLocale = () => {
  const cookieLanguage = commonUtil.language;
  if (cookieLanguage) {
    return cookieLanguage;
  }

  const language = navigator.language.toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) - 1) {
      return locale;
    }
  }

  // Default language is English
  return 'en';
};

const i18n = new  VueI18n({
  locale: getLocale(),
  messages
});

export default i18n;