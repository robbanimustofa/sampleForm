const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
// Router
const registerRoutes = require('./routes/api')
// Cors



require('dotenv/config');
// const api = process.env.API_URL;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/auth', registerRoutes)


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

// const PORT = process.env.PORT 
app.listen(3000, ()=>{
    console.log(`Running Port :  3000`)
    // console.log(api);
})
