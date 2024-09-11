// components
import MovieCard from '../MovieCard/MovieCard'

// css
import styles from './MovieBar.module.css'

const MovieBar = ({ content, contentType}) => {
  return ( 
    <>
      <div className={styles.scroll}>
          {content.map(movie => 
            <MovieCard 
              key={movie.movieId} 
              content={movie}
              contentType={contentType}
            />
          )}
      </div>
    </>
  )
}

export default MovieBar