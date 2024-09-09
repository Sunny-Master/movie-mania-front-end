import { useState } from "react";

const NewMovieCon = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    plot: '',
    genres: [],
    actors: [],
    director: ''
  })
  const { profile } = props

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddMovieCon(formData)
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
    <main >
      <form onSubmit={handleSubmit}>
        <h1>New Movie Concept</h1>
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
          <option key={genre._id} value={genre.genreName}>
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
          <option key={actor._id} value={actor.name}>
            {actor.name}
          </option>
        )}
        </select>
        <label htmlFor="director-input">Director</label>
        <select
          required
          name="director"
          id="director-input"
          value={formData.director.name}
          onChange={handleChange}
        >
        <option value="">Select Director</option>
        {profile.favDirectors.map(director => 
          <option key={director._id} value={director.name}>
            {director.name}
          </option>
        )}
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewMovieCon