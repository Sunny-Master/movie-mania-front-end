// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <nav className={styles.container}>
      <NavLink to="/" className={styles.home}>
        <img src="https://img.icons8.com/?size=100&id=lEV2xeBg4PUI&format=png&color=000000" alt="" className={styles.logo}/>
        <h1 className={styles.header}>Movie Mania</h1>
      </NavLink>
      {user ?
        <ul className={styles.loggedIn}>
          <li><NavLink to="/movieCons">MovieCons</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
        </ul>
      :
        <>
          <h3 className={styles.slogan}>Lights, Camera, Create!</h3>
          <ul>
            <li><NavLink to="/movieCons">MovieCons</NavLink></li>
            <li><NavLink to="/auth/login">Login</NavLink></li>
            <li><NavLink to="/auth/signup">SignUp</NavLink></li>
          </ul>
        </>
        
      }
    </nav>
    </>
  )
}

export default NavBar
