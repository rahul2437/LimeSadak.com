const express = require("express");
const { signup, signin } = require("../controller/user.controller");
const userRouter = express.Router();

// ALL routes
userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/profile");

// UserRouter.get("/", async (req,res)=>{
//     const useme = await UserModel.find()
//     // console.log("Able to see the post")
//     res.send(useme)
// })

// UserRouter.post("/create", async (req, res) => {
//     const payload = req.body
//     try {
//         const new_user = new UserModel(payload)
//         await new_user.save()
//         res.send("Successfull Entered")
//     } catch (error) {
//         console.log(error);
//         res.send("Something went wrong")
//     }
// })

// UserRouter.patch("/edit/:id", async (req,res)=>{
//     const ID = req.params.id
//     const payload = req.body
//     try{
//         await UserModel.findByIdAndUpdate({_id:ID},payload)
//         res.send(`Updated the data whose id is ${ID}`)
//     }catch(err){
//         console.log(err)
//         res.send({"err":"Something went wrong"})
//     }
// })

// UserRouter.delete("/delete/:id", async (req,res)=>{
//     const ID = req.params.id
//     try{
//         await UserModel.findByIdAndDelete({_id:ID})
//         res.send(`Deleted the data whose id is ${ID}`)
//     }catch(err){
//         console.log(err)
//         res.send({"err":"Something went wrong"})
//     }
// })

module.exports = { userRouter };
