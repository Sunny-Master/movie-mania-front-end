// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {

  if (!user) 
    return (
      <main className={styles.container}>
        <h1>hello, friend</h1>
      </main>
    )

  return (
    <main className={styles.container}>
      <h1>Hello, {user.name}!</h1>
      <h2>Welcome to Movie Mania</h2>
      <div>
        <h1>Whats the point?</h1>
        <p>Movie Mania is all about</p>
      </div>
      <div>
        <h1>About us!</h1>
        <p>This is that info</p>
      </div>
    </main>
  )
}

export default Landing
