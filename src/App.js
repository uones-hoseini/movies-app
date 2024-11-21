import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

//component
import MovieList from "./components/MovieList"
import MovieListHeading from "./components/MovieListHeading"

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue,setSearchValue]=useState()

  async function getMovieRequest() {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=d1f6a7ee"
    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson)
    setMovies(responseJson.Search)
  }
  useEffect(() => {
    getMovieRequest()
  }, [])

  return (
    <div className="container-fluid  movie-app">
      <div className="row">
        <MovieListHeading heading="Movies"/>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default App
