const express = require('express')
const mongoose = require('mongoose')

// Router
const registerRoutes = require('./routes/api')
const app = express()

require('dotenv/config');
// const api = process.env.API_URL;

app.use(express.json());
app.use('/api', registerRoutes)

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName: 'sample_form'
})
.then(()=>{
    console.log('Database Connection')
})
.catch((err)=>{
    console.log(err)
})

// app.listen(3000, ()=>{
//     // console.log('server is running http://localhost:3000')
//     console.log(api);
// })