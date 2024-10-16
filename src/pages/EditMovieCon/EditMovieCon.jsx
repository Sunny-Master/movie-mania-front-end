import { useState } from "react"
import { useLocation } from "react-router-dom";

import styles from './EditMovieCon.module.css'

const EditMovieCon = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)
  const { profile } = props

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdateMovieCon(formData)
  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSelectChange = evt => {
    const { name, options } = evt.target
    const selectedValues = Array.from(options).filter(option => option.selected).map(option => option.value)
    setFormData({...formData, [name]: selectedValues })
  }

  if (!profile) return <h1>Loading...</h1>

  return (  
    <main className={styles.container}>
      <h1 className={styles.title2}>Edit Movie Concept</h1>
      <section className={styles.main}>
        <form onSubmit={handleSubmit}>
          <div className={styles.title}>
            <label className={styles.plott} htmlFor="title-input">Title</label>
            <input
              required
              type="text" 
              name="title"
              id="title-input"
              placeholder="Movie Title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className={styles.director}>
              <label className={styles.plott} htmlFor="director-input">Director</label>
              <select
                name="director"
                id="director-input"
                value={formData.director}
                onChange={handleChange}
              >
                <option value="">Select Director</option>
                {profile.favDirectors.map(director => 
                  <option key={director._id} value={director.name}>
                    {director.name}
                  </option>
                )}
              </select>
            </div>
          <div className={styles.middle}>
            <div className={styles.genres}>
              <label className={styles.plott} htmlFor="genre-input">Genres</label>
              <select
                required
                multiple
                name="genres"
                id="genre-input"
                value={formData.genres}
                onChange={handleSelectChange}
                className={styles.select}
              >
                <option value="">Select Genre</option>
                {profile.favGenres.map(genre => 
                  <option key={genre._id} value={genre.genreName}>
                  {genre.genreName}
                  </option>
                )}
              </select>
            </div>
            
            <div className={styles.actor}>
              <label className={styles.plott} htmlFor="actors-input">Actors</label>
              <select
                multiple
                name="actors"
                id="actors-input"
                value={formData.actors}
                onChange={handleSelectChange}
                className={styles.select}
              >
              <option value="">Select Actors</option>
              {profile.favActors.map(actor => 
                <option key={actor._id} value={actor.name}>
                  {actor.name}
                </option>
              )}
              </select>
            </div>
          </div>
          <div className={styles.bottom}>
            <label className={styles.plott} htmlFor="plot-input">Plot</label><br />
            <textarea
              type="text"
              name="plot"
              id="plot-input"
              value={formData.plot}
              placeholder="Write plot here..."
              onChange={handleChange}
              className={styles.plotinput}
            />
          </div>
          <button className={styles.btn7} type="submit">SUBMIT</button>
        </form>
      </section>
    </main>
  )
}

export default EditMovieCon