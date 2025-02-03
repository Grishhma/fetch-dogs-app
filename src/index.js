import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
  palette: {
    mode: 'light', // Change to 'dark' for a dark theme
    primary: {
      main: '#1976d2', // A blue tone
    },
    secondary: {
      main: '#ff4081', // A pink accent
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes browser styles */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
