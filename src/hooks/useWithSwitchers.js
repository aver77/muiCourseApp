/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/localStorage";
import { SWITCH_LANGUAGES, SWITCH_THEMES } from "../constants/specificWords";
import { switchToRussian, switchToEnglish } from "../utils/switchLocalizations";
import { switchToLightTheme, switchToDarkTheme } from "../utils/switchThemes";

const useWithSwitchers = (localizationHandler, themeHandler) => {
    const [langSwitchChecked, setLangSwitchChecked] = useState(getLocalStorageItem(SWITCH_LANGUAGES) ?? false);
    const [themeSwitchChecked, setThemeSwitchChecked] = useState(getLocalStorageItem(SWITCH_THEMES) ?? false);

    console.log('with swithers',langSwitchChecked, themeSwitchChecked)

    useEffect(() => {
        if (langSwitchChecked) {
            setLocalStorageItem(SWITCH_LANGUAGES, true)
            switchToEnglish(localizationHandler)
        } else {
            setLocalStorageItem(SWITCH_LANGUAGES, false)
            switchToRussian(localizationHandler)
        }
    }, [langSwitchChecked]);

    useEffect(() => {
        if (themeSwitchChecked) {
            setLocalStorageItem(SWITCH_THEMES, true)
            switchToDarkTheme(themeHandler)
        } else {
            setLocalStorageItem(SWITCH_THEMES, false)
            switchToLightTheme(themeHandler)
        }
    }, [themeSwitchChecked]);

    const langSwitchHandler = () => {
        setLangSwitchChecked(!langSwitchChecked)
    }

    const themeSwitchHandler = () => {
        setThemeSwitchChecked(!themeSwitchChecked)
    }

    return {
        langSwitchChecked,
        themeSwitchChecked,
        langSwitchHandler,
        themeSwitchHandler
    }
}
export default useWithSwitchers