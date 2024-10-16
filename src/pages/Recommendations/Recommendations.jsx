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
    const moviesInProfile = [...profile.favMovies, ...profile.watchList]
    const moviesResults = moviesData.filter(movie => moviesInProfile.every(profileMovie => profileMovie.movieId !== movie.movieId))
    setMovies(moviesResults)
  }

  useEffect(() => {
    const fetchRecommendations = async () => {
      const moviesData = await tmdbService.getRecommendations()
      setMovies(moviesData)
    }
    fetchRecommendations()
  },[])

  if (!profile) return <h1>Loading...</h1>

  const moviesInProfile = [...profile.favMovies, ...profile.watchList]
  const moviesResults = movies?.filter(movie => moviesInProfile.every(profileMovie => profileMovie.movieId !== movie.movieId))

  return (  
    <main className={styles.container}>
      <h1 className={styles.title2}>Movie Recommendations</h1><br />
      <section className={styles.shadedBG}>
        <section className={styles.top}>
          <SearchForm searchResults={searchMovies} type='movie'/>
          {!movies ? 
            <h1 className={styles.loading}>Loading Your Personalized Movies...</h1>
            : 
            <MovieBar 
              content={moviesResults} 
            />
          }
        </section>
        <section className={styles.twin}>
          <div className={styles.scrollA}>
            <h4 className={styles.line}>Favorite Movies</h4>
            <MovieBar 
              content={profile.favMovies} 
              contentType='favMovies'
            />
          </div>
          <div className={styles.scrollA}>
            <h4 className={styles.line}>Watch List</h4>
            <MovieBar 
              content={profile.watchList} 
              contentType='watchList'
            />
          </div>
        </section>
      </section>
    </main>
  )
}

export default Recommendations