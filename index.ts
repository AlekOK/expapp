import express from 'express'
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', function (req, res) {
  res.send(`<h1 style="color:red; text-align: center; margin-top: 10rem; ">Hello World!!!</h1>`)
})

app.get('/status', function (req, res) {
  res.status(400).send("I'm a Teapot")
  })

app.listen(PORT, () => console.log(`Server opened on port ${PORT}`))