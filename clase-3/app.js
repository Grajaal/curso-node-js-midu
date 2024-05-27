const express = require('express') // require ---> commonJS
const crypto = require('node:crypto')
const movies = require('./movies.json')
const { validateMovie } = require('./schemas/movies')

const app = express()
app.disable('x-powered-by')

app.use(express.json())

app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      // Para que nos sea 'key-sensitive' utilizo 'some' en vez de 'includes'
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ messaje: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data
  }

  // Esto no es REST porque estamos guardando en memoria
  movies.push(newMovie)

  res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.find(movie => movie.id === id)

  if (movieIndex === -1) return res.status(404).json({ messaje: 'Movie not found' })

  if (title) movie.title
})

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Server listenging on port http://localhost:${PORT}`)
})
