// npm modules
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import styles from './MovieCard.module.css'

const MovieCard = ({ content, contentType }) => {
  const [movie, setMovie] = useState({content, contentType})
  
  return (
    <NavLink to='/recommendations/movie-details' state={movie}>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img src={content.imageUrl} alt={content.title}  />
          </div>
        </div>
      </div>
    </NavLink>
  )
}


export default MovieCard