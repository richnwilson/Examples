const axios = require("axios");

(async () => {
    try {
        const data = await axios.get(`https://bydo.herokuapp.com/teamdata/Ascent`)
        const x = 1
    } catch(e) {
        console.log(e)
    }
})();