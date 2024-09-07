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
        {content.genres.map( (genre, idx) => 
          <p key={idx}>{content.genres}</p>
        )}
        <p>{content.plot}</p>
      </article>
    </NavLink>
  )
}



export default MovieConCard