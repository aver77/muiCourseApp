import React from 'react';
import Input from './components';

import { Box, Container } from '@mui/material';
import { codeContainerStyles, alignStyles } from './styles/styles';

import { FormattedMessage } from 'react-intl';

const Code = () => {
    const label = <FormattedMessage id='inputPlaceholder'/>
    return (
        <Container maxWidth='xxl' sx={codeContainerStyles} >
            <Box sx={alignStyles}>
                <Input label={label} rows={12} disabled={false}/>
            </Box>
        </Container>
    );
};

export default Code;