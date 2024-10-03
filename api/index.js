import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv' ;
import userRoutes from './Routes/userRoutes.js'

import authRoutes from './Routes/authRoutes.js'

dotenv.config();



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB Connected");
})
.catch((err) =>{
    console.log(err);
})

const app = express() ;

app.use(express.json());

app.listen(5000,()=>{
    console.log("Server Running On Port : 5000")
})

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500 ;
    res.status(statusCode).json({
        success:false,
        statusCode,
        message : err.message ,

    })
})
