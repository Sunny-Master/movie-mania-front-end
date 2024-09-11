// components
import CommentCard from "../CommentCard/CommentCard"

const Comments = (props) => {
  const sortedComments = props.comments.sort((a, b) =>Date.parse(b.updatedAt) - Date.parse(a.updatedAt))

  if (!props.comments.length) return <h4>No Comments</h4>
  return (
    <>
      {sortedComments.map(comment =>
        <CommentCard 
          key={comment._id} 
          comment={comment}
          user={props.user} 
          movieConId={props.movieConId}
          handleDeleteComment={props.handleDeleteComment}
        />
      )}
    </>
  )
}

export default Comments