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
        <header className={styles.design}>
          <AuthorInfo content={content} />
        </header>
        <section className={styles.data}>
          <h1 className={styles.title}>{content.title}</h1>
          <section className={styles.credit}>
            <label>Director: &nbsp;</label>
            <span>{content.director}</span>
          </section>
          <section className={styles.credit}>
            <label>Genres: &nbsp;</label>
            {content.genres.map((genre, idx) => 
              <span key={idx}>{genre}</span>
            )}
          </section>
          <section className={styles.credit}>
            <label>Cast: &nbsp;</label>
            {content.actors.map((actor, idx) => 
              <span key={idx}>{actor}</span>
            )}
          </section>
        </section>
      </article>
    </NavLink>
  )
}



export default MovieConCard