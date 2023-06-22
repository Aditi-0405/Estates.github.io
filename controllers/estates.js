const Estatesdoc = require('../models/estate')
const mongoose = require('mongoose');
const User_Profile = require('../models/user_profile')




const getAllEstates = async (req, res) => {
    try{
         const estates= await Estatesdoc.find({})
         res.status(200).json({estates})
    }
    catch(error){
        console.log(error)
    }
}
// const getAllTasks = asyncWrapper(async (req, res) => {
//     const tasks = await Task.find({})
//     res.status(200).json({ tasks })
//   })

const createEstate = async (req, res) => {
    // console.log(req.body);

    // console.log(req.body)
    // console.log(req.headers)
    // console.log(req.file)

    const { title, description, price, location, area, garage, bedrooms, yearbuilt, amenities, agentname, agentemail, agentphonenumber } = req.body
    // const{path} = req.file
    const pricef = parseInt(price)
    const areaf = parseInt(area)
    const bedroomf = parseInt(bedrooms)
    const yearbuiltf = parseInt(yearbuilt)
    let garagef
    if (garage === 'on') {
        garagef = true
    }
    else {
        garagef = false
    }
    const amenitiesf = amenities.split(",");
   

    const imagePath = req.file.path
    const imagePathf= imagePath.split("public")[1]


    //   const newEstate = await new Estatesdoc ({
    //     title: title,
    //     description: description,
    //     price: pricef,
    //     location: location,
    //     area: areaf,
    //     garage: garagef,
    //     bedrooms: bedroomf,
    //     yearBuilt:yearbuiltf,
    //     amenities:amenitiesf,
    //     agentname:agentname,
    //     agentemail:agentemail,
    //     agentphonenumber:agentphonenumber,


    //     photos: imagePath
    // })
    try {
        const newEstate = await Estatesdoc.create({

            title: title,
            description: description,
            price: pricef,
            location: location,
            area: areaf,
            garage: garagef,
            bedrooms: bedroomf,
            yearBuilt: yearbuiltf,
            amenities: amenitiesf,
            // agent.name:agentname,
            // agent.email:agentemail,
            // agent.phone:agentphonenumber,
            agent: {
                name:agentname,
                email:agentemail,
                phone:agentphonenumber,
            },


            photos: imagePathf

        });
        // console.log(newEstate)
        
        // res.status(200).json({msg:"ok"})
        console.log(newEstate)
        res.status(200).json({newEstate})
    }
    catch (error) {
        console.log(error)
       
    }


    // return res.redirect("/")

}



const getByLocation = async (req, res, next) => {
    try{
    const { location: location } = req.params
    const estate = await Estatesdoc.findOne({ location: location })
    if (!estate) {
      return next(createCustomError(`No estate with location : ${location}`, 404))
    }
  
    res.status(200).json({ estate })}
    catch(error){
        console.log(error)
    }
  }





  // trying to create a function which takes care of all the constraints entered including location, price, bedrooms

//   const getVariousEstates = async(req, res)=>{
//     const{location}= req.query
//     const queryObject={}
//     if(location!='null'){
//         // console.log('bhaiii sahab')
//         queryObject.location= location
//     }
   
//     let estates = await Estatesdoc.find(queryObject);
//     // console.log(estates)
//     res.status(200).json({ estates });

//   }                                                             //correct one





  const getVariousEstates = async(req, res)=>{
    const{location, price_u, price_l , bedrooms}= req.query
    // console.log(req.query)
    const queryObject={}
    if(location!='null' && location!=''){
        // console.log('bhaiii sahab')
        queryObject.location= location
    }
    // if(price!='null' && price!=''){
    //     queryObject.price=parseInt(price, 10);

    // }
    if(bedrooms!='null' && bedrooms!=''){
        queryObject.bedrooms=parseInt(bedrooms, 10);

    }


    if(price_l!='null' && price_l!=''&&price_u!='null' && price_u!=''){
        const min_price= parseInt(price_l)
        const max_price= parseInt(price_u)
      
           const  priceq= {
              $gte: min_price,
              $lte: max_price
            }
          


        queryObject.price=priceq

    }
    else if((price_l=='null' || price_l=='')&&(price_u!='null' && price_u!='')){
        const max_price= parseInt(price_u)
        const  priceq= {
            $lte: max_price
          }
          queryObject.price=priceq


    }
    else if((price_u=='null' || price_u=='')&&(price_l!='null' && price_l!='')){
        const min_price= parseInt(price_l)
        const  priceq= {
            $gte: min_price
          }
          queryObject.price=priceq


    }
   


    

    
   
    // let estates = await Estatesdoc.find(queryObject);
    // console.log(queryObject)
    let estates = await Estatesdoc.find(queryObject);
    
    res.status(200).json({ estates });

  }


  const getSingleEstate = async (req, res) => {
    try{
         const estate= await Estatesdoc.find({_id: req.params.id})
         res.status(200).json({estate})
    }
    catch(error){
        console.log(error)
    }
}


const addToList = async(req, res)=>{
    try{
    const{estate_id}= req.query
    const user= await User_Profile.find({user_id: req.params.id})
    if(!user[0].estates_list.includes(estate_id)){
        user[0].estates_list.push(estate_id)
        await user[0].save();

    }

  
    // console.log(estate_id)
    // console.log(user)
    res.status(200).json({ message: 'Element added to estate successfully' });
    }
    catch(error){
        console.error('Error adding element to estate:', error);
    res.status(500).json({ message: 'Failed to add element to estate' });

    }

}


const RemoveFromList = async(req, res)=>{
    try{
    const{estate_id}= req.query
    const user= await User_Profile.find({user_id: req.params.id})
//     console.log('User:', user);
// console.log('Estate ID:', estate_id);
  
        user[0].estates_list.remove(estate_id)
        await user[0].save();

  

  
    // console.log(estate_id)
    // console.log(user)
    res.status(200).json({ message: 'Element added to estate successfully' });
    }
    catch(error){
        console.error('Error adding element to estate:', error);
    res.status(500).json({ message: 'Failed to add element to estate' });

    }

}



const deleteEstate = async(req, res)=>{
    try{
    const{estate_id}= req.query
    const user= await User_Profile.find({user_id: req.params.id})

  
        user[0].created_estates.remove(estate_id)
        await user[0].save();


        await Estatesdoc.deleteOne({_id:estate_id})



  

  
    // console.log(estate_id)
    // console.log(user)
    res.status(200).json({ message: 'Element added to estate successfully' });
    }
    catch(error){
        console.error('Error adding element to estate:', error);
    res.status(500).json({ message: 'Failed to add element to estate' });

    }

}

// user_id:{
//     type: mongoose.Schema.Types.ObjectId
// },
// estates_list:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Estatesdoc' }]

  
const createdBy = async(req, res)=>{
    try{
    const{estate_id}= req.query
    const user= await User_Profile.find({user_id: req.params.id})
    if(!user[0].created_estates.includes(estate_id)){
        user[0].created_estates.push(estate_id)
        await user[0].save();

    }

  
    // console.log(estate_id)
    // console.log(user)
    res.status(200).json({ message: 'Element added to estate successfully' });
    }
    catch(error){
        console.error('Error adding element to estate:', error);
    res.status(500).json({ message: 'Failed to add element to estate' });

    }

}

const findUserProfile = async(req, res)=>{
    try{
        const user = await User_Profile.find({user_id: req.params.id})
        if(user){
            res.status(200).json({user_P:user[0]})
            // const a= user[0]
            // res.status(200).json({a})
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({message: 'Something went wrong'})

    }

}
// const UserProfileByUser = async(req, res)=>{
//     try{
//         const user = await User_Profile.find({user_id: req.params.id})
//         if(user){
//             res.status(200).json({user_P:user[0]})
//             // const a= user[0]
//             // res.status(200).json({a})
//         }

//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({message: 'Something went wrong'})

//     }

// }





module.exports = { getAllEstates, createEstate,getVariousEstates ,getSingleEstate, addToList , createdBy, findUserProfile, RemoveFromList, deleteEstate}

