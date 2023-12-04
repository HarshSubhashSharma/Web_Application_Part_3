import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Welcome() {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        console.log("Logging out");
        localStorage.removeItem('token');
        console.log("Token removed, navigating to home");
        window.location.href = '/';
    };
    

    return (
        <div>
            <h1>Welcome to the Application!</h1>
            <p>You are now signed in.</p>
            <button onClick={handleLogout}>Logout</button>
            
        </div>
    );
}

export default Welcome;
