import { useState } from "react";
import { getLocalStorageItem } from "../utils/localStorage";

export const useWithSwitchers = (
    handleFirstValue,
    handleSecondValue,
    firstDefaultValue,
    secondDefaultValue
) => {
    const [firstVariable, setFirstVariable] = useState(
        getLocalStorageItem(firstDefaultValue) ?? false
    );
    const [secondVariable, setSecondVariable] = useState(
        getLocalStorageItem(secondDefaultValue) ?? false
    );

    const handleFirstVariable = () => {
        setFirstVariable(!getLocalStorageItem(firstDefaultValue));
        handleFirstValue(!getLocalStorageItem(firstDefaultValue));
    };

    const handleSecondVariable = () => {
        setSecondVariable(!getLocalStorageItem(secondDefaultValue));
        handleSecondValue(!getLocalStorageItem(secondDefaultValue));
    };

    return {
        firstVariable,
        secondVariable,
        handleFirstVariable,
        handleSecondVariable,
    };
};
