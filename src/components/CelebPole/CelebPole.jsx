// components
import CelebCard from '../CelebCard/CelebCard'

// CSS
import styles from './CelebPole.module.css'

const CelebPole = ({ content, handleAddActor, handleAddDirector, handleRemoveCeleb }) => {
  return ( 
    <>
      <div className={styles.scroll2}>
        {content.map(celeb => 
          <div key={celeb.celebId}>
            <CelebCard 
              content={celeb} 
              handleAddActor={handleAddActor} 
              handleAddDirector={handleAddDirector}
              handleRemoveCeleb={handleRemoveCeleb}
            />
            <br /><br />
          </div>
        )}
      </div>
    </>
  )
}

export default CelebPole