import React from 'react';
import Box from '@mui/material/Box';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@mui/material';
import { fontBreakPoints } from '../../../utils/breakpoints';
import { footerBoxStyles } from './styles/styles';

const Footer = () => {
    return (
        <Box bgcolor="primary.main" sx={footerBoxStyles}>
            <Box sx={{ height: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography sx={fontBreakPoints}><FormattedMessage id='footerText'/></Typography>
            </Box>
        </Box>
    );
};

export default Footer;