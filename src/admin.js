import React, { useState } from 'react';
import AdminLogin from './components/admin-login';
import EditMedicines from './components/edit-medicines';

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
          <EditMedicines />
            
        </div>
      ) : (
        <AdminLogin onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default Admin;
