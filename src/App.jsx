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
              <MovieConShow user={user}/>
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
              <EditMovieCon profile={profile}/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
