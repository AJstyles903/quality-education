const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name:{
        type : String,
        require : true
    },
    // middle_name:{
    //     type : String,
    //     require : false
    // },
    last_name:{
        type : String,
        require : true
    },
    e_mail:{
        type : String,
        require : true
    },
    phone_number:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmPassword:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
        require:true
    }
}
// {
//     timestamps : true
// }
)

const userModel = new mongoose.model('Register',userSchema)

module.exports=userModel