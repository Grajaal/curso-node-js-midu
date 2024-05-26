const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hi world!: página')
  } else if (req.url === '/users') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    res.end(JSON.stringify({ users: ['user1', 'user2', 'user3'] }))
  } else {
    res.statusCode = 404 // Not Found
    res.setHeader('Content-Type', 'text/plain; charsest=utf-8')
    res.end('404 Not Found')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort}`)
})
