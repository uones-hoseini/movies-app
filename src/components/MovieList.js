import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className='image-container d-flex justify-content-star m-3'>
      {movies.map((movie, index) => (
        <img key={index} src={movie.Poster} alt="Poster" />
      ))}
    </div>
  );
}

export default MovieList;
