const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    //trim은 tjdckdtn 2463 사이에 띄어쓰기를 없애주는 역할을 한다.
    trim: true,
    // unique: 1은 똑같은 이름을 쓰지 못하게 하는 역할이다
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  // String은 {}를 쓰지않고 사용할 수 있다.
  image: String,
  token:{
    type: String
  },
  tokenExp: {
    type: Number
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }
