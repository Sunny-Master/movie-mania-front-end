// components
import CelebCard from '../CelebCard/CelebCard'

// CSS
import styles from './CelebBar.module.css'

const CelebBar = ({ content, handleAddActor }) => {
  return ( 
    <>
      <div className={styles.scroll}>
        {content?.map(celeb => 
          <CelebCard key={celeb.celebId} content={celeb} handleAddActor={handleAddActor}/>
        )}
      </div>
    </>
  )
}

export default CelebBar