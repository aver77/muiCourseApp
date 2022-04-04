import { CURRENT_SERVER_ANSWER } from "constants/specificWords";
import { setLocalStorageItem } from "utils/localStorage";

const { default: axios } = require("axios");

class Compile {
    _apiBase = "http://localhost:5000";

    async compileResourse(programmingLanguage, code) {
        const res = await axios.post(`${this._apiBase}/code`, {
            language: programmingLanguage,
            code
        })

        setLocalStorageItem(CURRENT_SERVER_ANSWER, res.data.output);
    }
}
export default Compile;