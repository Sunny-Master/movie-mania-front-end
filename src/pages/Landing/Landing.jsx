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
      <h1>Hello, {user.name}! Welcome to Movie Mania</h1>
      <div>
        <h1>What is Movie Mania</h1>
        <p>Movie Mania is all about</p>
      </div>
    </main>
  )
}

export default Landing
