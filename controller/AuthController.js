const {User} = require('../models/User.js');
const {emailExist} = require('../libraries/emailExist.js');
const bcrypt = require('bcrypt');

// class AuthController {
//     async register(req,res){
//         // const {fullname, email, password} = req.body
//         try {
//             const user = await User.create(req.body)
//             return res.status(201).json(user)
//         } catch (error) {
//             return res.status(500).json({message: error.message})
//         }
//     }
// }

// module.exports = new AuthController();

const registerUsers = async (req,res)=>{
    try {
        // check username, email and password
        if(!req.body.fullname){throw {code:400, message:"Fullname is required"}}
        if(!req.body.email){throw {code:400, message:"email is required"}}
        if(!req.body.password){throw {code:400, message:"Password is required"}}
        
        // Check lenght password
        if(req.body.password.length<6){throw{code:400,message:"Password Minimum 6 Character"}}
        // Check Email
        const email_Exist = await emailExist(req.body.email)
        if(email_Exist){throw{code:409, message:"Email Already Exist"}}
        // hash password with bcrypt
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hash(req.body.password,salt)
        // Create
        // const register = await User.create(req.body)
        const register = await User.create({
            fullname:req.body.fullname,
            email:req.body.email,
            password:hash
        })
        // if(!register){throw{code:500,message:"USER_REGISTER_FAILED"}}
        return res.status(201).json({message:'Berhasil Membuat Akun', status:201,register})
    } catch (error) {
        return res.status(error.code || 500).json({status:false,message: error.message})
    }
}

const loginUsers = async (req,res)=>{
    try {
        const data = await User.find()
        res.status(200).json({message:'Berhasil Melakukan Login!', status:200,data})
    } catch (error) {
        return res.status(error.code || 500).json({status:false,message: error.message})
    }
}

module.exports = {
    registerUsers, loginUsers
};