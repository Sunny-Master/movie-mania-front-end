const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/movieCons`

async function index() {
  try {
    const res = await fetch(BASE_URL)
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function show(movieConId) {
  try {
    const res = await fetch(`${BASE_URL}/${movieConId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
}