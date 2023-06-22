const  User= require('../models/user')
const jwt = require('jsonwebtoken')

const auth= async (req, res, next) =>{
    // console.log(req.body)
    // console.log(req.headers)
    const authHeader= req.headers.authorization
    if(! authHeader || !authHeader.startsWith('Bearer ') ||authHeader.startsWith('Bearer null') ){
        // console.log("bas kar bahi")
        res.status(400).json({msg:"Authentication required"})
    }
    else{
        const token= authHeader.split(' ')[1]
        const payload= jwt.verify(token, "jwtsecret")
        try{
            req.user= {userId: payload.userId, name: payload.name}
            next()
        }
        catch(error){
            console.log("error hai bhai")
            res.status(400).json({mag:"Authentication invalid"})
        }
        
    }
    
}

module.exports= auth
















  // const User= require('../models/User')
  // const jwt = require('jsonwebtoken')
  // const {UnauthenticatedError}= require('../errors')
  
  // const auth= async (req, res, next)=>{
  //     const authHeader = req.headers.authorization
  //     if(!authHeader || !authHeader.startsWith('Bearer ')){
  //         throw new UnauthenticatedError('Authentication invalid')
  //     }
  //     const token= authHeader.split(' ')[1]
  //     const payload= jwt.verify(token,process.env.JWT_SECRET)
  
  //     try {
  //         req.user= {userId: payload.userId, name: payload.name}
  //         next()
  //     }
  //     catch(error){
  //         throw new UnauthenticatedError('Authentication invalid')
  //     }
  // }
  // module.exports= auth