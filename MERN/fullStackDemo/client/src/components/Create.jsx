import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Create = () => {
  
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [rating, setRating] = useState(5)
  const [top100, setTop100] = useState(false)

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const songObj = {title, artist, rating, top100}
    axios.post('http://localhost:8000/api/songs', songObj)
    .then(res => {
      navigate("/")
    })
      .catch(err =>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })
  }

  return (
    <div>
        <h1>Add a Song - Create</h1>
        <form onSubmit={handleSubmit}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
          <div>
            <label>Title</label>
            <input type="text" onChange={(e) => {setTitle(e.target.value)}} />

          </div>
          <div>
            <label>Rating</label>
            <input type="text" onChange={(e) => {setArtist(e.target.value)}} />
          </div>
          <div>
          <label>Rating</label>
            <input type="number" onChange={(e) => {setRating(e.target.value)}} />
          </div>
          <div>
          <label>Top 100</label>
            <input type="checkbox" onChange={(e) => {setTop100(e.target.checked)}} />
          </div>
          <div>
            <button type="submit">Add a Song</button>
            <button className="btn btn-outline-success" ><Link to = {`/`}>Cancel</Link></button>
            
          </div>
        </form>
    </div>
  )
}

export default Create