// components
import DateCard from '../DateCard/DateCard'

// assets
import profileIcon from '../../assets/icons/profile.png'

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({ content }) => {
  const photo = content.author.photo ? content.author.photo : profileIcon

  return (
    <div className={styles.container}>
      <img src={photo} alt="The user's avatar" />
      <section className={styles.info}>
        <h3>{content.author.name}</h3>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo
