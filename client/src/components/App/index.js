import React, { useState } from 'react';
import './App.css';
import MovieList from '../MovieList';
import Movie from '../Movie';
import useMovies from '../../hooks/useMovies';

function App() {
  const [prompt, setPrompt] = useState('');
  const {
    movies,
    selectedMovie,
    getMoviesByPrompt,
    setSelectedMovie
  } = useMovies();

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleEnter = async (event) => {
    if (event.key === 'Enter') {
      await getMoviesByPrompt(prompt);
    }
  };

  return (
    <div className='App'>
      <h1 className='header'>Give me movies</h1>
      <div className='body'>
        <p className='summary'>
          Give me movies is a website that uses AI to suggest movies using prompts, according to 4 different criteria: Genre, Actor, Director and Maximum watchtime. Try typing something like "I want to watch a rom-com which is less than 2 hours long and with Tom Hanks in it" in the box below!
        </p>
        <input
          className='prompt'
          placeholder='I want to watch a scifi movie with Tom Cruise...'
          onChange={handlePromptChange}
          onKeyDown={handleEnter}
        />
        <MovieList movies={movies} />
        {selectedMovie.id && <Movie movie={selectedMovie} deselectMovie={() => setSelectedMovie({})} />}
      </div>
    </div>
  );
}

export default App;


