// components
import MovieCard from '../MovieCard/MovieCard'

// css
import styles from './MovieBar.module.css'

const MovieBar = ({ content }) => {
  return ( 
    <>
    <h1>Movie Bar</h1>
      <div className={styles.scroll}>
          {content?.map(movie => 
            <MovieCard key={movie.movieId} content={movie}/>
          )}
      </div>
    </>
  )
}

export default MovieBar