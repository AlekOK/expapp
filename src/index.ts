import express from 'express'
const app = express()

const port = process.env.PORT || 5000

app.get('/', function (req, res) {
  res.send('Hello Yulia')
})

app.get('/status', function (req, res) {
    res.send('Status')
  })

app.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});