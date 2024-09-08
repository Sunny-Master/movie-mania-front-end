// npm modules
import { NavLink } from "react-router-dom"

// css
import styles from './Profile.module.css'

const Profile = ({profile}) => {

  if (!profile) return <h1>Loading...</h1>

  return (  
    <main className={styles.container}>
      <h1>Welcome to your Profile! {profile.name}</h1>
      <section>
        <NavLink to={`/addFavorites`}><button>Add Favorites</button></NavLink>
        <NavLink to={`/recommendations`}><button>Movie Recommendations</button></NavLink>
      </section>
    </main>
  )
}

export default Profile