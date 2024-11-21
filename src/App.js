import { useState,useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

//component
import MovieList from "./components/MovieList"

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_SX300.jpg",
    },
  ])

async function getMovieRequest() {
  const url="http://www.omdbapi.com/?s=star wars&apikey=d1f6a7ee"
  const response=await fetch(url);
  const responseJson=await response.json();
  console.log(responseJson);
};
useEffect(() => {
  getMovieRequest()


}, [])


  return (
    <div className="container-fluid  movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default App
