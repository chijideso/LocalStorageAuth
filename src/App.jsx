// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Dashboard from './Dashboard';
import Profile from './profile';
import { Notifications } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem('userData')) || { email: "" };
  const username = userData.username || null; // Safely access username

  return (
    <MantineProvider  withGlobalStyles withNormalizeCSS>
      <Router>
       
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/dashboard" element={<Dashboard username={username} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;