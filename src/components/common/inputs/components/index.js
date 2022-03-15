import React from 'react';
import { TextField } from '@mui/material';

const Input = ({label, rows, disabled}) => {
    return (
        <TextField
            id="outlined-multiline-static"
            label={label}
            multiline
            rows={rows}
            fullWidth
            variant="outlined"
            color="primary"
            disabled={disabled}
        />
    );
};

export default Input;