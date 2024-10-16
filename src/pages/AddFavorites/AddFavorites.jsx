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
      const celebsInProfile = [...profile.favActors, ...profile.favDirectors]
      const celebResults = celebsData.filter(celeb => celebsInProfile.every(favCeleb => favCeleb.celebId !== celeb.celebId))
      setCelebs(celebResults)
  }
  const genreList = genreObjects.filter(genre => 
    profile?.favGenres.every(favGenre => genre.id !== favGenre.genreId)
  )

  const handleChange = evt => {
    const selectedGenre = genreList.find(genre => genre.id === parseInt(evt.target.value))
    selectedGenre.genreId = selectedGenre.id
    selectedGenre.genreName = selectedGenre.name
    handleAddGenre(selectedGenre)
  }

  if (!profile) return <h1>Loading...</h1>

  return (  
    <main className={styles.container}>
      <h1 className={styles.title2}>Add Favorites</h1>
      <section className={styles.shadedBG}>
        <section className={styles.top}>
          <div className={styles.genres}>
            <h4 className={styles.line}>Favorite Genres </h4>
            <select className={styles.genre} onChange={handleChange}>
              <option value="">Select Genre</option>
              {genreList.map(genre => 
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              )}
            </select>
            <section className={styles.wrap}>
              {profile.favGenres.map(genre => 
                <section className={styles.genreseach} key={genre._id}>
                  <li >{genre.genreName}</li>
                  <button className={styles.btn6} onClick={() => handleRemoveGenre(genre._id)}>❌</button>
                </section>
              )}
            </section>
          </div>
          <div className={styles.search}>
            <SearchForm searchResults={searchCelebs} type='celeb'/>
            <CelebBar 
              content={celebs} 
              handleAddActor={ handleAddActor } 
              handleAddDirector={ handleAddDirector } 
            />
          </div>
        </section>

        <section className={styles.twin}>
          <div className={styles.scrollA}>
            <h4 className={styles.line}>Favorite Actors</h4>
            <CelebBar 
              content={profile.favActors}         
              handleRemoveCeleb={ handleRemoveCeleb }
            />
          </div>
          <div className={styles.scrollB}>
            <h4 className={styles.line}>Favorite Directors</h4>
            <CelebBar  
              content={profile.favDirectors}
              handleRemoveCeleb={ handleRemoveCeleb }
            />
          </div>
        </section>
      </section>
    </main>
  )
}

export default AddFavorites