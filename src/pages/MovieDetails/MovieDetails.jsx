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
      <h1 className={styles.title2}>{movie.title}</h1>
      <section className={styles.movieDetails}>
        <section className={styles.movieData}>
          <section>
            <img src={movie.imageUrl} alt={movie.title}  />
          </section>
          <section className={styles.movieInfo}>
            <section>
              <label>Genres: &nbsp;&nbsp;</label>
              {genreList.map(genre =>
                <span key={genre.id}>{genre.name}</span>
              )}
            </section>
            <section>
              <label>Director: &nbsp;&nbsp;</label> 
              <span>{movie.credits.director} </span>
            </section>
            <section>
              <label>Cast: &nbsp;&nbsp;</label>
              {movie.credits.cast.map((actor, idx) =>
                <span key={idx}>{actor}</span>
              )}
            </section>
            <section>
              <label>Rating: &nbsp;&nbsp;</label>
              <span>{movie.rating}</span>
            </section>
            <section>
              <label>Release Date: &nbsp;&nbsp;</label>
              <span>{movie.releaseDate}</span>
            </section>
          </section>
        </section>
        {!contentType ? 
          <>
            <div className={styles.select}>
              <button 
                onClick={() => props.handleAddMovie(movie)}
                className={styles.addFav} 
              >
                ➕Fav
              </button>
              <button className={styles.addWatch}
              onClick={() => props.handleAddToWatchList(movie)}
              >
                ➕List
              </button>
            </div>  
          </>
          :
          <button onClick={() => props.handleRemoveMovie(movie._id, contentType)}>➖ {contentType === 'watchList' ? 'List' : 'Fav'}</button>
        }
        <div className={styles.plot}>
          <label>Plot: &nbsp;&nbsp;</label>
          <span>{movie.plot}</span>
        </div>
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
      </section>
    </ main>
  )
}

export default MovieDetails