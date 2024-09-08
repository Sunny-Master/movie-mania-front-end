// components
import CelebCard from '../CelebCard/CelebCard'

// CSS
import styles from './CelebBar.module.css'

const CelebBar = ({ content }) => {
  return ( 
    <>
      <div className={styles.scroll}>
        {content?.map(celeb => 
          <CelebCard key={celeb.celebId} content={celeb}/>
        )}
      </div>
    </>
  )
}

export default CelebBar