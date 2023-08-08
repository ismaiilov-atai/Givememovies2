
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from '../components/MovieList';



test('renders Loading... when isLoading is true', () => {
  jest.mock('../../hooks/useMovies', () => ({
    useMovies: jest.fn(() => ({
      movies: [],
      isLoading: true,
      error: null
    }))
  }));

  render(<MovieList />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});
