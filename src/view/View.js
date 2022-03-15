/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import Header from '../components/common/head/Header';
import {darkTheme} from '../styles/darkTheme';
import {lightTheme} from '../styles/lightTheme';
import { CssBaseline } from '@mui/material';
import Code from '../components/common/inputs/Code';
import Main from '../components/modular/main/Main';
import Result from '../components/common/inputs/Result';
import Footer from '../components/common/footer/Footer';
import { SWITCH_THEMES } from '../constants/specificWords';

const View = ({localizationHandler}) => {
    const [currentTheme, setCurrentTheme] = useState(JSON.parse(localStorage.getItem(SWITCH_THEMES)) ?? false);

    const currentThemeHandler = (bool) => {
        localStorage.setItem(SWITCH_THEMES, bool);
        setCurrentTheme(bool)
    }

    return (
        <ThemeProvider theme={!currentTheme? lightTheme : darkTheme}>
            <CssBaseline/>
            <Header localizationHandler={localizationHandler} currentThemeHandler={currentThemeHandler}/>
            <Code/>
            <Main/>
            <Result/>
            <Footer/>
        </ThemeProvider>
    );
};

export default View;