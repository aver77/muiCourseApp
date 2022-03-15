import { useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/localStorage";

export const useWithLocalStorages = (defaultValue) => {
    const [variable, setVariable] = useState(getLocalStorageItem(defaultValue) ?? false)

    const variableHandler = (bool) => {
        setLocalStorageItem(defaultValue, bool);
        setVariable(bool);
    };

    return {
        variable,
        variableHandler 
    }
}