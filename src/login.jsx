
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [Nextofkin, setNextofkin] = useState('');
  const [error, setError] = useState('');
   const navigate = useNavigate()
   const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'chijioke@gmail.com' && password === '12345' && Phonenumber==='08108659756' && Nextofkin==='Emenike') {
      
      const userData = { email: username,password:password,phonenumber:Phonenumber,kin:Nextofkin }; 
      localStorage.setItem('userData', JSON.stringify(userData)); 
      setIsAuthenticated(true);
      navigate('/dashboard'); 
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="mb-4 text-xl">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Username@gmail.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="phonenumber"
          placeholder="phonenumber"
          value={Phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Next of kin"
          value={Nextofkin}
          onChange={(e) => setNextofkin(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">Login</button>
      </form>
    </div>
  );
};

export default Login;