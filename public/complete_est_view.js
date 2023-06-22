



const root_est= document.getElementById("root_est");


const params = window.location.search
const id= new URLSearchParams(params).get('id')

const userholder=document.getElementById('username_cp')
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



const show_estate= async()=>{
    // /api/v1/estates
    try{
        const {
                    data: { estate },
                  } = await axios.get(`/api/v1/estates/${id}`)
                  console.log(estate)
                  
                  root_est.innerHTML=`
            <div class="container">

            
                <div class="info_box">


                
                  <h4 class="underline_t">${estate[0].title} | ${estate[0].location}</h4>
                  
                 
                  <img  class="est_photo" src="${estate[0].photos}" alt="photo" >
                  
                  <div class="info">
                  <h5>$ ${estate[0].price} </h5>
                  <h5>${estate[0].bedrooms} bedrooms </h5>
                  <h5>${estate[0].area} acre </h5>
                  </div>

                </div>


                <div class="info_box1">
                   <h2 class="underline_t">More Details</h2>
                   <h4>Description: ${estate[0].description}</h4>
                   <h4>Price: ${estate[0].price}</h4>
                   <h4>Amenities: ${estate[0].amenities.join(",")}</h4>
                   <h4>Address: ${estate[0].location}</h4>
                   <h4>Built in Year: ${estate[0].yearBuilt}</h4>
                   <h2 class="underline_t">Agent Details: </h2>
                   <h3>Agent Name: ${estate[0].agent.name}</h3>
                   <h3>Agent Email: ${estate[0].agent.email}</h3>
                   <h3>Agent Phone Number: ${estate[0].agent.phone}</h3>
                </div>
                  
                
                  


            </div>
                  
                  
                  
                  
                 
                  
                  `
    }
    
    catch(error){
        console.log(error)
    }

}
show_estate();


// const showTask = async () => {
//     try {
//       const {
//         data: { task },
//       } = await axios.get(`/api/v1/tasks/${id}`)
//       const { _id: taskID, completed, name } = task
  
//       taskIDDOM.textContent = taskID
//       taskNameDOM.value = name
//       tempName = name
//       if (completed) {
//         taskCompletedDOM.checked = true
//       }
//     } catch (error) {
//       console.log("are baiii")
//       console.log(error)
//     }
//   }
  
//   showTask()
