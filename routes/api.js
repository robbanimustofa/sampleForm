const express = require('express');
const router = express.Router();
const {registerUsers} = require("../controller/AuthController.js")

router.post('/', registerUsers)

module.exports = router 