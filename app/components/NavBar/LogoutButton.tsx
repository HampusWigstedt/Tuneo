// LogoutButton.tsx
import React from 'react';
import Cookies from 'js-cookie';

const LogoutButton = () => {

  const handleLogout = () => {
    // Clear access token from localStorage
    Cookies.remove('access_token');
    // Redirect user to home page
    window.location.href = '/';
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;