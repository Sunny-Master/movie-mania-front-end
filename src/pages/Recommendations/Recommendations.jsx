// npm modules
import { useState, useEffect } from "react"

// services
import * as tmdbService from '../../services/tmdbService'

// components
import SearchForm from "../../components/SearchForm/SearchForm"
import MovieBar from "../../components/MovieBar/MovieBar"

// css
import styles from './Recommendations.module.css'

const Recommendations = ({ profile, handleAddMovie}) => {
  const [movies, setMovies] = useState(null)

  const searchMovies = async (formData) => {
    const moviesData = await tmdbService.getMovies(formData)
    setMovies(moviesData)
  }

  useEffect(() => {
    const fetchRecommendations = async () => {
      const moviesData = await tmdbService.getRecommendations()
      setMovies(moviesData)
    }
    fetchRecommendations()
  },[])

  return (  
    <main className={styles.container}>
      <h1>Movie Recommendations</h1>
      <SearchForm searchResults={searchMovies} type='movie'/>
      <MovieBar content={movies} handleAddMovie={handleAddMovie}/>
      <h1>Favorite Movies</h1>
      <MovieBar content={profile.favMovies} />
    </main>
  )
}

export default Recommendations