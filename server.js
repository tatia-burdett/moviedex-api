const  express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.use((req, res) => {
  res.send('Hello, World! Moviedex API')
})

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
