// npm modules
import { NavLink } from 'react-router-dom'

// components
import AuthorInfo from '../AuthorInfo/AuthorInfo'

// CSS
import styles from './MovieConCard.module.css'

const MovieConCard = ({ content }) => {

  return (
    <NavLink to={`/movieCons/${content._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{content.title}</h1>
          </span>
          <AuthorInfo content={content} />
        </header>
        <section className={styles.data}>
          <label>Genres: </label>
          {content.genres.map((genre, idx) => 
            <h4 key={idx}>{genre}</h4>
          )}
        </section>
        <section className={styles.data}>
          <label>Plot: </label>
          <p>{content.plot}</p>
        </section>
      </article>
    </NavLink>
  )
}



export default MovieConCard