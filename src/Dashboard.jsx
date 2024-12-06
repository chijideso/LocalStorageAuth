// src/Dashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem('userData')); // Parse the JSON string
  const username = userData ? userData.email : 'Guest';
  const navigate = useNavigate();
const [Authenticated,setIsAuthenticated ]=useState()
  const handleLogout = () => {
  
    localStorage.removeItem('userData');
  
    setIsAuthenticated(false);
 
    navigate('/');
  };
  const handleprofile =()=>{
    navigate('/profile');
  }
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-11/12 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome, {username}!</h1>
        <p className="text-gray-600 text-center mb-4">
          This is your dashboard where you can manage your account and settings.
        </p>
        <div className="flex flex-col space-y-4">
          <button onClick={handleprofile} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
            View Profile
          </button>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;