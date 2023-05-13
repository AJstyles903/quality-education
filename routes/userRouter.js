const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// router.get("/",(req,res)=>{
//     res.send("Hello")
// })

router.post('/register',async(req,res)=>{
    //     const newUser = new User({
        //         first_name:req.body.first_name,
        //         last_name:req.body.last_name,
        //         e_mail:req.body.e_mail,
        //         phone_number:req.body.phone_number,
        //         password:req.body.password,
        //         confirmPassword:req.body.confirmPassword 
        //     });
        
        //     try {
            //         const user = await newUser.save()
            //         res.send("User Register Successfully");
            //     } catch (error) {
                //         res.status(500).json({error});
                //     }
                console.log(req.body);
                res.json({message:req.body});
});
            
router.post('/register',async(req,res)=>{
    const {e_mail,password}=req.body;
    try {
        const user=await User.findOne({e_mail:e_mail,password:password});
        if (user) {
            const temp={
                e_mail:user.e_mail,
                isAdmin:user.isAdmin,
                _id:user._id
            }
            res.send(user);
        } else {
            return res.status(400).json(`failed`); 
        }       
    } catch (error) {
        return res.status(400).json(error);
    }

});

module.exports=router