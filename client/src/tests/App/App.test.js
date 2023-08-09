
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../components/App/index';

describe(`Renders App component correctly`, () => {

  beforeEach(() => {
    render(<App />);
  });

  test('renders the header correctly', () => {
    const headerElement = document.querySelector('.header');
    expect(headerElement).toBeInTheDocument();
  });

  test('input accepts typing', () => {
    const inputElement = screen.getByPlaceholderText(/I want to watch a scifi movie/i);
    fireEvent.change(inputElement, { target: { value: 'test prompt' } });
    expect(inputElement.value).toBe('test prompt');
  });

  test('watch list button renders App componnet correctly', () => {
    const button = document.querySelector('.btn');
    fireEvent.click(button);
    const inputElement = document.querySelector('.input');
    expect(inputElement).not.toBeInTheDocument()
  });

});

  test('input accepts typing', () => {
    const inputElement = screen.getByPlaceholderText(/I want to watch a scifi movie/i);
    fireEvent.change(inputElement, { target: { value: 'test prompt' } });
    expect(inputElement.value).toBe('test prompt');
  });

  test('watch list button renders App componnet correctly', () => {
    const button = document.querySelector('.btn');
    fireEvent.click(button);
    const inputElement = document.querySelector('.input');
    expect(inputElement).not.toBeInTheDocument()
  });


