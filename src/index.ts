import express from 'express'
const app = express()

const PORT = process.env.PORT || 5000

app.get('/', function (req, res) {
  res.send(`<h1 style="color:red; text-align: center; margin-top: 10rem; ">Hello ЮЛЬЧИК!!!</h1>
  <div style="font-size: 50px; text-align: center;">💖</div>`)
})

app.get('/status', function (req, res) {
    res.send('Status')
  })

app.listen(PORT, () => console.log(`Server opened on port ${PORT}`))