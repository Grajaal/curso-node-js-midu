const fs = require('node:fs')
const pc = require('picocolors')

// En el callback el error siempre es el primer parámetro
fs.readdir('.', (err, files) => {
    if(err){
        console.error(pc.bgRed('Error al leer el directorio'), err)
        return; 
    }

    files.forEach(file => {
        console.log(file)
    })

})