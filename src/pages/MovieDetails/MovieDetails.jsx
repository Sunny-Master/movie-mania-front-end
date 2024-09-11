//npm modules
import { useLocation } from "react-router-dom"

// CSS
import styles from './MovieDetails.module.css'

// data
import { genreObjects } from "../../data/genres"

const MovieDetails = (props) => {
  const { state } = useLocation()
  const movie = state.content
  const contentType = state.contentType
  const genreList = genreObjects.filter(genre => movie.genreIds.includes(genre.id))

  return (  
    <main className={styles.container}>
      <h1 className={styles.title}>Title: {movie.title}</h1>
      <section className={styles.movieData}>
        <section>
          <img src={movie.imageUrl} alt={movie.title}  />
        </section>
        <section>
          <section>
            <label>Genres:</label>
            {genreList.map(genre =>
              <div key={genre.id}>{genre.name}</div>
            )}
          </section> <br />
          <div>Director: {movie.credits.director} </div><br />
          <section>
            <label>Cast:</label>
            {movie.credits.cast.map((actor, idx) =>
              <div key={idx}>{actor}</div>
            )}
          </section> <br />
          <div className={styles.rating}>Rating: {movie.rating}</div><br />
          <div className={styles.date}>Release Date: {movie.releaseDate}</div><br />
        </section>
      </section>
      {!contentType ? 
        <>
          <button 
            className={styles.addFav} 
            onClick={() => props.handleAddMovie(movie)}
          >
            +Fav
          </button>
          <button className={styles.addWatch}
          onClick={() => props.handleAddToWatchList(movie)}
          >
            +List
          </button>
        </>
        :
        <button onClick={() => props.handleRemoveMovie(movie._id, contentType)}>-</button>
      }
      <div className={styles.plot}>Plot: {movie.plot}</div>
      <div className="video-player">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${movie.videoKey}`}
          title={movie.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </ main>
  )
}

export default MovieDetails