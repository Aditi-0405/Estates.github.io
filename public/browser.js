// const locationS= document.getElementById('sb_location');
// const Sbutton= document.getElementById('search')
// const userholder=document.getElementById('username')


// // const create=document.getElementById("create")

// // create.addEventListener("click" , async ()=>{
// //     const token= localStorage.getItem('token')

// //     try{

// //          data=await axios.get('/create' , {
// //             headers:{
// //                 Authorization: `Bearer ${token}`
// //             }
// //         })
// //         // window.location.href = `/`
     
        
// //     }
// //     catch(error){
// //         console.log(error)
// //     }
// // })

// Sbutton.addEventListener("click",function() {
//     const loc=locationS.value

//     window.location.href = `/display?location=${loc}`
     
//   })
//   var u = localStorage.getItem('user');
//   console.log(u)
//   if(u){
//   userholder.innerHTML=u
//   }
//   // btnDOM.addEventListener('click', async () => {
//   //   const token = localStorage.getItem('token')
  
//   //   try {
//   //     const { data } = await axios.get('/api/v1/dashboard', {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`
     
//   //         ,
//   //       },
//   //     })
//   //     resultDOM.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`
  
  
//   //     // data.secret
//   //   } catch (error) {
//   //     localStorage.removeItem('token')
//   //     resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`
//   //   }
//   // })
  
//   // const checkToken = () => {
//   //   tokenDOM.classList.remove('text-success')
  
//   //   const token = localStorage.getItem('token')
//   //   if (token) {
//   //     tokenDOM.textContent = 'token present'
//   //     tokenDOM.classList.add('text-success')
//   //   }
//   // }
//   // checkToken()
  
//   // const User= require('../models/User')
//   // const jwt = require('jsonwebtoken')
//   // const {UnauthenticatedError}= require('../errors')
  
//   // const auth= async (req, res, next)=>{
//   //     const authHeader = req.headers.authorization
//   //     if(!authHeader || !authHeader.startsWith('Bearer ')){
//   //         throw new UnauthenticatedError('Authentication invalid')
//   //     }
//   //     const token= authHeader.split(' ')[1]
//   //     const payload= jwt.verify(token,process.env.JWT_SECRET)
  
//   //     try {
//   //         req.user= {userId: payload.userId, name: payload.name}
//   //         next()
//   //     }
//   //     catch(error){
//   //         throw new UnauthenticatedError('Authentication invalid')
//   //     }
//   // }
//   // module.exports= auth










const locationS= document.getElementById('sb_location');
const Sbutton= document.getElementById('search')
const userholder=document.getElementById('username')
const userInfo= document.getElementById("user_info")


var u = localStorage.getItem('user');
  // console.log(u)
  if(u){
  userholder.innerHTML=u
  }

// const create=document.getElementById("create")

// create.addEventListener("click" , async ()=>{
//     const token= localStorage.getItem('token')

//     try{

//          data=await axios.get('/create' , {
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         // window.location.href = `/`
     
        
//     }
//     catch(error){
//         console.log(error)
//     }
// })
userholder.addEventListener("click", async function(){
  var t = localStorage.getItem('token');
  if(t){
  const {
    data: { user },
  } = await axios.get(`/display/user_profile?token=${t}`)
  console.log(user)

  window.location.href = `/display/user_profilee?id=${user.userId}&name=${user.name}`



}


})





Sbutton.addEventListener("click",function() {
    const loc=locationS.value

    window.location.href = `/display?location=${loc}`
     
  })
  var u = localStorage.getItem('user');
  // console.log(u)
  if(u){
  userholder.innerHTML=u
  }
  // btnDOM.addEventListener('click', async () => {
  //   const token = localStorage.getItem('token')
  
  //   try {
  //     const { data } = await axios.get('/api/v1/dashboard', {
  //       headers: {
  //         Authorization: `Bearer ${token}`
     
  //         ,
  //       },
  //     })
  //     resultDOM.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`
  
  
  //     // data.secret
  //   } catch (error) {
  //     localStorage.removeItem('token')
  //     resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`
  //   }
  // })
  
  // const checkToken = () => {
  //   tokenDOM.classList.remove('text-success')
  
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     tokenDOM.textContent = 'token present'
  //     tokenDOM.classList.add('text-success')
  //   }
  // }
  // checkToken()
  
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




  // form_sub.addEventListener("submit", async (event) => {
  //   event.preventDefault(); // Prevent the form from submitting
  
  //   const token = localStorage.getItem('token');
  
  //   try {
  //     const formData = new FormData(form_sub);
  //     const config = {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     };
  
  //     const response = await axios.post('/api/v1/estates/uploads', formData,config);
  //     console.log(response)
  //     if(response.data.msg==="Authentication required"){
  //       window.location.href = `/login`
  //     }
  //     // Handle the response as needed
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  