const os = require('node:os')

console.log(os.platform())
console.log(os.homedir())
console.log(os.arch())
console.log(os.cpus())
console.log(os.uptime() / 60 / 60)
