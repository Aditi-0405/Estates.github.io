const mongoose= require("mongoose")
const bcrypt= require("bcryptjs")
const jwt= require("jsonwebtoken")
const Estatesdoc = require('./estate')

const User_ProfileSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please provide name']
    },
    email:{
        type:String,
        required:[true, 'please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
          unique: true,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId
    },
    estates_list:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Estatesdoc' }],
    created_estates:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Estatesdoc' }]
    
})


module.exports= mongoose.model('User_Profile' , User_ProfileSchema)