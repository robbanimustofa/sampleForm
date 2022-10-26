const {User} = require('../models/User.js')

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
        const register = await User.create(req.body)
        if(!register){throw{code:500,message:"USER_REGISTER_FAILED"}}
        return res.status(201).json({message:'Berhasil Membuat Akun', status:201,register})
    } catch (error) {
        return res.status(error.code || 500).json({status:false,message: error.message})
    }
}

const coba1 = async (req,res)=>{
    try {
        res.json({tittle:'Hello World'})
    } catch (error) {
        
    }
}

module.exports = {
    registerUsers, coba1
};