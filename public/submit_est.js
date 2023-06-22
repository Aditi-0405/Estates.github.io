const form_sub= document.getElementById("form_sub")

const title= document.getElementById("title")
const description= document.getElementById("description")
const price= document.getElementById("price")
const locationf= document.getElementById("location")
const area= document.getElementById("area")
const garage= document.getElementById("garage")
const bedrooms= document.getElementById("bedrooms")
const yearbuilt= document.getElementById("yearbuilt")
const amenities= document.getElementById("amenities")
const photo= document.getElementById("photo")
const agentname= document.getElementById("agentname")
const agentemail= document.getElementById("agentemail")
const agentphonenumber= document.getElementById("agentphonenumber")


// form_sub.addEventListener("submit" , async (event)=>{

  
//         event.preventDefault(); // Prevent the form from submitting
      
//         // Set the enctype attribute to "multipart/form-data"
//         form_sub.setAttribute('enctype', "multipart/form-data");
      
//         // Get the action URL for the form
//         const action = '/api/v1/estates/uploads';
      
//         // Set the action attribute of the form
//         form_sub.setAttribute('action', action);
      
//         // Submit the form
//         form_sub.submit();
//     }
// ) workkk



// form_sub.addEventListener("submit" , async (event)=>{

//     event.preventDefault(); // Prevent the form from submitting
  
//     // Set the enctype attribute to "multipart/form-data"
//     form_sub.setAttribute('enctype', "multipart/form-data");
  
//     // Get the action URL for the form
//     const action = '/api/v1/estates/uploads';
  
//     // Set the action attribute of the form
//     form_sub.setAttribute('action', action);
  
//     // Submit the form
    
//     form_sub.submit();  

//     const token= localStorage.getItem('token')
//     try{
//         const data  =await axios.post('/api/v1/estates/uploads' , {
//                         headers:{
//                             Authorization: `Bearer ${token}`
//                         }, body:{title:title.value,description:description.value,price:price.value,
//                              location:locationf.value, area:area.value, garage:garage.value,bedrooms:bedrooms.value,
//                              yearbuilt:yearbuilt.value,amenities:amenities.value,photo:photo.value,agentname:agentname.value,
//                              agentemail:agentemail.value,agentphonenumber:agentphonenumber.value}
//                     })


// // if(data.msg==='ok'){
// // console.log("estate created successfully")
// // }
// // else if(data.msg==='not_ok'){
// //     console.log("login to create an estate")
// // }

//     }
//     catch(error){
//         console.log(error)
//     }
//     // form_sub.submit();  
  
   
// }
// ) not workkkkk





// form_sub.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Prevent the form from submitting
  
//     const token = localStorage.getItem('token');
    
//     try {
//       const formData = new FormData(form_sub);
//       formData.append('Authorization', `Bearer ${token}`);
//       console.log(formData)
//       const response = await axios.post('/api/v1/estates/uploads', {formData, headers:{    Authorization: `Bearer ${token}`}});
//       // Handle the response as needed
//     } catch (error) {
//       console.log(error);
//     }
//   });workkkkk




// form_sub.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Prevent the form from submitting
  
//     const token = localStorage.getItem('token');
  
//     try {
//       const formData = new FormData(form_sub);
//       const config = {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       };
  
//       const response = await axios.post('/api/v1/estates/uploads', form);
//       // Handle the response as needed
//     } catch (error) {
//       console.log(error);
//     }
//   });

const userholder=document.getElementById('username2')
var u = localStorage.getItem('user');
if(u){
  userholder.innerHTML=u
  }


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


// form_sub.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Prevent the form from submitting
  
//     const token = localStorage.getItem('token');
  
//     try {
//       const formData = new FormData(form_sub);
//       const config = {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       };
  
//       const response = await axios.post('/api/v1/estates/uploads', formData,config);
//       console.log(response)
//       if(response.data.msg==="Authentication required"){
//         window.location.href = `/login`
//       }
//       // Handle the response as needed
//     } catch (error) {
//       console.log(error);
//     }
//   });//                                                                   works


form_sub.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent the form from submitting
    
      const token = localStorage.getItem('token');
    
      try {
        const formData = new FormData(form_sub);
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };
    
        const response = await axios.post('/api/v1/estates/uploads', formData,config);
        

        const estate_id=response.data.newEstate._id
        console.log(estate_id)

        var t = localStorage.getItem('token');
        if(t){
          const {
            data: { user },
          } = await axios.get(`/display/user_profile?token=${t}`)
        
          const {data}=await axios.post(`/api/v1/estates/createdBy/${user.userId}?estate_id=${estate_id}`)
          console.log(data)
        
        }


         




        if(response.data.msg==="Authentication required"){
          window.location.href = `/login`
        }
        // Handle the response as needed
      } catch (error) {
        console.log(error);
      }
    });









// const multer = require('multer');
// const upload = multer().none(); // Configure multer to handle only form fields, not files

// form_sub.addEventListener("submit", async (event) => {
//   event.preventDefault(); // Prevent the form from submitting

//   const token = localStorage.getItem('token');

//   try {
//     const formData = new FormData(form_sub);

//     await upload(request, response); // Call the multer middleware to handle form data

//     const config = {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     };

//     const response = await axios.post('/api/v1/estates/uploads', request.body, config);
//     // Handle the response as needed
//   } catch (error) {
//     console.log(error);
//   }
// });

  



// form_sub.addEventListener("submit", async (event) => {
//     event.preventDefault(); // Prevent the form from submitting
  
//     const token = localStorage.getItem('token');
    
//     try {
//       const formData = new FormData(form_sub);
//       formData.append('Authorization', `Bearer ${token}`);
//       console.log(formData)
//       const response = await axios.post('/api/v1/estates/uploads', formData);
//       // Handle the response as needed
//     } catch (error) {
//       console.log(error);
//     }
//   });


//     const token= localStorage.getItem('token')

//     try{

//         // await axios.post('/api/v1/estates/uploads' , {
//         //     headers:{
//         //         Authorization: `Bearer ${token}`
//         //     }, body:{title:title.value,description:description.value,price:price.value,
//         //          location:locationf.value, area:area.value, garage:garage.value,bedrooms:bedrooms.value,
//         //          yearbuilt:yearbuilt.value,amenities:amenities.value,photo:photo.value,agentname:agentname.value,
//         //          agentemail:agentemail.value,agentphonenumber:agentphonenumber.value}
//         // })
//         await axios.post('/api/v1/estates/uploads' , 
            
//                {title:title.value,description:description.value,price:price.value, 
//                 location:locationf.value, area:area.value, garage:garage.value,bedrooms:bedrooms.value,yearbuilt:yearbuilt.value,
//                 amenities:amenities.value,photo:photo.value,agentname:agentname.value,agentemail:agentemail.value,
//                 agentphonenumber:agentphonenumber.value}
        
//     )
//     }
//     catch(error){
//         console.log(error)
//     }
// })







// const name= name_reg.value
// const email= email_reg.value
// const password= password_reg.value

// try{
//     const{data}= await axios.post('/api/v1/auth/register', {name, email, password})
//     console.log(data.msg)
//     window.location.href = `/`

// }



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