// src/pages/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Navigate to the search page after login
    navigate('/search');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(https://source.unsplash.com/featured/?dogs)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2,
          p: 4,
          boxShadow: 3,
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to Fetch Dogs
        </Typography>
        {/* IMPORTANT: Ensure you pass onLoginSuccess */}
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Container>
    </Box>
  );
};

export default LoginPage;
