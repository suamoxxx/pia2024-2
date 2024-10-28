import express from 'express'
import bodyParser from 'body-parser'
import User from '../models/user.models.js'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import applications from '../controller/applications.js'
import dotEnv from 'dotenv'
dotEnv.config()
const router = express.Router();
router.use(bodyParser.json());

//--- Api Rest - Post -- Ruta para registrarse ---///
router.post('/register',async (req,res)=>{
    try {
        const {username, email, password, age, gender} = req.body;       
            if (!username && !email && !password && !age && !gender)
                return res.status(400).json({message: 'Error Empty data'})                           
        const user = new User({username,email,password, age, gender})
        await user.save();
        const token = jwt.sign({id: user._id}, process.env.JWT_SECREt, {expiresIn: 60 * 60 })
        return res.status(200).json({message: 'Successfully created'})
        
    } catch (error) {
        res.status(500).json({message: `Server Error, ${error}`})
        console.error(error)
       } 
});

//--- Api Rest - Get -- Ruta para info de cada usuario ---///
router.get('/me',async(req,res)=>{
    const token = req.headers['x-access-token']
    if(!token){
        return res.status(400).json({message: 'Authentication error'})
    }
    const decoded = jwt.verify(token, process.env.JWT_SECREt)
    const id = await User.findById(decoded.id, {password: 0})
    res.json({message: `Este soy yo ${id}`})
});

// --- Api Rest -Post -- Ruta para iniciar sesion
router.post('/login', async (req, res)=>{
    try {
        const {email, password} = req.body;
        const userAuth = await User.findOne({email})
        if(!userAuth){
            return res.status(404).json({message: "Email not found"})
        }
        const isMatch = await userAuth.validateBd(password)
        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect password' })
        }
        // --- Firmamos el ID del usuario y expira en una hora el token
        const token = jwt.sign({id: userAuth.id}, process.env.JWT_SECREt, {expiresIn: 60 * 60 })
        res.setHeader('Authorization', `Bearer ${token}`)
        return res.json(`Correct`)
        
    } catch (error) {
        res.status(500).json({message: `Server Error, ${error}`})
        console.error(error)
      }
});

//--- Api Rest - Put -- Ruta para actualizar usuarios ---//
router.put('/modify', async (req,res)=>{
    try {
        const {email,password} = req.body;
        console.log(email)
        if (!email || !password){
            return res.status(400).json({ message: "Error empty information" })
        }
        const user = await User.find({email});
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const jump = await bcryptjs.genSalt(10)
        const cryp = await bcryptjs.hash(password, jump)
        await User.findOneAndUpdate({email},{password: cryp})
        return res.json({message: "User update"})
    } catch (error) {
        res.status(500).json({message: `Data not updated, ${error}`})
        console.error(error)
    }

})
export default  router 