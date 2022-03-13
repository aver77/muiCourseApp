import { Box, Container, TextField } from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { codeContainerStyles } from './styles/styles';

const Code = () => {
    const textValue = <FormattedMessage id='inputPlaceholder'/>
    return (
        <Container maxWidth='xxl' sx={codeContainerStyles} >
            <Box sx={{textAlign: 'center'}}>
                <TextField
                    id="outlined-multiline-static"
                    label={textValue}
                    multiline
                    rows={12}
                    fullWidth
                    variant="outlined"
                    color="primary"
                />
            </Box>
        </Container>
    );
};

export default Code;