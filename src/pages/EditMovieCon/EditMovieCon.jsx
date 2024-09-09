// npm modules 
import { useState } from "react";
import { useLocation } from "react-router-dom";

// css
import styles from './EditMovieCon.module.css'

const EditMovieCon = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value })
  }

  const { profile } = props

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateMovieCon(formData)
  }

  const handleSelectChange = evt => {
    const { name, options } = evt.target
    const selectedValues = Array.from(options).filter(option => option.selected).map(option => option.value)
    setFormData({...formData, [name]: selectedValues })
  }

  return (  
    <main >
      <form onSubmit={handleSubmit}>
        <h1>Edit Movie Concept</h1>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text" 
          name="title"
          id="title-input"
          placeholder="Movie Title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="plot-input">Plot</label>
				<textarea
          required
          type="text"
          name="plot"
          id="plot-input"
          value={formData.plot}
          placeholder="Write plot here..."
          onChange={handleChange}
        />
        <label htmlFor="genre-input">Genres</label>
        <select
          required
          multiple
          name="genres"
          id="genre-input"
          value={formData.genres}
          onChange={handleSelectChange}
        >
        <option value="">Select Genre</option>
        {profile.favGenres.map(genre => 
          <option key={genre._id} value={genre}>
            {genre.genreName}
          </option>
        )}
        </select>
        <label htmlFor="actors-input">Actors</label>
        <select
          required
          multiple
          name="actors"
          id="actors-input"
          value={formData.actors}
          onChange={handleSelectChange}
        >
        <option value="">Select Actors</option>
        {profile.favActors.map(actor => 
          <option key={actor._id} value={actor}>
            {actor.name}
          </option>
        )}
        </select>
        <label htmlFor="director-input">Director</label>
        <select
          required
          name="director"
          id="director-input"
          value={formData.director}
          onChange={handleChange}
        >
        <option value="">Select Director</option>
        {profile.favDirectors.map(director => 
          <option key={director._id} value={director}>
            {director.name}
          </option>
        )}
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditMovieCon;