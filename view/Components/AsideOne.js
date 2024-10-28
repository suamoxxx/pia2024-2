import React from "react";
import { useState } from "react";
import './style.css'
//Imagenes
import logo from './img/logo-two.png'
import load from './img/load.png'
import chat from './img/chat.png'
import close from './img/close.png'
function AsideOne(){
    const [uploadOpen, setUploadOpen] = useState(false)
    const [messageOpen, setMsgOpen] = useState(false)

    const handleClick = () => {
        setUploadOpen(!uploadOpen);
    }
    const closeModal= () => {
        setUploadOpen(false)
    }
    const handleMessage= () => {
        setMsgOpen(!messageOpen)
    }
    const closeModalChat= () => {
        setMsgOpen(false)
    }

    const fileUpload = () => {
        alert("test upload file")
    }
    return(
        <div className="aside-one"> 
            <div className="ctn-btn-asideOne"><img className="aside-one-img" src={logo}/></div>
            <button onClick={handleMessage} className="aside-one-btn-two"><img className="aside-one-img-three" src={chat}/></button>
            <button onClick={handleClick} className="aside-one-btn"><img className="aside-one-img-two" src={load}/></button>
            <div className="wave-asideOne"></div>

            <section>
               {uploadOpen && (
                 <div className="modal-upload"> 
                 <h2 className="txt-main-modal-upload">Subir archivo</h2>
                         <div>
                             <form className="form-aside-one">
                                 <input type="text" placeholder="nombre comic"/>
                                 <input type="date" placeholder="fecha de publicacion"/>
                                 <input type="text" placeholder="editorial"/>
                                 <input className="sendComic" type="submit"/>
                                 <button onClick={fileUpload} className="btn-modalUpload"><img className="img-upload-modal" src={load}/></button>
                             </form>
                         </div>
                         <button className="btn-modal-upload-close" onClick={closeModal}><img className="img-modal-close" src={close}/></button>
                     </div>
               )}
            </section>
            
            <section>
                {messageOpen && (
                    <section className="modal-message">
                        <div>
                            <h2 className="txt-modal-chat">Chat</h2>
                            <ul>
                                <li>message</li>
                            </ul>
                            <button className="btn-modal-chat-close" onClick={closeModalChat}><img className="img-modal-chat-close" src={close}/></button>
                        </div>
                    </section>
                )}
            </section>
        </div>
    )
}

export default AsideOne