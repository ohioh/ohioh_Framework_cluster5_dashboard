import Locale from './locale.json';

export const getTranslation = (lang, word) => {
  return Locale[word][lang];
};
