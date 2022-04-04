import React, { memo, useCallback } from 'react';
import { Select, FormControl, MenuItem, InputLabel, Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import { fontBreakPoints } from 'utils/breakpoints';
import { useWithLocalStorages } from 'hooks/useWithLocalStorages';
import { CURRENT_PROGRAMMING_LANGUAGE } from 'constants/specificWords';
import { selectionInputStyles, selectionBoxStyles, paperStyles } from './styles';

const Selection = () => {
    const selectionValue = useWithLocalStorages(CURRENT_PROGRAMMING_LANGUAGE);

    const handleSelectionValue = useCallback((e) => {
        selectionValue.variableHandler(e.target.value);
    }, [selectionValue]);

    return (
        <Box sx={selectionBoxStyles}>
            <FormControl fullWidth>
            <InputLabel sx={selectionInputStyles} id="demo-simple-select-label"><FormattedMessage id='programmingLanguages'/></InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectionValue.variable}
                label={<FormattedMessage id='programmingLanguages'/>}
                onChange={handleSelectionValue}
                size="small"
                sx={fontBreakPoints}
                MenuProps={{
                    PaperProps: {
                        sx: paperStyles
                    }
                }}
            >
                <MenuItem sx={fontBreakPoints} value='js'>Javascript</MenuItem>
                <MenuItem sx={fontBreakPoints} value='cpp'>C++</MenuItem>
                <MenuItem sx={fontBreakPoints} value='py'>Python</MenuItem>
            </Select>
            </FormControl>
        </Box>
    );
}
export default memo(Selection);