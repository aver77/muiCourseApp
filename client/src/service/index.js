
const { default: axios } = require("axios");

class Compile {
    _apiBase = "http://localhost:5001";

    async compileResourse(programmingLanguage, code) {
        const res = await axios.post(`${this._apiBase}/code`, {
            language: programmingLanguage,
            code
        })

        return res.data.output;
    }
}
export default Compile;