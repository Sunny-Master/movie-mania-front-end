// components
import CelebCard from '../CelebCard/CelebCard'

// CSS
import styles from './CelebBar.module.css'

const CelebBar = ({ content, handleAddActor, handleAddDirector, handleRemoveCeleb }) => {
  return ( 
    <div className={styles.scroll}>
      {content?.map(celeb => 
        <CelebCard 
          key={celeb.celebId} 
          content={celeb} 
          handleAddActor={handleAddActor} 
          handleAddDirector={handleAddDirector}
          handleRemoveCeleb={handleRemoveCeleb}
        />
      )}
    </div>
  )
}

export default CelebBar