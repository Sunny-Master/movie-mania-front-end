// components
import MovieCard from '../MovieCard/MovieCard'

// css
import styles from './MovieBar.module.css'

const MovieBar = ({ content, handleAddMovie }) => {
  return ( 
    <>
      <div className={styles.scroll}>
          {content?.map(movie => 
            <MovieCard 
              key={movie.movieId} 
              content={movie}
              handleAddMovie={handleAddMovie}
            />
          )}
      </div>
    </>
  )
}

export default MovieBar