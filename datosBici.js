const fs = require('fs');
const bicicletasJSON = fs.readFileSync('./bicicletas.json', 'utf-8');

//console.log(arrayBicicletas);

function leerJSON() {
    return JSON.parse(bicicletasJSON)
}

module.exports = leerJSON