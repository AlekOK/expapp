import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/status', function (req, res) {
    res.send('Status')
  })

app.listen(3000, () => console.log("Server opened on port 3000"))