
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';

test('renders the header correctly', () => {
  render(<App />);
  const headerElement = screen.getByText(/Give me movies/i);
  expect(headerElement).toBeInTheDocument();
});

test('input accepts typing', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/I want to watch a scifi movie/i);
  fireEvent.change(inputElement, { target: { value: 'test prompt' } });
  expect(inputElement.value).toBe('test prompt');
});
