const setLocalStorageItem = (path, item) => {
    localStorage.setItem(path, item);
}

const getLocalStorageItem = (path) => {
    return localStorage.getItem(path);
}

export {
    setLocalStorageItem,
    getLocalStorageItem
}