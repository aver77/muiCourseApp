import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { FormattedMessage } from 'react-intl';
import { useTheme } from '@mui/material/styles';

import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import { fontBreakPoints, headerBreakPoints, picsBreakPoints } from '../../../utils/breakpoints';
import { useMediaQuery } from '@mui/material';

import Switching from './components/Switching';
import { headerBoxStyles, headerStackStyles } from './styles/styles';
import { ternaryOperation } from '../../../utils/ternaryOperation';

const Header = ({localizationHandler, currentThemeHandler}) => {
    const theme = useTheme();
    const title = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={headerBoxStyles}>
            <AppBar color='primary' position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" style={{ flexGrow: 1 }} sx={headerBreakPoints}>
                    {ternaryOperation(title,'NW','NW Compiler')}
                </Typography>
                <Stack direction="row" alignItems="center">
                    <LightModeIcon sx={picsBreakPoints} color='action'/>
                    <Switching isTheme={true} localizationHandler={localizationHandler} currentThemeHandler={currentThemeHandler}/>
                    <ModeNightIcon sx={picsBreakPoints} color='action'/>
                </Stack>
                <Stack sx={headerStackStyles} direction="row" alignItems="center">
                    <Typography sx={fontBreakPoints}>
                        <FormattedMessage id='ru'/>
                    </Typography>
                    <Switching isTheme={false} localizationHandler={localizationHandler} currentThemeHandler={currentThemeHandler}/>
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