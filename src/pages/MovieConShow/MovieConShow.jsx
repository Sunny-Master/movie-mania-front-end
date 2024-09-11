//npm modules
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

// components
import MovieConView from '../../components/MovieConView/MovieConView'

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
    <>
    {user && movieCon.author._id === user.profile && 
      <>
      <NavLink to='/movieCons/edit' state={movieCon}><button type='submit' className={styles.btn1}>Edit</button></NavLink>
      <button className={styles.btn2} onClick={() => props.handleDeleteMovieCon(movieCon._id)}>Delete</button>
      </>
    } 
    <MovieConView 
      movieCon={movieCon} 
      user={user} 
      handleAddComment={handleAddComment}
      handleDeleteComment={handleDeleteComment}
      />
    </>
  )
}

export default MovieConShow;