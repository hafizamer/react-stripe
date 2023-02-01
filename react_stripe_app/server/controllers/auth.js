import User from '../models/user'
import Debug from '../models/debugdb'
import jwt from 'jsonwebtoken'
import { comparePassword, hashPassword } from '../helpers/auth';


export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name) {
            return res.json({
                error:"name is required"
            })
        }
        if (!password) {
            return res.json({
                error:"password is required"
            })
        }
        const exist = await User.findOne({ email })
        if (exist) {
            return res.json({
                error: "Email is taken"
            })
        }
        //hash password
        
        const hashedPassword =await hashPassword(password)
        try {
            const user = await new User({
                name, email, password:hashedPassword,
            })
            user.save()
            console.log(user);
            const {password,...rest}=user._doc
            return res.json({user:rest})
        }
        catch (err) {
            console.log(err)
        }
        
        
        res.json({
            data: "this is /register endpoint"
        })
    }
    catch(err) {
        console.log(err)
    }
}

export const login = async (req, res) => {
    try {
        //console.log(req.body)
        //check email
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.json({
                error: 'No user found'
            })
        }
        //check password
        const match = await comparePassword(req.body.password, user.password)
        if (!match) {
            return res.json({
                error:'wrong password'
            })
        }
        //create signed token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        const { password, ...rest } = user._doc;

        res.json({
            token,
            user:rest
        })
        

    }
        catch (err) {
            console.log(err)
        }
        
        

}

export const debug=(req, res) => {
    res.json({
        data: "this is debug mode controller"
    })
}