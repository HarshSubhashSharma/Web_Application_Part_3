import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Signin';
import Register from './Register';
import Welcome from './Welcome'; 

function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token != null; 
};

    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated() ? <Navigate to="/welcome" /> : <SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/welcome" element={isAuthenticated() ? <Welcome /> : <Navigate to="/" />} />
                
            </Routes>
        </Router>
    );
}

export default App;
