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
          <AuthorInfo content={content} />
          <h1 className={styles.title}>{content.title}</h1>
        </header>
        <section className={styles.data}>
          <label>Genres: </label>
          {content.genres.map((genre, idx) => 
            <h4 key={idx}>{genre}</h4>
          )}
        </section>
        <section className={styles.data}>
          <label>Cast: </label>
          <p>{content.actors}</p>
        </section>
      </article>
    </NavLink>
  )
}



export default MovieConCard