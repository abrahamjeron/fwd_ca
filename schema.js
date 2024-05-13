const mongoose=require('mongoose')
const User= new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const person = mongoose.model('user',User);
module.exports=person;