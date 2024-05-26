// Import the fs module (node prefix for core modules)
const fs = require('node:fs')

// fs.readFile(...)  para leer el archivo de manera asíncrona.
// const text = fs.readFile('./file.txt')

console.log('Leyendo el primer archivo')
fs.readFile('./file.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error al leer el archivo', err)
    return
  }

  console.log(text)
})

console.log('Leyendo el segundo archivo')
fs.readFile('./file2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error al leer el archivo', err)
    return
  }
  console.log(text)
})
