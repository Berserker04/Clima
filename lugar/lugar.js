const axios = require("axios")

const Lugar = async (ecode) => {
    const lugar = encodeURI(ecode);
    instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${lugar}`,
        headers: {'X-RapidAPI-Key': '446d56f022msha0b4151a13f9c35p17ea1cjsn56eb8064723f'}
      });
    
      let resp = await instance.get();

      if(resp.data.Results.length === 0){
          throw Error(`No se encontro direccion para ${ecode}`)
      }

      let data = resp.data.Results[0];

      let direccion = data.name;
      let lat = data.lat;
      let lon = data.lon;

      return {
        direccion,
        lat,
        lon
      }
}

module.exports = {
    Lugar
}