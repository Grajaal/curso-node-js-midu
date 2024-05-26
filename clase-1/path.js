const path = require('node:path')

// Para saber con que tipo de barra se separan los directorios en mi sistema operativo
console.log(`Tipo de barra: ${path.sep}`)

// Unir rutas
const filePath = path.join('user', 'local', 'file.txt')
console.log(filePath)

// Nombre del fichero de una ruta
const file = path.basename(filePath, '.txt') // <----- Para obtener el nombre del archivo sin la extensión
console.log(file)

const extension = path.extname('image.png') // <----- Para obtener la extensión del archivo
console.log(extension)
