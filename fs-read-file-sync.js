// Import the fs module (node prefix for core modules)
const fs = require('node:fs')

// De por sí solo, devuelve un buffer con la información en bytes. 
// const text = fs.readFileSync('./file.txt')

console.log("Leyendo el primer archivo")
// Para convertirlo a string, se puede hacer añadiendo el tipo de codificación:
const text = fs.readFileSync('./file.txt', 'utf-8')
console.log(text)

console.log("Leyendo el segundo archivo")
const secondText = fs.readFileSync('./file2.txt', 'utf-8')  
console.log(secondText)

