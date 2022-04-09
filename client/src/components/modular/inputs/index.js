import React from "react";
import Code from "./Code";
import Result from "./Result";

const Input = ({ serverAnswer = null }) => {
    if (!serverAnswer) {
        return <Code />;
    }
    return <Result serverAnswer={serverAnswer} />;
};

export default Input;
