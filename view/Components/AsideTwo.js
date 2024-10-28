import React from "react";
import { useState } from "react";
import './style.css'
import user from './img/user.png'
import search from './img/search.png'

function AsideTwo(){
    const [searchOpen, setSearchOpen] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const handleClick = () => {
        setSearchOpen(!searchOpen);
    }
    const closetSession = () => {
        setLoginOpen(!loginOpen)
    }
    return(
        <div className="aside-two"> 
         <button onClick={handleClick} className="asideTwo-btn-two"><img className="asideTwo-img-two" src={search}/></button> 
         <button onClick={closetSession} className="asideTwo-btn-one"><img className="asideTwo-img-one" src={user}/></button>
         {searchOpen && (
            <section className="modal-search">
            <input className="input-search" type="text"/>  
           <button className="asideTwo-btn-three-search"><img className="asideTwo-img-two-search" src={search}/></button>
           </section>
         )}
         
        </div>
        
    )
}


export default AsideTwo