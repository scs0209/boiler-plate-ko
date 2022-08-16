const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");
const { User } = require("./models/User");

const config = require('./config/key')

// application/x-www-form-urlencoded를 분석해서 가져오게하는 역할
app.use(bodyParser.urlencoded({extended: true}));

// application/json을 분석해서 가져오게하는 역할
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config. mongoURI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!~~반가워요')
})

app.post('/register', (req, res) => {
  // 회원 가입 할때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.
  // req.body에는 id: hello, password: aaa 의 형태가 있도록 설정해 놓은 것이다.(bodyParser를 이용)
  const user = new User(req.body)
// save는 몽고db오는 method
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      successs: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
