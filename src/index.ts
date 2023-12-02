import express from 'express'
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/status', function (req, res) {
    res.send('Status')
  })

app.listen(PORT, () => console.log(`Server opened on port ${PORT}`))