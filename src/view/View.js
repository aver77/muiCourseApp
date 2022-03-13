/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { THEMING } from '../constants/specificWords';

import Header from '../components/common/head/Header';
import { lightTheme } from '../styles/lightTheme';
import useLocalStorages from '../hooks/useLocalStorages';
import { CssBaseline } from '@mui/material';
import Code from '../components/common/inputs/Code';
import Main from '../components/modular/main/Main';
import Result from '../components/common/inputs/Result';
import Footer from '../components/common/footer/Footer';

const View = ({localizationHandler}) => {

    const theming = useLocalStorages(THEMING, lightTheme);
    const {variable, variableHandler} = theming;
    const theme = variable;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header localizationHandler={localizationHandler} themeHandler={variableHandler}/>
            <Code/>
            <Main/>
            <Result/>
            <Footer/>
        </ThemeProvider>
    );
};

export default View;