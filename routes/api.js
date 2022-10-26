const router = require('express').Router();
const {registerUsers, coba1} = require("../controller/AuthController.js")

// router.post('/', (req,res)=>{
//     const userSchema =  User.create(req.body)
//     return res.status(201).json(userSchema)
// })

router.get('/login', coba1)

router.post('/register', registerUsers)

module.exports = router 