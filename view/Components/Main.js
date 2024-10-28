import React, { useState } from "react"
import Register from './Register.js'
import Login from './Login.js'
import Footer from './Footer.js'
import Nav from './Nav.js'
import Home from "./Home.js";

function Main(){
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const handleToggleLogin = () => {
     setIsLoginVisible(!isLoginVisible)
  };    
    return(
        <div>
              <Nav />
              <section className="main">
                <div>  
                {isLoginVisible ? (
                        <Login setIsLoginVisible={handleToggleLogin} />
                    ) : (
                        <Register setIsLoginVisible={handleToggleLogin} />
                    )}
                
                </div>
              </section>
              <Footer />
            
        </div>
    )
}

export default Main