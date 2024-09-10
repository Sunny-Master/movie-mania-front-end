// CSS
import styles from './CelebCard.module.css'

const CelebCard = ({ content, handleAddActor, handleAddDirector, handleRemoveCeleb }) => {
  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div className={styles.flipCardFront}>
            <img src={content.imageUrl} alt={content.name}  />
          </div>
          <div className={styles.flipCardBack}>
            <div className={styles.name}>{content.name}</div><br />
            <div className={styles.cardData}>
              <label className={styles.skill}>Known for: </label>
              <p className={styles.skills}>{content.skill}</p>
            </div><br />
            <div className={styles.movies}>Movies</div>
            <div> {content.knownFor.map((movie, idx) => 
              <p key={idx}>{movie}</p>)}</div>
              {handleAddActor ? 
                <>
                  <button 
                    className={styles.addActor} 
                    onClick={() => handleAddActor(content)}
                  >
                    +A
                  </button>
                  <button className={styles.addDirector}
                  onClick={() => handleAddDirector(content)}
                  >
                    +D
                  </button>
                </>
                :
                <button onClick={() => handleRemoveCeleb(content)}>-</button>
              }
          </div>
        </div>
      </div>
    </>
  )
}


export default CelebCard