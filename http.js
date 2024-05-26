const http = require('node:http')
const { findAvaiblePort } = require('./free-port.js')

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hi world!')
})

findAvaiblePort(3306).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
