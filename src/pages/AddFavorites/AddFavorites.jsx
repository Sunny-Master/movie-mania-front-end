// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//components
import SearchForm from "../../components/SearchForm/SearchForm"

const AddFavorites = () => {
  const [celebs, setCelebs] = useState(null)
  const {profileId} = useParams()


  return (  
    <>
      <h1>Add favorites!!!!</h1>
      <SearchForm />
    </>

  )
}

export default AddFavorites