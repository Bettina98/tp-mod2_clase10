const arrayBicicletas = require('./datosBici');
const fs = require('fs');

const dhBici = {
    bicicletas : arrayBicicletas(),
    buscarBici : function (id) {
        const resultado = this.bicicletas.find((bicicleta) => {
                return bicicleta.id === id
            })
            return resultado || null
    },
    venderBici : function (id) {
        biciParaVender = this.buscarBici(id)
        if (!biciParaVender) {
            return "Bicicleta no encontrada"
        }
        const bicisModificadas = this.bicicletas.map((bicicleta) => {
            if(bicicleta.id === id){
                bicicleta.vendida = true
            }
            return bicicleta
        })
        fs.writeFileSync('./bicicletas.json', JSON.stringify(bicisModificadas, null, 2), 'utf-8')

        return "Bicicleta vendida con éxito"
    },
    biciParaLaVenta : function () {
        let BicisEnStock = this.bicicletas.filter(bicicleta => !bicicleta.vendida)
        return BicisEnStock
    },
    totalDeVentas : function () {
        let ventas = this.bicicletas.map((bicicleta) => {
            if (bicicleta.vendida){
                return bicicleta.precio
            }
            return 0
        })
        let totalVentas = ventas.reduce((acum, numero) => acum + numero)
        return totalVentas;
    },
    aumentoBici : function (porcentaje) {
        let bicicletasConAumento = this.bicicletas.map((bicicleta) => {bicicleta.precio = bicicleta.precio + (bicicleta.precio * porcentaje / 100)
        return bicicleta
    })

    fs.writeFileSync('./bicicletas.json', JSON.stringify(bicicletasConAumento, null, 2), 'utf-8')

        return this.bicicletas  
    },
    bicisPorRodado : function (rodado) {
        let biciRodado = this.bicicletas.filter((bicicleta) => bicicleta.rodado === rodado)
        return biciRodado
    },
    listarTodasLasBici : function () {
        this.bicicletas.forEach(bicicleta => {
            console.log(
                `
                ID : ${bicicleta.id}
                MARCA : ${bicicleta.marca}
                MODELO : ${bicicleta.modelo}
                RODADO : ${bicicleta.rodado}
                COLOR :${bicicleta.color}                
                PRECIO :${bicicleta.precio}
                `
            );
    })
    
}
}

dhBici.listarTodasLasBici()