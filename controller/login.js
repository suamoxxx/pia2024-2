import User from '../models/user.models.js'
import jwt from 'jsonwebtoken'

const login = async (req, res, next)=>{
    try {
        const {email, password} = req.body;
        const userAuth = await User.findOne({email})
        if(!userAuth){
            return res.status(404).json({message: "Email not found"})
        }
        const isMatch = await userAuth.validateBd(password);
        if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect password' });
        }
        const token = jwt.sign({id: userAuth.id}, process.env.JWT_SECREt, {expiresIn: 60 * 60 })
        res.setHeader('Authorization', `Bearer ${token}`);
        next()
        
    } catch (error) {
        res.status(500).json({message: `Server Error, ${error}`})
        console.error(error)
    }
    
}

export default login