// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import * as profileService from '../../services/profileService'

const Profile = (props) => {
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
    <h1>Welcome to your Profile! {profile.name}</h1>
  )
}

export default Profile