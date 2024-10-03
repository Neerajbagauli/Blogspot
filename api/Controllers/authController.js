import User from '../Models/UserModel.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../Utils/error.js'

export const signup = async(req,res,next)=>{
    const {username , email,password} = req.body

    if(!username || !email|| !password){
        next(errorHandler(400,'all fields required'))
    }

    const hashedPass = bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password:hashedPass,
    
    }
)

try {
    await newUser.save();
res.json({message : "Signup success"})
} catch (error) {
       next(error)
}



}
