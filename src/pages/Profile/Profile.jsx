const Profile = (props) => {
  const { user } = props
  return (  
    <h1>Welcome to your Profile, {user.name}!</h1>
  )
}

export default Profile