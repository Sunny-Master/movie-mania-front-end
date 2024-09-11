// npm modules
import { useState, useEffect } from "react"

// services
import * as tmdbService from '../../services/tmdbService'

// components
import SearchForm from "../../components/SearchForm/SearchForm"
import MovieBar from "../../components/MovieBar/MovieBar"

// css
import styles from './Recommendations.module.css'

const Recommendations = ({ profile }) => {
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

  if (!profile) return <h1>Loading...</h1>

  return (  
    <main className={styles.container}>
      <h1>Movie Recommendations</h1><br />
      <SearchForm searchResults={searchMovies} type='movie'/>
      {!movies ? 
        <h1>Loading Your Personalized Movies</h1>
        : 
        <MovieBar 
          content={movies} 
        />
      }
      <h1>Favorite Movies</h1>
      <MovieBar 
        content={profile.favMovies} 
        contentType='favMovies'
      />
      <h1>Watch List</h1>
      <MovieBar 
        content={profile.watchList} 
        contentType='watchList'
      />
    </main>
  )
}

export default Recommendations