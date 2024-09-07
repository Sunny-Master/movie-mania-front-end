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
            <div className='inline'>{content.name}</div>
            <div className={styles.cardData}>
              <label>Skill: </label>
              <p className='inline'>{content.skill}</p>
            </div>
            <div>Known for: {content.knownFor.map((movie, idx) => 
              <p key={idx}>{movie}</p>)}</div>
              <button className='addCeleb'>+</button>
          </div>
        </div>
      </div>
    </>
  )
}


export default CelebCard