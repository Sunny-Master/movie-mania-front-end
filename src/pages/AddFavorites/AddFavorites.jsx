// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//components
import SearchForm from "../../components/SearchForm/SearchForm"
import CelebCard from "../../components/CelebCard/CelebCard"

// services
import * as tmdbService from '../../services/tmdbService'

const AddFavorites = () => {
  const [celebs, setCelebs] = useState(null)
  const {profileId} = useParams()

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