const path= require('path')
require('dotenv').config();
const bodyParser = require('body-parser');
const multer= require('multer')
const express= require("express")
const app= express();
const jwt = require('jsonwebtoken')

const auth= require('./middlewares/authentication')
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static('./public'))
app.set("view engine", "ejs")
app.set("views", path.resolve("./public/views"))



app.get('/', (req, res)=>{
    res.render("homepage")
})
app.get('/create',(req, res)=>{
    // console.log(req.headers)
    // console.log(req.headers.authorization)
    res.render("index")
})
app.get('/display', (req, res)=>{
    res.render("display")
})
app.get('/login', (req, res)=>{
    res.render("login")
})
app.get('/register',(req, res)=>{
    res.render("register")
})



app.get('/display/user_profile', (req,res) => {
    const{token}= req.query
    
        
        const payload= jwt.verify(token, "jwtsecret")
        try{
            user= {userId: payload.userId, name: payload.name}
            res.status(200).json({user})
        }
        catch(error){
            console.log("error hai bhai")
            res.status(400).json({mag:"Authentication invalid"})
        }
        
    
})
app.get('/display/user_profilee', (req, res)=>{
    res.render("personal_profile")
})

app.get('/estate/complete_est_view', (req, res)=>{
    res.render("complete_est_view")
})

const storage= multer.diskStorage({
    destination: function( req, file, cb){
        return cb(null, './uploads')
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload= multer({storage: storage})


// app.post('/api/v1/estates/uploads', upload.single('profileImage'),(req, res)=>{
//     console.log(req.body);
//     console.log(req.file);
//     return res.redirect("/")
// })






const connectDb= require('./db/connect')
const estateRouter= require('./routes/estates')
const authRouter= require('./routes/auth')
// app.set("view engine", "ejs")
// app.set("views", path.resolve("./views"))
// app.get('/',(req, res)=>{
  
//     return res.render("homepage")
// })

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/estates', estateRouter)





const port= process.env.PORT || 3000


const start= async ()=>{
    try{
    await connectDb(process.env.MONGO_URI)
    app.listen(port, ()=>{
        console.log(`port is listening to port ${port}`)
    })
}
catch(error){
   console.log(error)
}
}
start()


