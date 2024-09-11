// npm modules
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import styles from './MovieCard.module.css'

const MovieCard = ({ content, handleAddMovie, handleAddToWatchList, contentType, handleRemoveMovie }) => {
  const [movie, setMovie] = useState({content, contentType})
  return (
    <NavLink to='/recommendations/movie-details' state={movie}>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img src={content.imageUrl} alt={content.title}  />
          </div>
          <div className={styles.flipCardBack}>
            <h1 className={styles.title}>Title: {content.title}</h1>
            <div className={styles.rating}>Rating: {content.rating}</div><br />
            <div className={styles.date}>Release Date: {content.releaseDate}</div><br />
            <div className={styles.plot}>Plot: {content.plot}</div>
            {handleAddMovie ? 
                <>
                  <button 
                    className={styles.addFav} 
                    onClick={() => handleAddMovie(content)}
                  >
                    +Fav
                  </button>
                  <button className={styles.addWatch}
                  onClick={() => handleAddToWatchList(content)}
                  >
                    +List
                  </button>
                </>
                :
                <button onClick={() => handleRemoveMovie(content._id, contentType)}>-</button>
              }
          </div>
        </div>
      </div>
    </NavLink>
  )
}


export default MovieCard