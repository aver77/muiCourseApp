import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormattedMessage } from 'react-intl';
import { fontBreakPoints } from '../../../utils/breakpoints';
import { selectionInputStyles, selectionBoxStyles } from './styles/selectionStyles';

const paperStyles = theme => ({
    bgcolor: theme.palette.selectedBackground,
    '& .MuiMenuItem-root': {
        color: theme.typography.allVariants.color
    }
})

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