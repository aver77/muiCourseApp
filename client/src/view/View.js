import React from 'react';
import { CssBaseline } from '@mui/material';

import Header from '../components/common/header';
import Code from '../components/modular/inputs/Code';
import Controls from '../components/modular/controls';
import Result from '../components/modular/inputs/Result';
import Footer from '../components/common/footer';

import WithThemeProvider from '../HOCs/withThemeProvider';

const View = ({localizationHandler}) => {
    return (
        <WithThemeProvider>
            <CssBaseline/>
            <Header localizationHandler={localizationHandler}/>
            <Code/>
            <Controls/>
            <Result/>
            <Footer/>
        </WithThemeProvider>
    );
};

export default View;