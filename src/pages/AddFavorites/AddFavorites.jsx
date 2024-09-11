// npm modules
import { useState } from "react"

//components
import SearchForm from "../../components/SearchForm/SearchForm"
import CelebBar from "../../components/CelebBar/CelebBar"
import CelebPole from "../../components/CelebPole/CelebPole"

// services
import * as tmdbService from '../../services/tmdbService'

// data
import { genreObjects } from "../../data/genres"

// css
import styles from './AddFavorites.module.css'

const AddFavorites = ({ profile, handleAddActor, handleAddDirector, handleAddGenre, handleRemoveCeleb, handleRemoveGenre }) => {
  const [celebs, setCelebs] = useState(null)

  const searchCelebs = async (formData) => {
      const celebsData = await tmdbService.getCelebs(formData)
      setCelebs(celebsData)
  }
  const genreList = genreObjects.filter(genre => 
    profile?.favGenres.every(favGenre => genre.id !== favGenre.genreId)
  )

  const handleChange = evt => {
    console.log(evt)
    const selectedGenre = genreList.find(genre => genre.id === parseInt(evt.target.value))
    selectedGenre.genreId = selectedGenre.id
    selectedGenre.genreName = selectedGenre.name
    handleAddGenre(selectedGenre)
  }

  if (!profile) return <h1>Loading...</h1>

  return (  
    <main className={styles.container}>
      <br />
      <h1>Add Favorites</h1><br />
      <SearchForm searchResults={searchCelebs} type='celeb'/>
      <CelebBar 
        content={celebs} 
        handleAddActor={ handleAddActor } 
        handleAddDirector={ handleAddDirector } 
      />
      <section className={styles.twin}>
        <div className={styles.scrollA}>
            <h1>Favorite Actors</h1><br />
          <CelebPole 
            content={profile.favActors}         
            handleRemoveCeleb={ handleRemoveCeleb }
          />
        </div>
        <div className={styles.scrollB}>
          <h1 className={styles.fixed}>Favorite Directors</h1><br />
          <CelebPole  
            content={profile.favDirectors}
            handleRemoveCeleb={ handleRemoveCeleb }
          />
        </div>
        <div className={styles.genres}>
          <h1>Favorite Genres </h1><br />
          <select className={styles.genre} onChange={handleChange}>
            <option value="">Select Genre</option>
            {genreList.map(genre => 
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            )}
          </select><br />
          <section className={styles.wrap}>
            {profile.favGenres.map(genre => 
              <section className={styles.genreseach} key={genre._id}>
                <h4 >{genre.genreName}</h4>
                <button className={styles.btn6} onClick={() => handleRemoveGenre(genre._id)}> X </button>
              </section>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}

export default AddFavorites