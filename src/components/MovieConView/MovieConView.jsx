//components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

// css
import styles from './MovieConView.module.css'

const MovieConView = (props) => {
  const { movieCon } = props

  return ( 
    <>
    <main>
      <h1 className={styles.header}>Username's "Title" a "genre" film </h1>
      <section className={styles.top}>
        <div className={styles.plot}>
          <h1>Synopsis</h1>
          <p>My movie is about this and that and that and this with that as well. So much greatness. Make sure to catch it when it comes out</p>
        </div>
        <div className={styles.credits}>
          <h1>Credits</h1>
        </div>
      </section>
      <h1 className={styles.header2}>Comments</h1>
      <section className={styles.bottom}>

      </section>
    </main>
    </> 
  )
}

export default MovieConView;