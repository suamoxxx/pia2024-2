import React, { useState } from 'react'
import './style.css'
import comic from './img/comic_reverse.png'
function Register( { setIsLoginVisible } ){
    // Estados para tomas los datos del formulario y enviarlos a la API-Rest
    const [username, dataSet] = useState('')
    const [email, emailSet] = useState('')
    const [password, passwordSet] = useState('')
    const [age, ageSet] = useState('')
    const [gender, genderSet] = useState('')
    // Funcion para establecer modal si es visible
   const handleChange = () => { 
       setIsLoginVisible(false);
   };
   // Funcion que envia datos 
    const handleSubmit = async (e) => {
        e.preventDefault()
        const dataUser = {
            username: username,
            email : email,
            password: password,
            age: age,
            gender: gender
        }
        try {
            const response = await fetch('http://127.0.0.1:3006/users/register', {
                method: 'POST',
                headers: { "Content-type": "application/json", "Accept": "applications/json"},
                body: JSON.stringify(dataUser)  
            })
            const data = await response.json()
            if (response.ok) {
                console.log('message:', data);
                document.getElementById('out').textContent = JSON.stringify(data);
              }
        } catch (error) {
            console.error("message", error)        
        }

    }
    return(
        <div>
            <section className="modal-register">
                <h1 className="text-register">Registro</h1>
                <form onSubmit={handleSubmit} className="form-register">
                    {/*Input usuario */}  
                    <input 
                    autoComplete='off'
                    required
                    id='username'
                    name='username'
                    value={username}
                    onChange={(e)=>dataSet(e.target.value)}
                    placeholder="Usuario"/>
                    {/*Input correo electronico */}  
                    <input
                    autoComplete='off'
                    required
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e)=>emailSet(e.target.value)}
                    placeholder="Correo Electronico"/>
                    {/*Input contraseña */} 
                    <input
                    required
                    autoComplete='off'
                    type='password'
                    id='password' 
                    name='password'
                    value={password}
                    onChange={(e)=>passwordSet(e.target.value)}
                    placeholder="Contraseña"/>              
                    {/*Input edad */}     
                    <input 
                    autoComplete='off'
                    required
                    id='age'
                    name='age'
                    value={age}
                    className="pretty-input" 
                    onChange={(e)=>ageSet(e.target.value)}
                    placeholder="Edad"/>
                    {/*Input genero */}
                    <input 
                    autoComplete='off'
                    required
                    id='gender'
                    name='gender'
                    value={gender}
                    onChange={(e)=>genderSet(e.target.value)}
                    className="pretty-input-register" placeholder="Genero"/>      
                <button className="btn-register">Enviar</button>
                </form>
            </section>
             <div className='wave'></div>   
            <button onClick={handleChange} className="btn-login-register">Login</button>
            <img className='img-Register-alone' src={comic}/>
        </div>
    )
}

export default Register