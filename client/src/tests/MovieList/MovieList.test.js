
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from '../../components/MovieList/index';


test('renders Loading... when isLoading is true', () => {
  const mockProps = {
    movies: [],
    isLoading: true,
    error: null,
    setSelectedMovie: jest.fn(),
    hasSearched: false
  };

  render(<MovieList {...mockProps} />);
  const loadingElement = screen.getByText(/Loading.../i);
  expect(loadingElement).toBeInTheDocument();
});
