import { useState, useEffect } from 'react';
import { getBreeds, searchDogs, fetchDogs, matchDogs } from '../api/fetchApi';
import DogCard from './DogCard';
import {
  Container,
  Grid,
  Box,
  Button,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Alert,
} from '@mui/material';

const DogSearch = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [sortBy, setSortBy] = useState('breed:asc');
  const [page, setPage] = useState(0);
  const [dogs, setDogs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState('');

  // Fetch available breeds on mount
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const breedList = await getBreeds();
        setBreeds(breedList);
      } catch (err) {
        console.error('Error fetching breeds:', err);
        setError('Unable to load breed list.');
      }
    };
    fetchBreeds();
  }, []);

  // Fetch dogs when filter, page, or sort changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          size: 10,
          from: page * 10,
          sort: sortBy,
        };
        if (selectedBreed) {
          params.breeds = [selectedBreed];
        }
        const searchData = await searchDogs(params);
        setTotalResults(searchData.total);
        const dogDetails = await fetchDogs(searchData.resultIds);
        setDogs(dogDetails);
      } catch (err) {
        console.error('Error fetching dogs:', err);
        setError('Unable to load dogs.');
      }
    };
    fetchData();
  }, [selectedBreed, page, sortBy]);

  const toggleFavorite = (dogId) => {
    setFavorites((prev) =>
      prev.includes(dogId) ? prev.filter((id) => id !== dogId) : [...prev, dogId]
    );
  };

  const generateMatch = async () => {
    if (favorites.length === 0) {
      alert('Please add at least one dog to favorites.');
      return;
    }
    try {
      const matchResult = await matchDogs(favorites);
      alert(`You have been matched with dog ID: ${matchResult.match}`);
    } catch (err) {
      console.error('Error generating match:', err);
      alert('Error generating match, please try again.');
    }
  };

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Search for Dogs
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap' }}>
        <FormControl sx={{ minWidth: 200, m: 1 }}>
          <InputLabel>Filter by Breed</InputLabel>
          <Select
            label="Filter by Breed"
            value={selectedBreed}
            onChange={(e) => { setSelectedBreed(e.target.value); setPage(0); }}
          >
            <MenuItem value="">All Breeds</MenuItem>
            {breeds.map((breed) => (
              <MenuItem key={breed} value={breed}>
                {breed}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ m: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button variant="outlined" onClick={() => setSortBy('breed:asc')}>
            Breed Asc
          </Button>
          <Button variant="outlined" onClick={() => setSortBy('breed:desc')}>
            Breed Desc
          </Button>
          <Button variant="outlined" onClick={() => setSortBy('name:asc')}>
            Name Asc
          </Button>
          <Button variant="outlined" onClick={() => setSortBy('name:desc')}>
            Name Desc
          </Button>
          <Button variant="outlined" onClick={() => setSortBy('age:asc')}>
            Age Asc
          </Button>
          <Button variant="outlined" onClick={() => setSortBy('age:desc')}>
            Age Desc
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {dogs.map((dog) => (
          <Grid item xs={12} sm={6} md={4} key={dog.id}>
            <DogCard
              dog={dog}
              isFavorite={favorites.includes(dog.id)}
              onToggleFavorite={() => toggleFavorite(dog.id)}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, alignItems: 'center' }}>
        <Button variant="outlined" onClick={() => setPage(page - 1)} disabled={page === 0}>
          Previous
        </Button>
        <Typography variant="body1" sx={{ mx: 2 }}>
          Page {page + 1} of {Math.ceil(totalResults / 10)}
        </Typography>
        <Button variant="outlined" onClick={() => setPage(page + 1)} disabled={(page + 1) * 10 >= totalResults}>
          Next
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" onClick={generateMatch}>
          Generate Match with Favorites
        </Button>
      </Box>
    </Container>
  );
};

export default DogSearch;
