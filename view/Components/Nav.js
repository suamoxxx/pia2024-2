import React from "react"
import logo from './img/logo.jpg'
import './style.css'
function Nav(){
    return(
        <div>
           <nav>
        <img className="img-nav" src={logo}/>
           </nav>
        </div>
    )
}

export default Nav