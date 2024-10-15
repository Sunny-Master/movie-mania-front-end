//npm modules
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

// components
// import MovieConView from '../../components/MovieConView/MovieConView'
import NewComment from '../../components/NewComment/NewComment'
import Comments from '../../components/Comments/Comments'

// services
import * as movieConService from '../../services/movieConService'

// css
import styles from './MovieConShow.module.css'

const MovieConShow = (props) => {
  const [movieCon, setMovieCon] = useState(null)
  const { movieConId } = useParams()
  const { user } = props
  useEffect(() => {
    const fetchMovieCon = async() => {
      // make an API call to getch movieCon
      const movieConData = await movieConService.show(movieConId)
      // use result to set State
      setMovieCon(movieConData)
    } 
    fetchMovieCon()
  }, [movieConId])

  const handleAddComment = async commentFormData => {
    // make an API call using servcie function
    const newComment = await movieConService.createComment(movieConId, commentFormData)
    // set state with the result
    setMovieCon({ ...movieCon, comments: [...movieCon.comments, newComment] })
  }

  const handleDeleteComment = async (movieConId, commentId) => {
    await movieConService.deleteComment(movieConId, commentId)
    setMovieCon({ ...movieCon, comments: movieCon.comments.filter((comment) => comment._id !== commentId) })
  }
  
  if (!movieCon) return <h1>Loading...</h1>
  return ( 
    <main className={styles.container}>
      <section className={styles.title2}>
        {user && movieCon.author._id === user.profile && 
            <NavLink to='/movieCons/edit' state={movieCon}><button type='submit' className={styles.btn}>Edit</button></NavLink>
        }
        <h1>{movieCon.title}</h1>
        {user && movieCon.author._id === user.profile && 
            <button className={styles.btn} onClick={() => props.handleDeleteMovieCon(movieCon._id)}>Delete</button>
        }
      </section>
      <section className={styles.movieConDetails}>
        <section className={styles.movieConData}>
          <label>Created By: &nbsp;&nbsp;<span>{movieCon.author.name}</span></label>
          <label>Genre:&nbsp;&nbsp;&nbsp; 
              {movieCon.genres.map((genre, idx) => 
                <span key={idx}>{genre}</span>
              )}
          </label>
          <label>Directed By: &nbsp;&nbsp;<span>{movieCon.director}</span></label>
          <label>Starring:&nbsp;&nbsp;&nbsp; 
              {movieCon.actors.map((actor, idx) => 
                <span key={idx}>{actor}</span>
              )}
          </label>
          <label>Synopsis: &nbsp;&nbsp;<span>{movieCon.plot}</span></label>
        </section >
        <h4 className={styles.line}>Comments</h4>
        { user && 
          <NewComment handleAddComment={handleAddComment}/>
        }            
        <div className={styles.comments}>
          <Comments 
            comments={movieCon.comments} 
            user={props.user} 
            movieConId={movieCon._id}
            handleDeleteComment={handleDeleteComment}
          />
        </div>
      </section>
    </main>
  )
}

export default MovieConShow;