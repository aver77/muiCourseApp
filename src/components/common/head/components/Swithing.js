import React from 'react';
import useWithSwitchers from '../../../../hooks/useWithSwitchers';
import Switch from '@mui/material/Switch';

const Switching = ({localizationHandler, themeHandler, isTheme}) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const switchers = useWithSwitchers(localizationHandler, themeHandler);
    const {langSwitchChecked, themeSwitchChecked, langSwitchHandler, themeSwitchHandler} = switchers;

    return (
        <Switch
            color="secondary"
            checked={isTheme?themeSwitchChecked:langSwitchChecked}
            onChange={isTheme?themeSwitchHandler:langSwitchHandler} 
            {...label} 
        />
    );
};

export default Switching;