
import { useState } from 'react';
import ApiService from '../api/movies';

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  async function getMoviesByPrompt(prompt) {
    setIsLoading(true);
    setHasSearched(true);

    try {
      const res = await ApiService.getMovies(prompt);
      if (res && typeof res[0] === 'object') {
        setMovies(res);
      } else {
        setMovies([]);
      }
      setError(null);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setError(error);
    }

    setIsLoading(false);
  }

  async function getMovieByID(id) {
    try {
      const res = await ApiService.getMovieByID(id);
      setSelectedMovie(res);
    } catch (error) {
      console.error(`Error fetching movie by ID: ${error}`);
      setError(error);
    }
  }

  return { movies, selectedMovie, getMoviesByPrompt, getMovieByID, isLoading, error, hasSearched, setSelectedMovie };
};

export default useMovies;
