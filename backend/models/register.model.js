const mongoose = require("mongoose")

const registerSchema = mongoose.Schema({
  name:String,
  email:String,
  password:String,
  phone_number:Number
},{
    versionKey:false
})

const RegisterModel = mongoose.model("register",registerSchema)

module.exports={
    RegisterModel
}