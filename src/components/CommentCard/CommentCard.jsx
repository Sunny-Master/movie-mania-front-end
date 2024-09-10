// npm modules
import { NavLink } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment, movieConId, user, handleDeleteComment }) => {
  return (
    
    <article>
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
      <div>{comment.rating}</div>
      <p>{comment.content}</p>
    </article>
  )
}

export default CommentCard