
import React from 'react';
import './Movie.css';

function Movie({ movie, deselectMovie }) {
  return (
    <div className='movieAlone'>
      <div className='imgdiv'>
        {movie?.poster_path ? (
          <img className='img' onClick={deselectMovie} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster"></img>
        ) : (
          <p className='noimgAlone'>This movie has no poster image</p>
        )}
      </div>
      <div className='txtdiv'>
        <h3 className='titleAlone'>{movie.title}</h3>
        <p className='summary'>{movie.overview}</p>
        <div className='genres'>
          <p>Genres: {movie?.genres?.map(genre => ' ' + genre.name + ' ').join(', ')}</p>
        </div>
        <div className='year'>Published on: {movie.release_date}</div>
        <div className='voteavg'>Vote average on IMDB: {movie.vote_average}</div>
        <button className='back' onClick={deselectMovie}>Go back</button>
      </div>
    </div>
  );
}

export default Movie;
