import React, { useState } from 'react';
import { Select, FormControl, MenuItem, InputLabel, Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { fontBreakPoints } from '../../../utils/breakpoints';
import { selectionInputStyles, selectionBoxStyles, paperStyles } from './styles/selectionStyles';

const Selection = () => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
    setAge(event.target.value);
    };

    return (
        <Box sx={selectionBoxStyles}>
            <FormControl fullWidth>
            <InputLabel sx={selectionInputStyles} id="demo-simple-select-label"><FormattedMessage id='programmingLanguages'/></InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label={<FormattedMessage id='programmingLanguages'/>}
                onChange={handleChange}
                size="small"
                sx={fontBreakPoints}
                MenuProps={{
                    PaperProps: {
                        sx: paperStyles
                    }
                }}
            >
                <MenuItem sx={fontBreakPoints} value='javascript'>Javascript</MenuItem>
                <MenuItem sx={fontBreakPoints} value='C++'>C++</MenuItem>
                <MenuItem sx={fontBreakPoints} value='python'>Python</MenuItem>
            </Select>
            </FormControl>
        </Box>
    );
}
export default Selection;