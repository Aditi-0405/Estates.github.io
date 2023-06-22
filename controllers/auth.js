const User= require('../models/user')
// const{StatusCodes}= require("http-status-code")
const { StatusCodes } = require('http-status-codes')
const User_Profile= require('../models/user_profile')






const register = async (req, res) =>{
    try{
    // console.log(req.body)
    const user= await User.create({...req.body})
    const user_profile= await User_Profile.create({name:user.name, email: user.email, user_id: user._id})
    console.log(user_profile)
    res.status(200).json({msg: "User successfully registered", user})}
    
    catch(error){
        console.log(error)
        res.status(500).json({msg: "Registration failed"})

    }
}




const login= async (req, res)=>{
    try{
    const{email, password}= req.body
    if(!email || !password){
        res.json('please provide email and password')
    }
    const user= await User.findOne({email})
    if(!user){
        res.status(404).json({msg:"Invalid credentials"})
    }
    
    const isPasswordCorrect= await user.comparePassword(password)
    if(! isPasswordCorrect){
        res.json({msg: "Invalid credentials"})
    }
    else{
    const token= user.createJWT()
    res.status(StatusCodes.OK).json({user:{name: user.name}, token})} 

    }
    catch(error){
        console.log(error)
    }

}


module.exports={register, login}