const setLocalStorageItem = (path, item) => {
    localStorage.setItem(path, item);
}

const getLocalStorageItem = (path) => {
    return JSON.parse(localStorage.getItem(path));
}

export {
    setLocalStorageItem,
    getLocalStorageItem
}