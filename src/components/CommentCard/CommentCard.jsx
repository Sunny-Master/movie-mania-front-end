// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={comment} />
      </header>
      <div>{comment.rating}</div>
      <p>{comment.content}</p>
    </article>
  )
}

export default CommentCard