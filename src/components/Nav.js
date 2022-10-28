import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styling/Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate()
    
    const transitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contnents">
                <img 
                    className="nav__logo"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fnetflix%2Fnetflix_PNG25.png&f=1&nofb=1&ipt=c74bd207c1b34acca9a65f3460e2fad4bd98c001df1185c4696bf681c196bc7b&ipo=images" 
                    alt=""
                />
                <img 
                    onClick={() => navigate("/profile")}
                    className="nav__avatar"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fb2%2Fa0%2F29%2Fb2a029a6c2757e9d3a09265e3d07d49d.jpg&f=1&nofb=1&ipt=37e2968e63262d1c76ed462a94e168861298350f82473a5187885625df732d33&ipo=images" 
                    alt=""
                />

            </div>

            
        </div>
    )
}

export default Nav
