// npm modules
import { NavLink } from "react-router-dom"

const Profile = ({profile}) => {

  if (!profile) return <h1>Loading...</h1>

  return (  
    <>
      <h1>Welcome to your Profile! {profile.name}</h1>
      <NavLink to={`/addFavorites`}><button>Add Favorites</button></NavLink>
      <NavLink to={`/recommendations`}><button>Movie Recommendations</button></NavLink>
    </>
  )
}

export default Profile