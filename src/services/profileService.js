// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function addPhoto(photoData) {
  try {
    const photoFormData = new FormData()
    photoFormData.append('photo', photoData)
    const profileId = tokenService.getUserFromToken().profile
    const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoFormData,
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function show(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}` 
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addActor(celebData) {
  try {
    const res = await fetch(`${BASE_URL}/add-actor`, {
      method: "PUT",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(celebData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addDirector(celebData) {
  try {
    const res = await fetch(`${BASE_URL}/add-director`, {
      method: "PUT",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(celebData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addGenre(genreData) {
  try {
    const res = await fetch(`${BASE_URL}/add-genre`, {
      method: "PUT",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(genreData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addMovie(movieData) {
  try {
    const res = await fetch(`${BASE_URL}/add-movie`, {
      method: "PUT",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(movieData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addToWatchList(movieData) {
  try {
    const res = await fetch(`${BASE_URL}/add-to-watch-list`, {
      method: "PUT",
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(movieData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function removeActor(actorId) {
  try {
    const res = await fetch(`${BASE_URL}/favActors/${actorId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function removeDirector(directorId) {
  try {
    const res = await fetch(`${BASE_URL}/favDirectors/${directorId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function removeMovie(movieId) {
  try {
    const res = await fetch(`${BASE_URL}/favMovies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function removeFromWatchList(movieId) {
  try {
    const res = await fetch(`${BASE_URL}/watchList/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function removeGenre(genreId) {
  try {
    const res = await fetch(`${BASE_URL}/favGenres/${genreId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


export { 
  getAllProfiles, 
  addPhoto,
  show,
  addActor,
  addDirector,
  addGenre,
  addMovie,
  addToWatchList,
  removeActor,
  removeDirector,
  removeMovie,
  removeFromWatchList,
  removeGenre
}
