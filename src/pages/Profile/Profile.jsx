// npm modules
import { NavLink } from "react-router-dom"

// components
import MovieConBar from "../../components/MovieConBar/MovieConBar"

// css
import styles from './Profile.module.css'

const Profile = ({profile}) => {

  if (!profile) return <h1>Loading...</h1>

  return (  
    <main className={styles.container}>
      <h1 className={styles.title2}>{profile.name}'s Dashboard</h1><br />
      <section>
        <NavLink to={`/add-favorites`}><button>Favorites</button></NavLink>
        <NavLink to={`/recommendations`}><button>Recommendations</button></NavLink>
        <NavLink to={`/movieCons/new`}><button>Create MovieCon</button></NavLink>
      </section>
      <section>
        <MovieConBar movieCons={profile.movieConcepts}/>
      </section>
    </main>
  )
}

export default Profile