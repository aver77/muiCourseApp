import React, { Children, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { darkTheme } from "../styles/darkTheme";
import { lightTheme } from "../styles/lightTheme";

import { SWITCH_THEMES } from "../constants/specificWords";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "../utils/localStorage";
import { ternaryOperation } from "../utils/ternaryOperation";

const WithThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(
        getLocalStorageItem(SWITCH_THEMES) ?? false
    );

    const currentThemeHandler = bool => {
        setLocalStorageItem(SWITCH_THEMES, bool);
        setCurrentTheme(bool);
    };

    return (
        <ThemeProvider
            theme={ternaryOperation(!currentTheme, lightTheme, darkTheme)}
        >
            {Children.map(children, child => {
                return React.cloneElement(child, { currentThemeHandler });
            })}
        </ThemeProvider>
    );
};

export default WithThemeProvider;
