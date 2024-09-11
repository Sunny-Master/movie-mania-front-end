// npm modules
import { NavLink, useParams } from 'react-router-dom'

//components
import NewComment from '../NewComment/NewComment'
import Comments from '../Comments/Comments'

// css
import styles from './MovieConView.module.css'

const MovieConView = (props) => {
  const { movieCon, handleAddComment, handleDeleteComment, user } = props

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
          {movieCon.actors.map((actor, idx) => 
              <h4 key={idx}>{actor}</h4>
            )}
        </section>
        :
        <section className={styles.header}>
          <h1> <span className={styles.name}>{movieCon.author.name}'s</span> <span className={styles.titled}>{movieCon.title}</span> <span className={styles.direct}>Directed by {movieCon.director}</span></h1>
          <section className={styles.data}>
            The {movieCon.genres.map((genre, idx) => 
              <h4 key={idx}>{genre}</h4>
            )} Film
          </section>
          <section className={styles.data}>
          Starring {movieCon.actors.map((actor, idx) => 
              <h4 key={idx}> {actor} </h4>
            )}
          </section>
        </section>
      }
      <section className={styles.top}>
        <section className={styles.left}>
          <h1 className={styles.header3}>Synopsis</h1>
          <div className={styles.plot}>
            <p>{movieCon.plot}</p>
          </div>
        </section>
        <section className={styles.right}>
          <h1 className={styles.header2}>Comments</h1>
          <div className={styles.bottom}>
            <section className={styles.comment}>
              <Comments 
              comments={movieCon.comments} 
              user={props.user} 
              movieConId={movieCon._id}
              handleDeleteComment={handleDeleteComment}
              />
            </section>
            <section className={styles.box}>
              <div className={styles.commentbox}>
                <NewComment handleAddComment={handleAddComment}/>
              </div>
            </section>
          </div>
        </section>
      </section>
    </main>
    </> 
  )
}

export default MovieConView;