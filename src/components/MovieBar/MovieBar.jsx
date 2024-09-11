// components
import MovieCard from '../MovieCard/MovieCard'

// css
import styles from './MovieBar.module.css'

const MovieBar = ({ content, handleAddMovie, handleAddToWatchList, contentType, handleRemoveMovie }) => {
  return ( 
    <>
      <div className={styles.scroll}>
          {content.map(movie => 
          
            <MovieCard 
              key={movie.movieId} 
              content={movie}
              handleAddMovie={handleAddMovie}
              handleAddToWatchList={handleAddToWatchList}
              contentType={contentType}
              handleRemoveMovie={handleRemoveMovie}
            />
          )}
      </div>
    </>
  )
}

export default MovieBar