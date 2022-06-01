const mongoose = require('mongoose');
const commonURI="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";
const connectToMongo=()=>
{
    mongoose.connect(commonURI,()=>{
        console.log('connected');
    })
}
module.exports=connectToMongo;