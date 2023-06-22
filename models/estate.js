const mongoose = require('mongoose')
const EstateSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'please prove the title for your estate']
    },
    description:{
        type:String,
        required:[true, 'please provide the desciption for your estate']
    },
    price:{
        type:Number,
        required:[true, 'please provide the price for you estate']
    },
    location:{
        type: String,
        required:[true, 'please provide the location for your estate']
    },
    area:{
        type:Number,
        required:[true, 'please provide the area of your estate']
    },
    bedrooms:{
        type: Number
    },
    garage:{
        type: Boolean,
        default: false
    },
    yearBuilt:{
        type: Number,
        required:[true, 'Please provide the year of construction']
    },
    amenities:[
        {
            type: String
        }
    ],
    photos:{
        type: String,
        required:[true, 'Please upload the image of your estate']
    },
    agent:{
        name:{
            type: String,
            required:[true, 'please provide agent name']
        },
        email:{
            type:String,
            required:[true, 'please provide email of the agent']
        },
        phone:{
            type:String,
            required:[true, 'please provide phone number of the agent']
        }
    }


})




module.exports= mongoose.model('Estatesdoc',EstateSchema )












// {
//     "id": 1,
//     "title": "Spacious Family Home in a Quiet Neighborhood",
//     "description": "A beautiful 3-bedroom, 2-bathroom home located in a peaceful and family-friendly neighborhood.",
//     "price": 250000,
//     "location": "123 Main Street, Cityville",
//     "area": 1800,
//     "bedrooms": 3,
//     "bathrooms": 2,
//     "garage": true,
//     "yearBuilt": 2010,
//     "amenities": ["Swimming Pool", "Garden", "Fireplace"],
//     "photos": [
//       "https://example.com/photo1.jpg",
//       "https://example.com/photo2.jpg",
//       "https://example.com/photo3.jpg"
//     ],
//     "agent": {
//       "name": "John Smith",
//       "email": "john@example.com",
//       "phone": "123-456-7890"
//     }
//   }