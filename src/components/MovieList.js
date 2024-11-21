import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-star m-3'>
        <img key={index} src={movie.Poster} alt="Movie" />
        <div className='overly d-flex align-items-center justify-content-center'></div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
