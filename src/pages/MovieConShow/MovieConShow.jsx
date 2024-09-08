//npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// components
import MovieConView from '../../components/MovieConView/MovieConView'

// services
import * as movieConService from '../../services/movieConService'

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

  return ( 
    <MovieConView movieCon={movieCon} user={user}/>
  )
}

export default MovieConShow;