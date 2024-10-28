import React, { useState } from 'react'
import comic from './img/comic.png'
import Home from './Home.js'
import './style.css'

function Login({ setIsLoginVisible }){
    //Estado para tomar datos de los input
    const [mail, setMail] = useState('')
    const [paswd, setPaswd] = useState('')
    //Estado para establecer valor del modal que se mostrara
    const handleChange = () => {
        setIsLoginVisible(true)
    };
    // Envia datos a la api para el logueo
    const handleSubmit = async (e) => {
        e.preventDefault()
        const datAuth = {
            email : mail,
            password: paswd
        }
        try {
            const response = await fetch('http://127.0.0.1:3006/users/login', {
                method: 'POST',
                headers: { "Content-type": "application/json", "Accept": "applications/json"},
                body: JSON.stringify(datAuth)  
            })

            if (response.ok) {
                localStorage.setItem('key', response.token )    
                alert('logueo exitoso')   
              }
           
        } catch (error) {
            console.error("message", error.message)        
        }
    }
    return(
        <div>
            {/*Modal de registro */}
            <section className="modal-login">
                <h1 className="text-login">Login</h1>
                <form onSubmit={handleSubmit} className="form-login">
                    {/*Input email*/}
                    <input 
                    autoComplete='off'
                    id='mail'
                    name='mail'
                    onChange={(e)=>setMail(e.target.value)} 
                    value={mail}
                    placeholder="email"></input>
                    {/*Input contraseña */}
                    <input 
                    autoComplete='off'
                    id='paswd'
                    name='paswd'
                    type='password'
                    required
                    onChange={(e)=>setPaswd(e.target.value)} 
                    value={paswd}
                    placeholder="contraseña"></input>
                    <button className='btn-login'>Enviar</button>
                </form>
            </section>
            <div className='output'></div>
            {/* Boton para llamar a Register*/}
           <button onClick={handleChange} className="btn-cll-login">Registro</button>
           {/* Seccion para una curva*/}
            <section className='wave-background'></section>
            {/* Seccion para color de fondo*/}
            <section className='sub-background'></section>
            {/* Imagen del logo de la app*/}
            <img className='img-login-alone' src={comic}/>
        </div>
    )
}

export default Login