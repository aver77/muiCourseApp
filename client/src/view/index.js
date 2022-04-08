import React from 'react';
import { CssBaseline } from '@mui/material';

import Header from '../components/common/header';
import Code from '../components/modular/inputs/Code';
import Controls from '../components/modular/controls';
import Result from '../components/modular/inputs/Result';
import Footer from '../components/common/footer';

import WithThemeProvider from 'HOCs/withThemeProvider';
import { useWithLocalStorages } from 'hooks/useWithLocalStorages';
import { CURRENT_SERVER_ANSWER } from 'constants/specificWords';

const View = ({localizationHandler}) => {
    const serverAnswer = useWithLocalStorages(CURRENT_SERVER_ANSWER);

    return (
        <WithThemeProvider>
            <CssBaseline />
            <Header localizationHandler={localizationHandler}/>
            <Code />
            <Controls serverAnswerHandler={serverAnswer.variableHandler}/>
            <Result serverAnswer={serverAnswer.variable}/>
            <Footer />
        </WithThemeProvider>
    );
};

export default View;