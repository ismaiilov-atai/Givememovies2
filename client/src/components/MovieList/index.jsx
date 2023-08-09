import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, setSelectedMovie, isLoading, error, hasSearched }) => {

  const handleWatchList = (movie) => {
    // TO DO!!!!!!!
    console.log("Add to watch-list:", movie.title);
  }

  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }

  if (hasSearched && (!movies || movies.length === 0)) {
      return <div>No movies found.</div>;
  }

  return (
      <ul className='list'>
          {movies.map(movie => (
              <div className='movie' key={movie.id} onClick={() => setSelectedMovie(movie)}>
                  <button
                          className="watch-list-btn"
                          onClick={(e) => {
                              e.stopPropagation();
                              handleWatchList(movie);
                          }}>
                          Watch Later
                      </button>
                  <h3 className='title'>{movie.title}</h3>
                  {movie.poster_path ? (
                      <img className='img' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" />
                  ) : (
                      <p className='noimg'>This movie has no poster image</p>
                  )}
              </div>
          ))}
      </ul>
  );
};

export default MovieList;
