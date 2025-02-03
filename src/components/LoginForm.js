// src/components/LoginForm.js
import { useState } from 'react';
import { login } from '../api/fetchApi';
import { Box, TextField, Button, Alert } from '@mui/material';

const LoginForm = ({ onLoginSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, email });
    try {
      await login(name, email);
      // Call onLoginSuccess if it is a function
      if (typeof onLoginSuccess === 'function') {
        onLoginSuccess();
      } else {
        console.error("onLoginSuccess is not a function:", onLoginSuccess);
      }
    } catch (err) {
      console.error('Login error:', err.response || err);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
