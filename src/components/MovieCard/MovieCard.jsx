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
            <h1 className={styles.title}>Title: {content.title}</h1>
            <div className={styles.rating}>Rating: {content.rating}</div><br />
            <div className={styles.date}>Release Date: {content.releaseDate}</div><br />
            <div className={styles.plot}>Plot: {content.plot}</div>
            <button className={styles.addFav}>+</button>
            <button className={styles.addWatch}>+</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default MovieCard