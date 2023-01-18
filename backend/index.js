const express =require("express")

require("dotenv").config()

const jwt = require('jsonwebtoken');
const cors = require("cors")
const {connection} = require("./config/db")
const {UserRouter} = require("./routes/user.route")
const {RegisterModel} = require("./models/register.model")


const app = express()

app.use(express.json())

app.use(cors({
    origin : "*"
}))

app.get("/",(req,res)=>{
    res.send("Welcome to limeSadak")
})

app.post("/register",async(req,res)=>{
    const {name,email,password,phone_number}=req.body
    try {
        const new_user=new RegisterModel({
            name,
            email,
            password,
            phone_number
        })
        // console.log(new_user)
        await new_user.save()
        return res.send("Successfully Registered")
    } catch (error) {
        res.send("Please Register")
    }    
})

app.post("/login",async (req,res)=>{
    const {email,password}=req.body
    const user = await RegisterModel.findOne({email,password})
    if(!user){
        return res.send("Successfully logged in")
    }
    try {
        const token=await jwt.sign({email},process.env.secret);
        return res.send({response:"Succesfully",token:token,userid:user._id})
    } catch (error) {
        console.log(error);
        return res.send("Please login")
    }
})

const authentication = (req,res,next)=>{
    if(!req.headers.token){
        return res.send({response:"user not logged in"})
    }
    const user_token=req.headers.token
    jwt.verify(user_token, process.env.secret, function (err, decoded) {
        if (err) {
            console.log(err);
        }
        next()
    });
}

app.use(authentication)

app.use("/user",UserRouter)

app.listen(8080,async ()=>{
    try{
        await connection
        console.log("Connected to Database")
    }catch(err){
        console.log(err)
        console.log("Something went wrong:"+err)
    }
    console.log("Running at port 8080")
})