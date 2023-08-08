import React from 'react';
import Movie from '../Movie';
import './MovieList.css';

const MovieList = ({ movies, isLoading, error }) => {
  console.log(movies)
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div className="list">
      {movies.map((movie, index) => {
        console.log("Rendering movie:", movie);
        return <Movie key={index} {...movie} />;
      })}
    </div>
  );

};

export default MovieList;
