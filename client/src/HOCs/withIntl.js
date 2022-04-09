import React, { cloneElement, useCallback, useState } from "react";

import { IntlProvider } from "react-intl";
import { LOCALES } from "../constants/Intl/locales";
import { languages } from "../constants/Intl/languages";

import { SWITCH_LANGUAGES } from "../constants/specificWords";
import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "../utils/localStorage";
import { ternaryOperation } from "../utils/ternaryOperation";

const WithIntl = ({ children }) => {
    const [localization, setLocalization] = useState(
        getLocalStorageItem(SWITCH_LANGUAGES) ?? false
    );

    const localizationHandler = useCallback(bool => {
        setLocalStorageItem(SWITCH_LANGUAGES, bool);
        setLocalization(bool);
    }, []);

    return (
        <IntlProvider
            messages={
                languages[
                    ternaryOperation(
                        !localization,
                        LOCALES.RUSSIAN,
                        LOCALES.ENGLISH
                    )
                ]
            }
            locale={ternaryOperation(
                !localization,
                LOCALES.RUSSIAN,
                LOCALES.ENGLISH
            )}
            defaultLocale={LOCALES.RUSSIAN}
        >
            {React.Children.map(children, child => {
                return cloneElement(child, { localizationHandler });
            })}
        </IntlProvider>
    );
};

export default WithIntl;
