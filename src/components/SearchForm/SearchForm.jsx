// npm modules
import { useState } from "react"

// css
import styles from './SearchForm.module.css'

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.searchResults(formData)
  }


  return (  
    <section className={styles.container}>
      <form autoComplete="off" onSubmit={handleSubmit}>
            <input 
              type="text"
              value={formData.query}
              name="query"
              required
              onChange={handleChange}
              placeholder={props.type === 'celeb' ? 'Search for Celeb' : 'Search for Movie'}
            />
          <button className={styles.search} type="submit">Search</button>
      </form>
    </section>
  )
}

export default SearchForm