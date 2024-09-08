// CSS
import styles from './CelebCard.module.css'

const CelebCard = ({ content }) => {
  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img src={content.imageUrl} alt={content.name}  />
          </div>
          <div className={styles.flipCardBack}>
            <div className={styles.name}>{content.name}</div>
            <div className={styles.cardData}>
              <label className={styles.skill}>Known for: </label>
              <p className={styles.skills}>{content.skill}</p>
            </div>
            <div className={styles.movies}>Movies</div>
            <div> {content.knownFor.map((movie, idx) => 
              <p key={idx}>{movie}</p>)}</div>
              <button className={styles.addCeleb}>+</button>
              <button className={styles.addDirector}>+</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default CelebCard