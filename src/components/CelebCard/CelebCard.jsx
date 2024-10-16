// CSS
import styles from './CelebCard.module.css'

const CelebCard = ({ content, handleAddActor, handleAddDirector, handleRemoveCeleb }) => {
  return (
    <>
      <div className={styles.flipCard}>
        <div className={styles.flipCardInner}>
          <div 
            className={styles.flipCardFront}
            style={{ background: `url(${content.imageUrl})` }}
          >
            <h4>{content.name}</h4>
          </div>
          <div className={styles.flipCardBack}>
            <section className={styles.skill}>
              <div className={styles.name}>{content.name}</div>
              <div className={styles.cardData}>
                <label>Known for: &nbsp;</label>
                <span>{content.skill}</span>
              </div>
            </section>
            <section className={styles.movies}>
              <label>Top Movies:</label>
              <ul className={styles.movie}> 
                {content.knownFor.map((movie, idx) => 
                <li key={idx}>{movie}</li>)}
              </ul>
            </section>
            
            {handleAddActor ? 
              <section className={styles.actions}>
                <button 
                  className={styles.addActor} 
                  onClick={() => handleAddActor(content)}
                >
                  ➕Act
                </button>
                <button className={styles.addDirector}
                onClick={() => handleAddDirector(content)}
                >
                  ➕Dir
                </button>
              </section>
              :
              <button className={styles.remove}
              onClick={() => handleRemoveCeleb(content)}>➖Fav</button>
            }
          </div>
        </div>
      </div>
    </>
  )
}


export default CelebCard