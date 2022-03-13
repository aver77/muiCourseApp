import { useCallback, useEffect, useState } from "react";
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';

const useLocalStorages = (specificWord, defaultItem) => {
    const [variable, setVariable] = useState(getLocalStorageItem(specificWord) ?? defaultItem);
    
    const variableHandler = useCallback((item) => {
        setVariable(item);
    }, [])

    useEffect(() => {
        setLocalStorageItem(specificWord, variable);
    }, [variable, specificWord])

    return {
        variable,
        variableHandler
    }
}
export default useLocalStorages;