import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv' ;
import userRoutes from './Routes/userRoutes.js'

dotenv.config();



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB Connected");
})
.catch((err) =>{
    console.log(err);
})

const app = express() ;

app.listen(5000,()=>{
    console.log("Server Running On Port : 5000")
})

app.use('/api/user',userRoutes)

