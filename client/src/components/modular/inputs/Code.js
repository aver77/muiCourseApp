import React, { memo } from 'react';
import { Box, Container, TextField } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import { getLocalStorageItem } from 'utils/localStorage';
import { SWITCH_THEMES } from 'constants/specificWords';
import { CURRENT_CODE } from 'constants/specificWords';
import { codeContainerStyles, alignStyles } from './styles/styles';
import { DEFAULT_CODE_ROWS } from 'constants/inputValues';
import { useWithLocalStorages } from 'hooks/useWithLocalStorages';

const Code = () => {
    const currentColor = getLocalStorageItem(SWITCH_THEMES)?"rgba(255, 255, 255, 0.7)":'#121212';
    const label = <FormattedMessage id='inputPlaceholder'/>

    const codeValue = useWithLocalStorages(CURRENT_CODE);

    const handleTextField = (e) => {
        if (e.target.value) {
            codeValue.variableHandler(e.target.value)
        } else {
            codeValue.variableHandler(false);
        }
    };

    return (
        <Container maxWidth='xxl' sx={codeContainerStyles} >
            <Box sx={alignStyles}>
                <TextField
                    InputProps={{style: {color: currentColor}}}
                    id="outlined-multiline-static"
                    label={label}
                    multiline
                    rows={DEFAULT_CODE_ROWS}
                    fullWidth
                    variant="outlined"
                    color="primary"
                    disabled={false}
                    value={codeValue.variable?codeValue.variable:""}
                    onChange={handleTextField}
                />
            </Box>
        </Container>
    );
};

export default memo(Code);