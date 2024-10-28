import React from "react";
import { useState } from "react";
import './style.css'
import logo from './img/logo-two.png'
import load from './img/load.png'
import chat from './img/chat.png'
function Upload(){
    const [uploadOpen, setUploadOpen] = useState(false)
    const handleClick = () => {
        setUploadOpen(true);
        alert("end")
    }

    return(
        <div> 
           <h2>Subir archivo</h2>
                <div>
                    <form>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="submit"/>
                    </form>
                    <input type="file"/>
                </div>
        </div>
    )
}



export default Upload