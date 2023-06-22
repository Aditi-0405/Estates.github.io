// const params = window.location.search
// const l= new URLSearchParams(params).get('location')
// const test=document.getElementById("test")
// const img=document.getElementById("img")

// const showTask = async () => {
// const {
//     data: { estates },
//   } = await axios.get(`/api/v1/estates/display?location=${l}`)
//   console.log(estates)
// //   test.innerHTML=estates[0].price
//   const trying=`<div class="test" ><h1>${estates[0].price} </h1> <img src="${estates[0].photos}" class="img"> </div>`
//     test.innerHTML=trying


// }

//   showTask()





// const locationS= document.getElementById('sb_location1');
// const Sbutton= document.getElementById('search1')



// Sbutton.addEventListener("click",function() {
//   const loc=locationS.value

//   window.location.href = `/display?location=${loc}`

// })

// const userholder=document.getElementById('username1')
// var u = localStorage.getItem('user');
// if(u){
//   userholder.innerHTML=u
//   }



// const params = window.location.search
// const l= new URLSearchParams(params).get('location')
// const test=document.getElementById("test")
// const img=document.getElementById("img")

// const showTask = async () => {
// const {
//     data: { estates },
//   } = await axios.get(`/api/v1/estates/display?location=${l}`)
//   // console.log(estates)
//   console.log(l);
//   test.innerHTML=``;
//   estates.forEach(element => {

//     const estateEl = document.createElement('div');
//     estateEl.classList.add('section_child');
//     estateEl.innerHTML=`
//     <div class= "single_estate">

//     <img src="${element.photos} " class="estate_photo">
//     <h4>${element.title} | $${element.price}</h4>
//     <h5>${element.location}</h5>

//     </div>

//     `;
//     test.appendChild(estateEl)


//   });



// }

//   showTask()


const locationS = document.getElementById('sb_location1');
const priceS_low = document.getElementById('sb_price1');
const priceS_high = document.getElementById('sb_price2');
const bedroomsS = document.getElementById('sb_bedrooms1');

const loc_Sbutton = document.getElementById('search1')
const price_Sbutton_low = document.getElementById('search2')
const price_Sbutton_high = document.getElementById('search4')
const bed_Sbutton = document.getElementById('search3')


const params = window.location.search
const l = new URLSearchParams(params).get('location')
const p_l = new URLSearchParams(params).get('price_l')
const p_u = new URLSearchParams(params).get('price_u')
const b = new URLSearchParams(params).get('bedrooms')
const test = document.getElementById("test")
const img = document.getElementById("img")




loc_Sbutton.addEventListener("click", function () {
  const loc = locationS.value
  const price_low = priceS_low.value
  const price_high = priceS_high.value
  const bedrooms = bedroomsS.value




  // window.location.href = `/display?location=${loc}`
  window.location.href = `/display?location=${loc}&price_l=${price_low}&price_u=${price_high}&bedrooms=${bedrooms}`

})

price_Sbutton_low.addEventListener("click", function () {
  const loc = locationS.value
  const price_low = priceS_low.value
  const price_high = priceS_high.value
  const bedrooms = bedroomsS.value




  // window.location.href = `/display?location=${loc}`
  window.location.href = `/display?location=${loc}&price_l=${price_low}&price_u=${price_high}&bedrooms=${bedrooms}`

})
price_Sbutton_high.addEventListener("click", function () {
  const loc = locationS.value
  const price_low = priceS_low.value
  const price_high = priceS_high.value
  const bedrooms = bedroomsS.value




  // window.location.href = `/display?location=${loc}`
  window.location.href = `/display?location=${loc}&price_l=${price_low}&price_u=${price_high}&bedrooms=${bedrooms}`

})

bed_Sbutton.addEventListener("click", function () {
  const loc = locationS.value
  const price_low = priceS_low.value
  const price_high = priceS_high.value
  const bedrooms = bedroomsS.value




  // window.location.href = `/display?location=${loc}`
  window.location.href = `/display?location=${loc}&price_l=${price_low}&price_u=${price_high}&bedrooms=${bedrooms}`

})

const userholder = document.getElementById('username1')
var u = localStorage.getItem('user');
if (u) {
  userholder.innerHTML = u
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





// const showTask = async () => {
// const {
//     data: { estates },
//   } = await axios.get(`/api/v1/estates/display?location=${l}&bedrooms=${b}&price_l=${p_l}&price_u=${p_u}`)
//   // console.log(estates)
//   console.log(l);
//   test.innerHTML=``;
//   estates.forEach(element => {

//     const estateEl = document.createElement('div');
//     estateEl.classList.add('section_child');
//     estateEl.innerHTML=`
//     <div class= "single_estate" id="${element._id}">

//     <img src="${element.photos} " class="estate_photo">
//     <h4>${element.title} | $${element.price}</h4>
//     <h5>${element.location}</h5>

//     </div>

//     `;
//     test.appendChild(estateEl)


//   });



// }

//   showTask()
const showTask = async () => {
  const {
    data: { estates },
  } = await axios.get(`/api/v1/estates/display?location=${l}&bedrooms=${b}&price_l=${p_l}&price_u=${p_u}`)
  // console.log(estates)

  test.innerHTML = ``;
  estates.forEach(element => {

    const estateEl = document.createElement('div');
    estateEl.classList.add('section_child');
    estateEl.innerHTML = `
      <div class= "single_estate" >
     
      <a href="/estate/complete_est_view?id=${element._id}" class="estate_comp_view"><img src="${element.photos} " class="estate_photo">
      <h4>${element.title} | $${element.price}</h4>
      <h5>${element.location}</h5></a>
      <button type="click" class="add_to_list" id="${element._id}">Add to Options</button>
  
      </div>
      
      `;
    test.appendChild(estateEl)


  });



}

showTask()









document.addEventListener('click', function (event) {
  if (event.target.classList.contains('add_to_list')) {
    const buttonId = event.target.id;
    handleButtonClick4(buttonId);
  }
});

// function handleButtonClick(buttonId) {
//   console.log('Button clicked! ID:', buttonId);
//   // Perform any actions or modifications as needed
// }


async function handleButtonClick4(buttonId) {

  var t = localStorage.getItem('token');
  if(t){
const {
  data: { user },
} = await axios.get(`/display/user_profile?token=${t}`)


const {data}=await axios.post(`/api/v1/estates/addToList/${user.userId}?estate_id=${buttonId}`)
console.log(data)
  }



  // Perform any actions or modifications as needed
}

// var t = localStorage.getItem('token');
// if(t){
// const {
//   data: { user },
// } = await axios.get(`/display/user_profile?token=${t}`)
// console.log(user)

// window.location.href = `/display/user_profilee?id=${user.userId}&name=${user.name}`



  //   function handleButtonClick(buttonId) {
  //     // Perform actions with the button ID
  //     console.log("Button ID:", buttonId);
  //     // You can send the button ID to the server, manipulate the DOM, or perform any other required operations
  //   }

  //   add_to_list= document.querySelector('.add_to_list')


  //   if(add_to_list){

  //   add_to_list.addEventListener("click", function() {
  //     handleButtonClick(this.id);
  //   })
  // }


  // document.addEventListener('DOMContentLoaded', () => {
  //   console.log("fghj")
  //   // Select the element dynamically
  //   add_to_list= document.querySelector('.add_to_list')

  //   // Check if the element was found
  //   if (add_to_list) {
  //     // Add a click event listener
  //     add_to_list.addEventListener('click', () => {
  //       console.log('Button clicked!');
  //       // Perform any actions or modifications as needed
  //     });
  //   }
  // });