import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Create = () => {
    
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(5)
    const [description, setDescription] = useState("")

  
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const prodObj = {title, price, description}
      axios.post('http://localhost:8000/api/songs', prodObj)
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
        <h1>Add a Product - Create</h1>
        <form onSubmit={handleSubmit}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
          <div>
            <label>Title</label>
            <input type="text" onChange={(e) => {setTitle(e.target.value)}} />

          </div>
          <div>
          <label>Price</label>
            <input type="number" onChange={(e) => {setPrice(e.target.value)}} />
          </div>
          <div>
          <label>Description</label>
            <input type="text" onChange={(e) => {setDescription(e.target.checked)}} />
          </div>
          <div>
            <button type="submit">Add a Product</button>
            <button className="btn btn-outline-success" ><Link to = {`/`}>Cancel</Link></button>
            
          </div>
        </form>
    </div>
  )
}

export default Create