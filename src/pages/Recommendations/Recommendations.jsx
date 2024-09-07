// npm modules
import { useState } from "react"

// services
import * as tmdbService from '../../services/tmdbService'

// components
import SearchForm from "../../components/SearchForm/SearchForm"

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
    </>
    
  )
}

export default Recommendations