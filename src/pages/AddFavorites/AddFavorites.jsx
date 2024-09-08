// npm modules
import { useState } from "react"

//components
import SearchForm from "../../components/SearchForm/SearchForm"
import CelebBar from "../../components/CelebBar/CelebBar"

// services
import * as tmdbService from '../../services/tmdbService'

// data
import { genreObjects } from "../../data/genres"

// css
import styles from './AddFavorites.module.css'

const AddFavorites = ({ profile, handleAddActor, handleAddDirector, handleAddGenre }) => {
  const [celebs, setCelebs] = useState(null)
  const [formData, setFormData] = useState({})

  const searchCelebs = async (formData) => {
      const celebsData = await tmdbService.getCelebs(formData)
      setCelebs(celebsData)
  }
  const genreList = genreObjects.filter(genre => 
    profile.favGenres.every(favGenre => genre.id !== favGenre.genreId)
  )

  const handleChange = evt => {
    console.log(evt)
    const selectedGenre = genreList.find(genre => genre.id === parseInt(evt.target.value))
    selectedGenre.genreId = selectedGenre.id
    selectedGenre.genreName = selectedGenre.name
    handleAddGenre(selectedGenre)
  }

  return (  
    <main className={styles.container}>
      <h1>Add Favorites</h1>
      <SearchForm searchResults={searchCelebs} type='celeb'/>
      <CelebBar content={celebs} handleAddActor={ handleAddActor } handleAddDirector={ handleAddDirector } />
      <h1>Favorite Actors</h1>
      <CelebBar content={profile.favActors}/>
      <h1>Favorite Directors</h1>
      <CelebBar content={profile.favDirectors}/>
      <select onChange={handleChange}>
        <option value="">Select Genre</option>
        {genreList.map(genre => 
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        )}
      </select>
      <section>
        <h1>Favorite Genres </h1>
        {profile.favGenres.map(genre => 
          <h4 key={genre.genreId}>{genre.genreName}</h4>
        )}
      </section>
    </main>
  )
}

export default AddFavorites