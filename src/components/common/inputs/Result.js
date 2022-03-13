import { Box, Container, TextField } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { resultContainerStyles } from './styles/styles';

const Result = () => {
    const textValue = <FormattedMessage id='outputPlaceholder'/>
    return (
        <Container maxWidth='xxl' sx={resultContainerStyles} >
            <Box sx={{textAlign: 'center'}}>
                <TextField
                    id="outlined-multiline-static"
                    label={textValue}
                    multiline
                    rows={6}
                    fullWidth
                    variant="outlined"
                    disabled
                />
            </Box>
        </Container>
    );
};

export default Result;