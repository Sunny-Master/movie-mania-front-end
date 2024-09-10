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
        {
          <>
          {comment.author._id === user.profile &&
            <NavLink to={`/movieCons/${movieConId}/comments/edit`} state={comment}>
              <button>Edit</button>
            </NavLink>}
          {comment.author._id === user.profile &&
            <NavLink to={`/movieCons/${movieConId}`} state={comment}>
              <button onClick={() => handleDeleteComment(movieConId, comment._id)}>☠️</button>
            </NavLink>}
          </>
          }
      </header>
      <section className={styles.bottom}>
      <div className={styles.rating}>{comment.rating}/5</div>
      <p className={styles.content}>{comment.content}</p>
      </section>
    </article>
  )
}

export default CommentCard