// components
import MovieConCard from "../MovieConCard/MovieConCard"

// css
import styles from './MovieConBar.module.css'

const MovieConBar = ({movieCons}) => {
  return (  
    <section className={styles.container}>
      {movieCons.map(movieCon => 
        <MovieConCard content={movieCon} key={movieCon._id} />
      )}
    </section>
  )
}

export default MovieConBar;