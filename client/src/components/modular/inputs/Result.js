import React, { memo } from 'react';
import { TextField, Box, Container } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import { getLocalStorageItem } from 'utils/localStorage';
import { SWITCH_THEMES, CURRENT_SERVER_ANSWER } from 'constants/specificWords';
import { resultContainerStyles, alignStyles } from './styles';
import { useWithLocalStorages } from 'hooks/useWithLocalStorages';
import { DEFAULT_RESULT_ROWS } from 'constants/inputValues';
import { ternaryOperation } from 'utils/ternaryOperation';

const Result = () => {
    const label = <FormattedMessage id='outputPlaceholder'/>
    const currentColor = getLocalStorageItem(SWITCH_THEMES)?"rgba(255, 255, 255, 0.7)":'#121212';

    const resultValue = useWithLocalStorages(CURRENT_SERVER_ANSWER);

    const handleInput = (e) => {
        if (e.target.value) {
            resultValue.variableHandler(e.target.value)
        } else {
            resultValue.variableHandler(false);
        }
    };

    return (
        <Container maxWidth='xxl' sx={resultContainerStyles} >
            <Box sx={alignStyles}>
                <TextField
                    inputProps={{readOnly: true, disableUnderline: true, style: {color: currentColor}}}
                    id="outlined-multiline-static"
                    label={label}
                    multiline
                    rows={DEFAULT_RESULT_ROWS}
                    fullWidth
                    variant="outlined"
                    color="primary"
                    value={ternaryOperation(resultValue.variable, resultValue.variable, undefined)}
                    onChange={handleInput}
                />
             </Box>
        </Container>
    );
};

export default memo(Result);