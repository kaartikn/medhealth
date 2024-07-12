import React, { useState } from 'react';
import AdminLogin from './components/admin-login';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Shona's Editing Page</h1>
            
        </div>
      ) : (
        <AdminLogin onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default Admin;
