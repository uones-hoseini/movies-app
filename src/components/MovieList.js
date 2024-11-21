import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => (
        <div className='image-container d-flex justify-content-center '>
        <img key={index} src={movie.Poster} alt="Movie" />
        <div className='overly d-flex align-items-center justify-content-center m-3'></div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
