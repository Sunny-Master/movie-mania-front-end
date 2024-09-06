// npm modules
import { useState } from "react"

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

// css
import styles from './SearchForm.module.css'

const SearchForm = (props) => {
  const [formData, setFormData] = useState({name: ''})

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.searchCelebs(formData)
  }


  return (  
    <div className="App">
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
        sx={{ width: "50%" }}
      >
        <Paper elevation={4} sx={{ width: "100%", p: "1rem" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              autoComplete="off"
              margin="normal"
              fullWidth
              required
              type="text"
              name="name"
              label="Search for Celeb"
              value={formData.query}
              onChange={handleChange}
            />
            
            <Button type="submit" variant="contained" sx={{ width: "50%"}}> Search </Button>
          </form>
        </Paper>
      </Box>
    </div>
  )
}

export default SearchForm