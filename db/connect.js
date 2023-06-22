// const mongoose= require("mongoose")

// const connectDb= (url) =>{
//     return mongoose.connect(url,{
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useUnifiedTopology: true,
//     })
// }
// module.exports= connectDb




const mongoose = require("mongoose")
const connectDb = (MONGO_URI) => {
  return mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connectDb