import User from '../Models/UserModel.js'
import bcryptjs from 'bcryptjs'

export const signup = async(req,res)=>{
    const {username , email,password} = req.body

    if(!username || !email|| !password){
        return res.status(400).json({message : 'All fields are required'})
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
        res.status(500).json({message :error.message})
}



}
