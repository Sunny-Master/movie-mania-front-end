// npm modules
import { useState } from "react"

//components
import SearchForm from "../../components/SearchForm/SearchForm"
import CelebBar from "../../components/CelebBar/CelebBar"

// services
import * as tmdbService from '../../services/tmdbService'

// css
import styles from './AddFavorites.module.css'

const AddFavorites = () => {
  const [celebs, setCelebs] = useState(null)

  const searchCelebs = async (formData) => {
      const celebsData = await tmdbService.getCelebs(formData)
      setCelebs(celebsData)
  }
  
  return (  
    <main className={styles.container}>
      <h1>Add Favorites</h1>
      <SearchForm searchResults={searchCelebs} type='celeb'/>
      <CelebBar content={celebs} />
    </main>
  )
}

export default AddFavorites