// components
import MovieConBar from "../../components/MovieConBar/MovieConBar"

// css
import styles from './MovieCons.module.css'

const MovieCons = ({movieCons}) => {
  return (  
    <MovieConBar movieCons={movieCons}/>
  )
}

export default MovieCons