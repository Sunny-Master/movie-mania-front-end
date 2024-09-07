// CSS
import styles from './MovieCard.module.css'

const MovieCard = ({ content }) => {

  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img src={content.imageUrl} alt={content.title}  />
          </div>
          <div className={styles.flipCardBack}>
            <h1>Title: {content.title}</h1>
            <h2>Rating: {content.rating}</h2>
            <h2>Release Date: {content.releaseDate}</h2>
            <h2>Plot: {content.plot}</h2>
          </div>
        </div>
      </div>
    </>
  )
}


export default MovieCard