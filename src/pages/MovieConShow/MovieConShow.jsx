// npm modules
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

// components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

// css
import styles from './MovieConShow.module.css'


const MovieConShow = (props) => {
  const [movieCon, setMovieCon] = useState(null)
  const { movieConId } = useParams()

  return (  
    <main className={styles.container}>
      <article>
        <header>
          <h3>{movieCon.category.toUpperCase()}</h3>
          <h1>{movieCon.title}</h1>
          <span>
            <AuthorInfo content={movieCon}/>
          </span>
        </header>
        <section className={styles.data}>
          <label>Genres: </label>
          {movieCon.genres.map((genre, idx) => 
            <h4 key={idx}>{genre}</h4>
          )}
        </section>
        <section className={styles.data}>
          <label>Plot: </label>
          <p>{movieCon.plot}</p>
        </section>
      </article>
    </main>
  )
}

export default MovieConShow