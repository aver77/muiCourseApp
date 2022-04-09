import React from "react";
import { CssBaseline } from "@mui/material";

import Header from "../components/common/header";
import Input from "components/modular/inputs";
import Controls from "../components/modular/controls";
import Footer from "../components/common/footer";

import WithThemeProvider from "HOCs/withThemeProvider";
import { useWithLocalStorages } from "hooks/useWithLocalStorages";
import { CURRENT_SERVER_ANSWER } from "constants/specificWords";

const View = ({ localizationHandler }) => {
    const serverAnswer = useWithLocalStorages(CURRENT_SERVER_ANSWER);

    return (
        <WithThemeProvider>
            <CssBaseline />
            <Header localizationHandler={localizationHandler} />
            <Input />
            <Controls serverAnswerHandler={serverAnswer.variableHandler} />
            <Input serverAnswer={serverAnswer.variable} />
            <Footer />
        </WithThemeProvider>
    );
};

export default View;
