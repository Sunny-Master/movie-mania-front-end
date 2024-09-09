// npm modules
import { useState, useEffect } from "react"

// services
import * as tmdbService from '../../services/tmdbService'

// components
import SearchForm from "../../components/SearchForm/SearchForm"
import MovieBar from "../../components/MovieBar/MovieBar"

// css
import styles from './Recommendations.module.css'

const Recommendations = ({ profile, handleAddMovie, handleAddToWatchList}) => {
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

  if (!movies) 
    return (
      <main className={styles.container}>
        <h1>Movie Recommendations</h1><br />
        <SearchForm searchResults={searchMovies} type='movie'/><br />
        <h1>Loading Your Personalized Movies</h1>
        <MovieBar content={profile?.favMovies} />
      </main>
  )

  return (  
    <main className={styles.container}>
      <h1>Movie Recommendations</h1><br />
      <SearchForm searchResults={searchMovies} type='movie'/>
      <MovieBar 
        content={movies} 
        handleAddMovie={handleAddMovie}
        handleAddToWatchList={handleAddToWatchList}
      />
      <h1>Favorite Movies</h1>
      <MovieBar content={profile.favMovies} />
      <h1>Watch List</h1>
      <MovieBar content={profile.watchList} />
    </main>
  )
}

export default Recommendations