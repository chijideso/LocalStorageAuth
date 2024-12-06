// src/profile.jsx
import React, { useState, useEffect } from 'react';
import { showNotification, Notifications } from '@mantine/notifications';
const Profile = () => {
  const [userData, setUserData] = useState({
    email: '',
    phonenumber: '',
    kin: ''
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the target
    setUserData((prevData) => ({ ...prevData, [name]: value })); // Update the specific field
  };

  
  const handleSubmit = async () => {
    try {
      localStorage.setItem('userData', JSON.stringify(userData));
     
      Notifications.show({
        title: 'Success',
        message: 'Operation completed successfully!',
        textcolor: 'green',
      });
    } catch (error) {
      Notifications.show({
        title: 'Error',
        message: 'Something went wrong!',
        color: 'red',
      });
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Notifications/>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="mb-4 text-xl">Edit Profile</h2>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            name="email" 
            id="username"
            value={userData.email}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="phonenumber">Phone Number</label>
          <input
            type="text" 
            name="phonenumber"
            id="phonenumber"
            value={userData.phonenumber}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="Nextofkin">Next of kindred</label>
          <input
            type="text" 
            name="kin" 
            id="Nextofkin"
            value={userData.kin}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
       
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;