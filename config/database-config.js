const mongoose=require('mongoose');
const connect=async()=>{
    await mongoose.connect("mongoodb://localhost/chatapp");

}
module.exports=connect;