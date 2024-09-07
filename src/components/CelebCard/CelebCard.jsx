// CSS
import styles from './CelebCard.module.css'

const CelebCard = ({ content }) => {
  console.log(content.imageUrl)
  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img src={content.imageUrl} alt={content.name}  />
          </div>
          <div className={styles.flipCardBack}>
            <h1>Name: {content.name}</h1>
            <h2>Skill: {content.skill}</h2>
            <h2>Known for: {content.knownFor.map(movie => movie)}</h2>
          </div>
        </div>
      </div>
    </>
  )
}


export default CelebCard