// npm modules
import { useState } from 'react'
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

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
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
          path="/profiles/:profileId"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/movieConcepts/new"
          element={
            <ProtectedRoute user={user}>
              <NewMovieCon />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:profileId/addFavorites"
          element={
            <ProtectedRoute user={user}>
              <AddFavorites />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recommendations"
          element={
            <ProtectedRoute user={user}>
              <Recommendations />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movieConcepts"
          element={
            <ProtectedRoute user={user}>
              <MovieCons />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movieConcepts/show"
          element={
            <ProtectedRoute user={user}>
              <MovieConShow />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movieConcepts/edit"
          element={
            <ProtectedRoute user={user}>
              <EditMovieCon />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
