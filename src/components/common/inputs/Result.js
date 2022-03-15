import React from 'react';
import Input from './components';

import { Box, Container } from '@mui/material';
import { resultContainerStyles, alignStyles } from './styles/styles';

import { FormattedMessage } from 'react-intl';

const Result = () => {
    const label = <FormattedMessage id='outputPlaceholder'/>
    return (
        <Container maxWidth='xxl' sx={resultContainerStyles} >
            <Box sx={alignStyles}>
                <Input label={label} rows={6} disabled={true}/>
            </Box>
        </Container>
    );
};

export default Result;