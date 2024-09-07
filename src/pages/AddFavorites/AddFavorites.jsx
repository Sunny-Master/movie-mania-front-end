// npm modules
import { useState } from "react"

//components
import SearchForm from "../../components/SearchForm/SearchForm"
import CelebCard from "../../components/CelebCard/CelebCard"

// services
import * as tmdbService from '../../services/tmdbService'

const AddFavorites = () => {
  const [celebs, setCelebs] = useState(null)

  const searchCelebs = async (formData) => {
      const celebsData = await tmdbService.getCelebs(formData)
      setCelebs(celebsData)
  }
  
  return (  
    <>
      <h1>Add favorites!!!!</h1>
      <SearchForm searchResults={searchCelebs} type='celeb'/>
      {celebs?.map(celeb => 
        <CelebCard key={celeb.celebId} content={celeb} />
      )}
    </>
  )
}

export default AddFavorites