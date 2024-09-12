// css
import styles from './Landing.module.css'

const Landing = ({ user }) => {

  if (!user) 
    return (
      <main>
        <section className={styles.container2}>
        </section>
      </main>
    )

  return (
    <main className={styles.container}>
      <h1 className={styles.head}>Hello, {user.name}! Welcome to Movie Mania</h1>
      <div className={styles.about}>
        <h1 className={styles.header}>What is Movie Mania?</h1>
        <p className={styles.blurb}> Your ultimate movie concept creator and recommendation engine! With Movie Mania, unleash your imagination to craft unique movie ideas and add your favorite actors, directors, and genres to your movie concept. Whether you are a budding filmmaker or a passionate cinephile, Movie Mania provides you with cinematic recommendations, making the discovery of your next favorite movie easier and more exciting than ever. Get ready to ignite your movie experience with Movie Mania!</p>
      </div>
    </main>
  )
}

export default Landing
