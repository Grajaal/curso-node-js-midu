// Para utilizar promesas con el módulo fs, se debe importar el módulo fs/promises
const fs = require('node:fs/promises')
// Para crear la version de promesas de funciones que utilizar callbacks. 
// Solo para los módulos core que no tienen implementadas las promesas. 
const { promisify } = require('node:util')

console.log("Leyendo el primer archivo")
// Método de 'promisify'. 
fs.readFilePromise('./file.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })

console.log("Leyendo el segundo archivo")
fs.readFile('./file2.txt', 'utf-8')
    .then(text => {
        console.log(text)
    })

