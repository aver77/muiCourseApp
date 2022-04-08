import React, { memo, useCallback } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import Selection from './Selection';
import { fontBreakPoints } from 'utils/breakpoints';
import { controlsStyles } from './styles';
import { getLocalStorageItem } from 'utils/localStorage';
import { CURRENT_CODE, CURRENT_PROGRAMMING_LANGUAGE } from 'constants/specificWords';
import Service from 'service';

const Controls = ({serverAnswerHandler}) => {

    const handleClick = useCallback(() => {
        const currentCode = getLocalStorageItem(CURRENT_CODE);
        const currentLanguage = getLocalStorageItem(CURRENT_PROGRAMMING_LANGUAGE);
        if (currentCode && currentLanguage) {
            new Service().compileResourse(currentLanguage, currentCode).then((data) => {
                serverAnswerHandler(data);
            })
        }
    }, [serverAnswerHandler])

    return (
        <Container maxWidth='xxl'>
            <Box sx={controlsStyles}>
                <Selection/>
                <Button 
                    color='primary' 
                    variant="contained"
                    onClick={handleClick}
                >
                    <Typography sx={fontBreakPoints}><FormattedMessage id='btnText'/></Typography>
                </Button>
            </Box>
        </Container>
    );
};

export default memo(Controls);