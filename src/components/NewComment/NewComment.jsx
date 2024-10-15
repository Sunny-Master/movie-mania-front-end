// npm modules
import { useState } from 'react'

// css
import styles from './NewComment.module.css'

const NewComment = (props) => {
  const [formData, setFormData] = useState({ content: '', rating: 1 })

  const handleChange = (evt) => {
    const value = evt.target.name === 'rating' ? parseInt(evt.target.value) : evt.target.value
    setFormData({ ...formData, [evt.target.name]: value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddComment(formData)
    setFormData({ content: '' , rating: 1})
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h4>New Comment</h4>
      <section className={styles.commentBox}>
        <section className={styles.selectBox}>
          <label className={styles.rating} htmlFor="rating-input">Rating</label>
          <select
            required
            name="rating"
            id="rating-input"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </section>
        <textarea 
          name="content" 
          value={formData.content}
          placeholder='Add a Comment'
          onChange={handleChange}
          className={styles.text}
          required
        />
        <button className={styles.btn5} type="submit">Add Comment</button>
      </section>
    </form>
  )
}

export default NewComment