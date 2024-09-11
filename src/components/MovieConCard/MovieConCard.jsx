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
          <AuthorInfo content={content} /> <br />
          <h1 className={styles.title}>{content.title}</h1>
        </header>
        <section className={styles.data}>
          <div className={styles.data2}>
            <label>Genres: </label>
            {content.genres.map((genre, idx) => 
              <h4 key={idx}>{genre}</h4>
            )}
          </div>
        </section>
        <section className={styles.credits}>
          
            <label>Cast: </label>
            {content.actors.map((actor, idx) => 
              <h4 key={idx}>{actor}</h4>
            )}
          
        </section>
      </article>
    </NavLink>
  )
}



export default MovieConCard