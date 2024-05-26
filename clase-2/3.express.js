const express = require('express')
const app = express()
const dittoJSON = require('./pokemon/ditto.json')

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

// Esto ya viene con express.
app.use(express.json())

// Middleware
/*
app.use((req, res, next) => {
  if (req.method !== 'POST') next()
  if (req.headers['content-type'] !== 'application/json') next()

  // Solo llegan al middleware las peticiones que sean POST y JSON.

  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    // Mutar la request y meter la información en el req.body
    req.body = data
    next()
  })
})
*/

app.get('/pokemon/ditto', (req, res) => {
  res.json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.json(req.body)
})

// Siempre la última
app.use((req, res) => {
  res.status(404).send('404 Not Found')
})

app.listen(PORT, () => {
  console.log(`Server listening in port http://localhost:${PORT}`)
})
