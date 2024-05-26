// Argumentos de entrada
console.log(process.argv)

// Argumentos de salida
// process.exit(1)

// Controlar eventos del proceso
process.on('exit', () => {
  // Limpiar los recursos
})

// Current working directory: Desde que directorio hemos inicializado el proceso
console.log(process.cwd())

// Platform
console.log(process.env.PEPITO)
