/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import View from '../../view/View';

import { IntlProvider } from 'react-intl';
import { LOCALES } from '../../constants/Intl/locales';
import { languages } from '../../constants/Intl/languages';
import { SWITCH_LANGUAGES } from '../../constants/specificWords';

const App = () => {

    const [localization, setLocalization] = useState(!!JSON.parse(localStorage.getItem(SWITCH_LANGUAGES)) ?? false)

    const localizationHandler = useCallback((bool) => {
        localStorage.setItem(SWITCH_LANGUAGES, bool);
        setLocalization(bool);
    }, [])

    return (
        <IntlProvider
            messages={languages[!localization? LOCALES.RUSSIAN : LOCALES.ENGLISH]}
            locale={!localization? LOCALES.RUSSIAN : LOCALES.ENGLISH}
            defaultLocale={LOCALES.RUSSIAN}
        >
            <View localizationHandler={localizationHandler}/>
        </IntlProvider>
    );
};

export default App;