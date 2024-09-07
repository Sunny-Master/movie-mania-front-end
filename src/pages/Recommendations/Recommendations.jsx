// npm modules
import { useState } from "react"

// services
import * as tmdbService from '../../services/tmdbService'

// components
import SearchForm from "../../components/SearchForm/SearchForm"
import MovieCard from "../../components/MovieCard/MovieCard"

const Recommendations = () => {
  const [movies, setMovies] = useState(null)

  const searchMovies = async (formData) => {
    const moviesData = await tmdbService.getMovies(formData)
    setMovies(moviesData)
}

  return (  
    <>
      <h1>Movie Recommendations</h1>
      <SearchForm searchResults={searchMovies} type='movie'/>
      {movies?.map(movie => 
        <MovieCard key={movie.movieId} content={movie} />
      )}
    </>
    
  )
}

export default Recommendations