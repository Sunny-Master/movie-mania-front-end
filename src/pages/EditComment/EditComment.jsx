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
    console.log(formData);
    console.log(value);
  }
  
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    await movieConService.updateComment(movieConId, formData)
    navigate(`/movieCons/${movieConId}`)
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea 
        name="content" 
        value={formData.content}
        placeholder='Edit a Comment'
        onChange={handleChange}
      />
      <label htmlFor="rating-input">Rating</label>
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
      <button type="submit">Submit Comment</button>
    </form>
  )
}

export default EditComment