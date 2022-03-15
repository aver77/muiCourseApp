import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import { fontBreakPoints, headerBreakPoints, picsBreakPoints } from '../../../utils/breakpoints';
import { useMediaQuery } from '@mui/material';
import { SWITCH_LANGUAGES, SWITCH_THEMES } from '../../../constants/specificWords';


const stackStyles = (theme) => ({
    marginLeft: '60px',
    [theme.breakpoints.down('sm')]: {
        marginLeft: '20px'
    }
})

const Header = ({localizationHandler, currentThemeHandler}) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    const [themeChecked, setThemeChecked] = useState(JSON.parse(localStorage.getItem(SWITCH_THEMES)) ?? false)
    const [localizationChecked, setLocalizationChecked] = useState(JSON.parse(localStorage.getItem(SWITCH_LANGUAGES)) ?? false)

    const handleSetThemeChecked = () => {
        setThemeChecked(!!!JSON.parse(localStorage.getItem(SWITCH_THEMES)));
        currentThemeHandler(!!!JSON.parse(localStorage.getItem(SWITCH_THEMES)));
    }

    const handleSetLocalizationChecked = () => {
        setLocalizationChecked(!!!JSON.parse(localStorage.getItem(SWITCH_LANGUAGES)));
        localizationHandler(!!!JSON.parse(localStorage.getItem(SWITCH_LANGUAGES)));
    }

    const theme = useTheme();
    const title = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ flexGrow: 1, boxShadow: '0 6px 6px 0px rgba(0, 0, 0, 0.16)', zIndex: 999 }}>
            <AppBar color='primary' position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" style={{ flexGrow: 1 }} sx={headerBreakPoints}>
                    {title?'NW':'NW Compiler'}
                </Typography>
                <Stack direction="row" alignItems="center">
                    <LightModeIcon sx={picsBreakPoints} color='action'/>
                    <Switch
                        color="secondary"
                        checked={themeChecked}
                        onClick={handleSetThemeChecked}
                        {...label} 
                    />
                    <ModeNightIcon sx={picsBreakPoints} color='action'/>
                </Stack>
                <Stack sx={stackStyles} direction="row" alignItems="center">
                    <Typography sx={fontBreakPoints}>
                        <FormattedMessage id='ru'/>
                    </Typography>
                    <Switch
                        color="secondary"
                        checked={localizationChecked}
                        onClick={handleSetLocalizationChecked}
                        {...label} 
                    />
                    <Typography sx={fontBreakPoints}>
                        <FormattedMessage id='eng'/>
                    </Typography>
                </Stack>
            </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;