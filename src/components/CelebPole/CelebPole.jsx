// components
import CelebCard from '../CelebCard/CelebCard'

// CSS
import styles from './CelebPole.module.css'

const CelebBar = ({ content, handleAddActor, handleAddDirector, handleRemoveCeleb }) => {
  return ( 
    <>
      <div className={styles.scroll2}>
        {content?.map(celeb => 
        <>
          <CelebCard 
            key={celeb.celebId} 
            content={celeb} 
            handleAddActor={handleAddActor} 
            handleAddDirector={handleAddDirector}
            handleRemoveCeleb={handleRemoveCeleb}
          />
          <br /><br />
          </>
        )}
      </div>
    </>
  )
}

export default CelebBar