const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Jack:gk2fnd12@boilerplate.jkymgxq.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!~~반갑습니다')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
