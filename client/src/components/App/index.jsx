
import React, { useState } from 'react';
import './App.css';
import MovieList from '../MovieList';
import Movie from '../Movie';
import useMovies from '../../hooks/useMovies';

function App() {
  const [prompt, setPrompt] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  
  const {
    movies,
    selectedMovie,
    getMoviesByPrompt,
    getMovieByID,
    setSelectedMovie,
    showWatchList, 
    setShowWatchList,
    watchListMovies
  } = useMovies();

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };


  const handleEnter = async (event) => {
    if (event.key === 'Enter') {
      await getMoviesByPrompt(prompt);
      setHasSearched(true);
    }
  };

  return (
    <div className='App'>
      <h1 className='header'>Give me movies</h1>
      <button className="btn"
      onClick={() => setShowWatchList(prev => !prev)}
      ><i className="fa fa-list" aria-hidden="true"></i>
      Watch list
      </button>
      <div className='body'>
        {
         showWatchList ?
          <>
            {
              watchListMovies && selectedMovie.id ? <Movie movie={selectedMovie} deselectMovie={() => setSelectedMovie({})} /> :
              <MovieList movies={watchListMovies} setSelectedMovie={setSelectedMovie} hasSearched={hasSearched} />
            }
          </>
        :
          <>
            <p className='summary'>
              Give me movies is a website that uses AI to suggest movies using prompts, according to 4 different criteria: Genre, Actor, Director and Maximum watchtime. Try typing something like "I want to watch a rom-com which is less than 2 hours long and with Tom Hanks in it" in the box below!
            </p>
            <input
              className='prompt'
              placeholder='I want to watch a scifi movie with Tom Cruise...'
              onChange={handlePromptChange}
              onKeyDown={handleEnter}
            />
            {
             selectedMovie.id ?
              <Movie movie={selectedMovie} deselectMovie={() => setSelectedMovie({})} />
              :
              <MovieList movies={movies} setSelectedMovie={setSelectedMovie} hasSearched={hasSearched} />
            }
          </>
        }
      </div>
    </div>
  );
}

export default App;


