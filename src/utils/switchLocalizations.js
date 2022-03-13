import { LOCALES } from '../constants/Intl/locales';

export const switchToRussian = (handleLanguage) => {
    handleLanguage(LOCALES.RUSSIAN)
}
export const switchToEnglish = (handleLanguage) => {
    handleLanguage(LOCALES.ENGLISH)
}