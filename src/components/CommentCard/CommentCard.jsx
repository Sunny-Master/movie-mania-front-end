// npm modules
import { NavLink } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment, movieConId, user }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={comment} />
        {comment.author._id === user.profile &&
              <NavLink to={`/movieCons/${movieConId}/comments/edit`} state={comment}>
                <button>Edit</button>
              </NavLink>
          }
      </header>
      <div>{comment.rating}</div>
      <p>{comment.content}</p>
    </article>
  )
}

export default CommentCard