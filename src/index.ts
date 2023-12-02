import express from 'express'
const app = express()

const port = process.env.PORT || 5000

app.get('/', function (req, res) {
  res.send('Hello Yulia')
})

app.get('/status', function (req, res) {
    res.send('Status')
  })

app.listen(port, () => console.log(`Server opened on port ${port}`))