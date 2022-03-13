import React from 'react';
import Box from '@mui/material/Box';
import { FormattedMessage } from 'react-intl';
import { Button, Container, Typography } from '@mui/material';

import Selection from './Selection';
import { fontBreakPoints } from '../../../utils/breakpoints';
import { mainStyles } from './styles/mainStyles';

const Main = () => {
    return (
        <Container maxWidth='xxl'>
            <Box sx={mainStyles}>
                <Selection/>
                <Button color='primary' variant="contained"><Typography sx={fontBreakPoints}><FormattedMessage id='btnText'/></Typography></Button>
            </Box>
        </Container>
    );
};

export default Main;