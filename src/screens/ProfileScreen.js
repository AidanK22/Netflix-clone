import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'
import { selectUser, userSlice } from '../features/userSlice'
import { auth } from '../firebase'
import '../styling/ProfileScreen.css'
function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fb2%2Fa0%2F29%2Fb2a029a6c2757e9d3a09265e3d07d49d.jpg&f=1&nofb=1&ipt=37e2968e63262d1c76ed462a94e168861298350f82473a5187885625df732d33&ipo=images"
                    alt=""
                    />
                    <div className="profileScreen__details">
                        <h2>{user?.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <button 
                                onClick={()=>auth.signOut()}
                                className="profileScreen__signOut">
                                Sign Out
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
