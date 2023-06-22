const params= window.location.search
const id= new URLSearchParams(params).get('id')
const name= new URLSearchParams(params).get('name')

const user_info= document.getElementById("user_info")
const userholder = document.getElementById('username1')
const logout = document.getElementById('logout')
var u = localStorage.getItem('user');
if (u) {
  userholder.innerHTML = u
  logout.innerHTML=`LOGOUT`
  // Assuming you have an item stored in local storage with the key 'myItem'


}

logout.addEventListener('click', function(){
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  window.location.href = `/`

})

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


const showProfile = async() =>{
    // user_info.innerHTML=`id= ${id} name= ${name}`
    // /findUserProfile/:id

    var t = localStorage.getItem('token');
    if(t){
  const {
    data: { user },
  } = await axios.get(`/display/user_profile?token=${t}`)
  const {data}=await axios.get(`/api/v1/estates/findUserProfile/${user.userId}`)
  user_info.innerHTML=`
  <div class="test">
  <div class="main_details">
  <h4>Username: ${data.user_P.name}</h4>
  <h4>Username: ${data.user_P.email}</h4>
  <a href="#" class="show_pd_cre_est">MY ESTATES</a>
  <a href="#" class="show_pd_est_list">MY LIST</a>
  
  </div>
  <div class="centre_items">
 
  </div>
  
  
  </div>

  
  
  `

}


}
showProfile()
document.addEventListener('click', function(event){
    if(event.target.classList.contains('show_pd_cre_est')){
        handleButtonClick();
    }
    if(event.target.classList.contains('show_pd_est_list')){
      handleButtonClick1();
  }
 

    
});


document.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove_from_list')) {
    const buttonId = event.target.id;
    handleButtonClick3(buttonId);
  }
});


document.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete_estate')) {
    const buttonId = event.target.id;
    handleButtonClick4(buttonId);
  }
});

// function handleButtonClick(buttonId) {
//   console.log('Button clicked! ID:', buttonId);
//   // Perform any actions or modifications as needed
// }


async function handleButtonClick3(buttonId) {

  var t = localStorage.getItem('token');
  if(t){
const {
  data: { user },
} = await axios.get(`/display/user_profile?token=${t}`)


const {data}=await axios.post(`/api/v1/estates/RemoveFromList/${user.userId}?estate_id=${buttonId}`)
handleButtonClick1()
// console.log(data)
// handleButtonClick();
  }
}

async function handleButtonClick4(buttonId) {

  var t = localStorage.getItem('token');
  if(t){
const {
  data: { user },
} = await axios.get(`/display/user_profile?token=${t}`)


const {data}=await axios.post(`/api/v1/estates/deleteEstate/${user.userId}?estate_id=${buttonId}`)
handleButtonClick()
// console.log(data)
// handleButtonClick();
  }
}





async function handleButtonClick(){


    var t = localStorage.getItem('token');
    if(t){
  const {
    data: { user },
  } = await axios.get(`/display/user_profile?token=${t}`)
  const {data}=await axios.get(`/api/v1/estates/findUserProfile/${user.userId}`)

  const created_estates= data.user_P.created_estates
  const centre_items=document.querySelector('.centre_items')
  centre_items.innerHTML=``

  for(const element of created_estates) {
    const el= document.createElement('div');
    el.classList.add('section_child')

    const {data}= await axios.get(`/api/v1/estates/${element}`)
    
    const estate_array=data.estate
    console.log(data.estate)
    estate=estate_array[0]
    // /api/v1/estates/
    el.innerHTML=`
  
    <div class= "single_estate" >
     
    <a href="/estate/complete_est_view?id=${estate._id}" class="estate_comp_view"><img src="${estate.photos} " class="estate_photo">
    <h4>${estate.title} | $${estate.price}</h4>
    <h5>${estate.location}</h5></a>
    <button type="click" class="delete_estate" id="${estate._id}">Delete Estate</button>

    </div>
    
    `;
    centre_items.appendChild(el)
    


    
  };

  
  
  const el= document.createElement('div');
  el.classList.add('section_child')
  el.innerHTML=`

  
  
  `

}



}

async function handleButtonClick1(){


  var t = localStorage.getItem('token');
  if(t){
const {
  data: { user },
} = await axios.get(`/display/user_profile?token=${t}`)
const {data}=await axios.get(`/api/v1/estates/findUserProfile/${user.userId}`)

const estates_list= data.user_P.estates_list
const centre_items=document.querySelector('.centre_items')
centre_items.innerHTML=``

for(const element of estates_list) {
  const el= document.createElement('div');
  el.classList.add('section_child')

  const {data}= await axios.get(`/api/v1/estates/${element}`)
  
  const estate_array=data.estate
  console.log(data.estate)
  estate=estate_array[0]
  // /api/v1/estates/
  el.innerHTML=`

  <div class= "single_estate" >
   
  <a href="/estate/complete_est_view?id=${estate._id}" class="estate_comp_view"><img src="${estate.photos} " class="estate_photo">
  <h4>${estate.title} | $${estate.price}</h4>
  <h5>${estate.location}</h5></a>
  <button type="click" class="remove_from_list" id="${estate._id}">Remove From List</button>

  </div>
  
  `;
  centre_items.appendChild(el)
  


  
};



const el= document.createElement('div');
el.classList.add('section_child')
el.innerHTML=`



`

}



}


// document.addEventListener('click', function (event) {
//     if (event.target.classList.contains('add_to_list')) {
//       const buttonId = event.target.id;
//       handleButtonClick(buttonId);
//     }
//   });
  
//   // function handleButtonClick(buttonId) {
//   //   console.log('Button clicked! ID:', buttonId);
//   //   // Perform any actions or modifications as needed
//   // }
  
  
//   async function handleButtonClick(buttonId) {
  
//     var t = localStorage.getItem('token');
//     if(t){
//   const {
//     data: { user },
//   } = await axios.get(`/display/user_profile?token=${t}`)
  
  
//   const {data}=await axios.post(`/api/v1/estates/addToList/${user.userId}?estate_id=${buttonId}`)
//   console.log(data)
//     }
  
  
  
//     // Perform any actions or modifications as needed
//   }