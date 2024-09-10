// npm modules
import { NavLink, useParams } from 'react-router-dom'

//components
import NewComment from '../NewComment/NewComment'
import Comments from '../Comments/Comments'

// css
import styles from './MovieConView.module.css'

const MovieConView = (props) => {
  const { movieCon, handleAddComment, user } = props

  return ( 
    <>
    <main>
      {!movieCon.director ?
        <section className={styles.header}>
          <h1> {movieCon.author.name}'s "{movieCon.title}"</h1>
          <section className={styles.data}>
            The {movieCon.genres.map((genre, idx) => 
              <h4 key={idx}>{genre}</h4>
            )} Film
          </section>
        </section>
        :
        <section className={styles.header}>
          <h1> {movieCon.author.name}'s "{movieCon.title}" Directed by {movieCon.director}</h1>
          <section className={styles.data}>
            The {movieCon.genres.map((genre, idx) => 
              <h4 key={idx}>{genre}</h4>
            )} Film
          </section>
        </section>
      }
      <section className={styles.top}>
          <div className={styles.plot}>
            <h1>Synopsis</h1>
            <p>{movieCon.plot}</p>
          </div>
        <div className={styles.credits}>
          <h1>Credits</h1>
          <section className={styles.data}>
            {movieCon.actors.map((actor, idx) => 
              <h4 key={idx}>{actor}</h4>
            )}
          </section>
        </div>
      </section>
      <h1 className={styles.header2}>Comments</h1>
      <NewComment handleAddComment={handleAddComment}/>
      <section className={styles.bottom}>
        <Comments comments={movieCon.comments} user={props.user} movieConId={movieCon._id} />
      </section>
    </main>
    </> 
  )
}

export default MovieConView;