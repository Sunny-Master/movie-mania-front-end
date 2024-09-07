// npm modules
import { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'


const Profile = () => {
  const [profile, setProfile] = useState(null)
  const { profileId } = useParams()

  useEffect(() => {
    const fetchProfile = async () => {
      // make an API call to get users profile
      const profileData = await profileService.show(profileId)
      // use result to set state
      setProfile(profileData)
    }
    fetchProfile()
  }, [profileId])

  if (!profile) return <h1>Loading...</h1>

  return (  
    <>
      <h1>Welcome to your Profile! {profile.name}</h1>
      <NavLink to={`/profiles/${profileId}/addFavorites`}>Add Favorites</NavLink>
      <NavLink to={`/recommendations`}>Movie Recommendations</NavLink>

    </>
    
  )
}

export default Profile