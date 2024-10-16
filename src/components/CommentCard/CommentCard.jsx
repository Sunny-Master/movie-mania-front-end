// npm modules
import { NavLink } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

// css
import styles from './CommentCard.module.css'

const CommentCard = ({ comment, movieConId, user, handleDeleteComment }) => {
  return (
    
    <article className={styles.card}>
      <header>
        <AuthorInfo content={comment} />
        
        <div className={styles.rating}>{comment.rating}/5</div>
      </header>

      <section className={styles.bottom}>
        <p className={styles.content}>{comment.content}</p>
        {user && comment.author._id === user.profile &&
          <section className={styles.actions}>
            <NavLink to={`/movieCons/${movieConId}/comments/edit`} state={comment}>
              <button className={styles.btn}>✏️</button>
            </NavLink>
            <NavLink to={`/movieCons/${movieConId}`} state={comment}>
              <button className={styles.btn} onClick={() => handleDeleteComment(movieConId, comment._id)}>❌</button>
            </NavLink>
          </section>
        }
      </section>
    </article>
  )
}

export default CommentCard