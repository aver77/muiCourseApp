import React from 'react';
import { CssBaseline } from '@mui/material';

import Header from '../components/common/head/Header';
import Code from '../components/common/inputs/Code';
import Main from '../components/modular/main/Main';
import Result from '../components/common/inputs/Result';
import Footer from '../components/common/footer/Footer';

import WithThemeProvider from '../HOCs/withThemeProvider';

const View = ({localizationHandler}) => {
    return (
        <WithThemeProvider>
            <CssBaseline/>
            <Header localizationHandler={localizationHandler}/>
            <Code/>
            <Main/>
            <Result/>
            <Footer/>
        </WithThemeProvider>
    );
};

export default View;