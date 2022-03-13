import { lightTheme } from '../styles/lightTheme';
import { darkTheme } from '../styles/darkTheme';

export const switchToLightTheme = (handleLanguage) => {
    handleLanguage(lightTheme)
}
export const switchToDarkTheme = (handleLanguage) => {
    handleLanguage(darkTheme)
}