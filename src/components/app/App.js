/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import View from '../../view/View';

import useLocalStorages from '../../hooks/useLocalStorages';

import { IntlProvider } from 'react-intl';
import { LANGUAGE } from '../../constants/specificWords';
import { LOCALES } from '../../constants/Intl/locales';
import { languages } from '../../constants/Intl/languages';

const App = () => {

    const localization = useLocalStorages(LANGUAGE, LOCALES.RUSSIAN);
    const {variable, variableHandler} = localization;

    return (
        <IntlProvider
            messages={languages[variable]}
            locale={variable}
            defaultLocale={variable}
        >
            <View localizationHandler={variableHandler}/>
        </IntlProvider>
    );
};

export default App;