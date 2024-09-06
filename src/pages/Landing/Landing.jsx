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
      <h1>hello, {user.name}</h1>
    </main>
  )
}

export default Landing
