import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import CryptoJS from 'crypto-js';

const AdminLogin = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const hashPassword = (password) => {
    return CryptoJS.SHA512(password).toString(CryptoJS.enc.Hex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const hashedPassword = hashPassword(password);

    if (hashedPassword === '6f048b23e8bb48fa01373f9f4d9c2626acb5431b129d4f9ef691a235497291379b61af70f0048a0fcf8ce5ed05fdefa82d79396faf28d3a6f46f7f94adf79003') {
      onLoginSuccess();
    } else {
      setError('Wrong Password. Please try again.');
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="w-50 p-4 rounded shadow-lg" style={{ backgroundColor: '#f8f9fa' }}>
        <h2 className="text-center mb-4">Admin Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Login
          </Button>
        </Form>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      </div>
    </Container>
  );
};

export default AdminLogin;
