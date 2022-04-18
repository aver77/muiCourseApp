import React from "react";
import Code from "./Code";
import Result from "./Result";

const Input = ({ serverAnswer = null }) => {
    if (serverAnswer === null || serverAnswer === undefined) {
        return <Code />;
    } else {
        return <Result serverAnswer={serverAnswer} />;
    }
};

export default Input;
