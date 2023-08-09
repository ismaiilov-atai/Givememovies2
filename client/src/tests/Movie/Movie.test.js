
import React from 'react';
import { render, screen } from '@testing-library/react';
import Movie from '../../components/Movie';

const mockMovie = {
  title: "Test Movie",
  overview: "This is a test movie overview.",
  genres: [{ name: "Action" }],
  release_date: "2023-08-01",
  vote_average: 7.8
};

test('renders movie title', () => {
  render(<Movie movie={mockMovie} />);
  const [titleElement] = screen.getAllByText(/Test Movie/i);
  expect(titleElement).toBeInTheDocument();
});

