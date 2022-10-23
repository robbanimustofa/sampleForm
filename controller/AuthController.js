const User = require("../models/User.js");

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

// module.export = new AuthController();

const registerUsers = async (req,res)=>{
    try {
        const userSchema = await User.create(req.body)
        return res.status(201).json(userSchema)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.export = {
    registerUsers
};