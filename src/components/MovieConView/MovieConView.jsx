//components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

// css
import styles from './MovieConView.module.css'

const MovieConView = (props) => {
  const { movieCon } = props

  return ( 
    <>
    <main>
      <section className={styles.header}>
        <AuthorInfo content={movieCon}/>
        <h1>{movieCon.title}</h1>
        <section className={styles.data}>
          <label>Genres: </label>
          {movieCon.genres.map((genre, idx) => 
            <h4 key={idx}>{genre}</h4>
          )}
        </section>
      </section>
      <section className={styles.top}>
        <div className={styles.plot}>
          <h1>Synopsis</h1>
          <p>{movieCon.plot}</p>
        </div>
        <div className={styles.credits}>
          <h1>Credits</h1>
          <section className={styles.data}>
            <label>Actors: </label>
            {movieCon.actors.map((actor, idx) => 
              <h4 key={idx}>{actor}</h4>
            )}
          </section>
          <section className={styles.data}>
            <label>Director: </label> 
            <h4>{movieCon.director}</h4>
          </section>
        </div>
      </section>
      <h1 className={styles.header2}>Comments</h1>
      <section className={styles.bottom}>

      </section>
    </main>
    </> 
  )
}

export default MovieConView;