import Vector from "../../assets/Vector.png"
import { useState } from "react"

function Dropdown({titre, content}){
    const [isOpen, setIsOpen] = useState(false)
   return isOpen ? (
    <div className="dropdown">
        <div className="dropdown__title">
            <p>{titre}</p>
            <button 
            className="dropdown__title__bouton-ouvert"
                onClick = {()=>setIsOpen(false)}> 
                <img src={Vector} alt='bouton ouvrir dropdown'/>
            </button>
        </div>
        <div className="dropdown__content">{content}</div>
    </div>
   ) :(
    <div className="dropdown">
        <div className="dropdown__title">
                    <p>{titre}</p>
                    <button 
                        onClick = {()=>setIsOpen(true)}> 
                        <img src={Vector} alt='bouton ouvrir dropdown' />
                    </button>
                </div>
    </div>
        
    
        
   )
}

export default Dropdown