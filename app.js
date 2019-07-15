const argv = require("./config/yargs");
const {Lugar} = require("./lugar/lugar")
const {Clima} = require("./clima/clima")

const infoClima = async (lugar) => {
    try{
        let coor = await Lugar(lugar);
        let temp = await Clima(coor.lat,coor.lon)
        return `El clima de ${lugar} es ${temp}`

    }catch(e){
        return `No se pudo determinar el clima de ${lugar}`;
    }
}

infoClima(argv.direccion)
    .then(console.log)