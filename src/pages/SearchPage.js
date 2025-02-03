import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import DogSearch from '../components/DogSearch';

const SearchPage = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Dog Adoption Search
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 4 }}>
        <DogSearch />
      </Box>
    </Box>
  );
};

export default SearchPage;
