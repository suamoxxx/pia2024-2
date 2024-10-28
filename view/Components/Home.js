import React from "react";
import AsideOne from "./AsideOne.js";
import AsideTwo from "./AsideTwo.js";
import './style.css'

function Home(){
    return(
        <aside className="aside-main-home">
            <AsideTwo/>
            <AsideOne/>  
        </aside>
    )
}

export default Home