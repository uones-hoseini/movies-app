import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className='d-flex justify-content-star m-3'>
      {movies.map((movie, index) => (
        <img key={index} src={movie.Poster} alt="Poster" />
      ))}
    </div>
  );
}

export default MovieList;
