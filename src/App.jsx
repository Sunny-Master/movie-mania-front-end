// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Profile from './pages/Profile/Profile'
import NewMovieCon from './pages/NewMovieCon/NewMovieCon'
import AddFavorites from './pages/AddFavorites/AddFavorites'
import Recommendations from './pages/Recommendations/Recommendations'
import MovieCons from './pages/MovieCons/MovieCons'
import MovieConShow from './pages/MovieConShow/MovieConShow'
import EditMovieCon from './pages/EditMovieCon/EditMovieCon'
import EditComment from './pages/EditComment/EditComment'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as movieConService from './services/movieConService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()
  const [movieCons, setMovieCons] = useState([])

  useEffect(() => {
    const fetchMovieCons = async () => {
      // make an API call to get MovieCons
      const movieConsData = await movieConService.index()
      // use result to set state
      setMovieCons(movieConsData)
    }
    fetchMovieCons()
  }, [user])

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return
      // make an API call to get users profile
      const profileData = await profileService.show(user.profile)
      // use result to set state
      setProfile(profileData)
    }
    fetchProfile()
  }, [user])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddActor = async (celebData) => {
    const favActorsData = await profileService.addActor(celebData)
    // setProfile()
    setProfile({...profile, favActors: favActorsData})
    navigate('/add-favorites')
  }

  const handleAddDirector = async (celebData) => {
    const favDirectorsData = await profileService.addDirector(celebData)
    // setProfile()
    setProfile({...profile, favDirectors: favDirectorsData})
    navigate('/add-favorites')
  }

  const handleAddGenre = async (genreData) => {
    const favGenresData = await profileService.addGenre(genreData)
    // setProfile()
    setProfile({...profile, favGenres: favGenresData})
    navigate('/add-favorites')
  }

  const handleAddMovie = async (movieData) => {
    const favMoviesData = await profileService.addMovie(movieData)
    // setProfile()
    setProfile({...profile, favMovies: favMoviesData})
    navigate('/recommendations')
  }
  
  const handleAddToWatchList = async (movieData) => {
    const moviesData = await profileService.addToWatchList(movieData)
    // setProfile()
    setProfile({...profile, watchList: moviesData})
    navigate('/recommendations')
  }

  const handleAddMovieCon = async (movieConFormData) => {
    const newMovieCon = await movieConService.create(movieConFormData)
    setMovieCons([newMovieCon, ...movieCons])
    navigate('/movieCons')
  }

  const handleUpdateMovieCon = async (formData) => {
    const updatedMovieCon = await movieConService.update(formData)
    setMovieCons(movieCons.map(movieCon => updatedMovieCon._id === movieCon._id ? updatedMovieCon : movieCon))
    navigate('/movieCons')
  }

  const handleDeleteMovieCon = async (movieConId) => {
    const deletedMovieCon = await movieConService.delete(movieConId)
    setMovieCons(movieCons.filter(movieCon => movieCon._id !== deletedMovieCon._id))
    navigate('/movieCons')
  }

  const handleUpdateComment = async (formData) => {
    const updatedComment = await movieConService.updateComment(formData)
    setMovieCons(movieCons.map(movieCon => updatedComment._id === movieCon._id ? updatedComment : comment))
    navigate('/movieCons')
  }

  const handleRemoveCeleb = async (celebData) => {
    if (celebData.skill === 'Acting') {
      const favActorsData = await profileService.removeActor(celebData._id)
      setProfile({...profile, favActors: favActorsData})
    } else {
      const favDirectorsData = await profileService.removeDirector(celebData._id)
      setProfile({...profile, favDirectors: favDirectorsData})
    }
    navigate('/add-favorites')
  }

  const handleRemoveMovie = async (movieId, listType) => {
    if (listType === 'favMovies') {
      const favMoviesData = await profileService.removeMovie(movieId)
      setProfile({...profile, favMovies: favMoviesData})
    } else {
      const watchListData = await profileService.removeFromWatchList(movieId)
      setProfile({...profile, watchList: watchListData})
    }
    navigate('/recommendations')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Profile profile={profile}/>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/add-favorites"
          element={
            <ProtectedRoute user={user}>
              <AddFavorites 
                profile={profile} 
                handleAddActor={handleAddActor}
                handleAddDirector={handleAddDirector}
                handleAddGenre={handleAddGenre}
                handleRemoveCeleb={handleRemoveCeleb}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recommendations"
          element={
            <ProtectedRoute user={user}>
              <Recommendations 
                profile={profile}
                handleAddMovie={handleAddMovie}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveMovie={handleRemoveMovie}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movieCons"
          element={
              <MovieCons 
                movieCons={movieCons}
              />
          }
        />
        <Route
          path="/movieCons/:movieConId"
          element={
              <MovieConShow user={user} handleDeleteMovieCon={handleDeleteMovieCon}/>
          }
        />
        <Route
          path="/movieCons/new"
          element={
            <ProtectedRoute user={user}>
              <NewMovieCon 
                profile={profile} 
                handleAddMovieCon={handleAddMovieCon}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movieCons/edit"
          element={
            <ProtectedRoute user={user}>
              <EditMovieCon profile={profile} handleUpdateMovieCon={handleUpdateMovieCon}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/movieCons/:movieConId/comments/edit"
          element={
            <ProtectedRoute user={user}>
              <EditComment profile={profile} handleUpdateComment={handleUpdateComment}/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
