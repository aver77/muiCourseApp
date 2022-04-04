import React from 'react';
import Switch from '@mui/material/Switch';

import { SWITCH_LANGUAGES, SWITCH_THEMES } from 'constants/specificWords';
import { ternaryOperation } from 'utils/ternaryOperation';
import { useWithSwitchers } from 'hooks/useWithSwitchers';

const Switching = ({isTheme, currentThemeHandler, localizationHandler}) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const variables = useWithSwitchers(currentThemeHandler, localizationHandler, SWITCH_THEMES, SWITCH_LANGUAGES);
    const {firstVariable, secondVariable, handleFirstVariable, handleSecondVariable} = variables;

    return (
        <Switch
            color="secondary"
            checked={ternaryOperation(isTheme, firstVariable, secondVariable)}
            onClick={ternaryOperation(isTheme, handleFirstVariable, handleSecondVariable)}
            {...label} 
        />
    );
};

export default Switching;