const axios = require("axios");

const Clima = async (lat,lon) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=43e897d4a9e0a9e09438145012f41093&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    Clima
}