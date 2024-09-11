// npm modules
import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

// css
import styles from './EditComment.module.css'

// services
import * as movieConService from '../../services/movieConService'

const EditComment = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { movieConId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    const value = evt.target.name === 'rating' ? parseInt(evt.target.value) : evt.target.value
    setFormData({ ...formData, [evt.target.name]: value  })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await movieConService.updateComment(movieConId, formData)
    navigate(`/movieCons/${movieConId}`)
  }

  return (
  <section className={styles.container2}>
    <h1 className={styles.h1}>Edit Your Comment</h1>
    <form onSubmit={handleSubmit}>
      <textarea 
        className={styles.textarea}
        name="content" 
        value={formData.content}
        placeholder='Edit a Comment'
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor="rating-input">Rating</label>
        <select
          className={styles.select}
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
      <button className={styles.btn4} type="submit">Submit Comment</button>
    </form>
  </section>
  )
}

export default EditComment