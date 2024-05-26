const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('Request received')
  res.end('Hi world!')
})

server.listen(0, () => {
  console.log(`Server listenening on http://localhost:${server.address().port}`)
})
