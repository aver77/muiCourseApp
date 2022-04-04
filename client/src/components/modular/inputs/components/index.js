import React, { memo, useCallback } from 'react';
import { TextField } from '@mui/material';
import { getLocalStorageItem } from 'utils/localStorage';
import { SWITCH_THEMES } from 'constants/specificWords';


const Input = ({label, rows, disabled, handleChange, value}) => {
    const currentColor = getLocalStorageItem(SWITCH_THEMES)?"rgba(255, 255, 255, 0.7)":'#121212';

    const handleInput = useCallback((e) => {
        if (e.target.value) {
            handleChange(e.target.value)
        } else {
            handleChange(false);
        }
    }, [handleChange]);

    return (
        <TextField
            inputProps={{style: {color: currentColor}}}
            id="outlined-multiline-static"
            label={label}
            multiline
            rows={rows}
            fullWidth
            variant="outlined"
            color="primary"
            disabled={disabled}
            value={value?value:""}
            onChange={handleInput}
        />
    );
};

export default memo(Input);