
import ApiService from '../../api/movies';
import React, { useState, useEffect } from 'react';
import './MovieList.css';

const MovieList = ({ showWatchList, movies, setSelectedMovie, isLoading, error, hasSearched }) => {
    const [hiddenMovies, setHiddenMovies] = useState([]);

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
                <div className={`movie ${hiddenMovies.includes(movie.id) && !showWatchList ? 'hidden' : ''}`} key={movie.id} onClick={() => setSelectedMovie(movie)}>
                    {!showWatchList &&
                        <button
                            className="watch-list-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                ApiService.handleWatchList(movie);
                                const movieElem = e.currentTarget.closest('.movie');
                                const imgElem = movieElem.querySelector('.img');
                                imgElem.classList.add('shrink-to-zero');
                                if (!hiddenMovies.includes(movie.id)) {
                                    setTimeout(() => {
                                        setHiddenMovies([...hiddenMovies, movie.id]);
                                    }, 500);
                                }
                            }}>
                            Watch Later
                        </button>
                    }
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