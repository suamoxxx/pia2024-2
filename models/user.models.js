import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs'
//Esquema para los usuarios
const schemaUser = new mongoose.Schema ({
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type:String, 
        required: true
    },
    age: {
        type:Number, 
        required: true
    }, 
    gender: {
        type:String, 
        required: true
    }

}, { timestamps: true })
// Metodo para comparar la contraseña
schemaUser.methods.validateBd = function (password){
     return bcryptjs.compare(password, this.password)
}

schemaUser.pre('save', async function(){
    const user = this
    try {
        const jump = await bcryptjs.genSalt(10)
        user.password = await bcryptjs.hash(user.password, jump)
    } catch (error) {
        console.log(error)
        
    }
})
const User = mongoose.model('User', schemaUser);
export default User