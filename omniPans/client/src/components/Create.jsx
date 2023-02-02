import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Create = () => {
  
        const [name, setName] = useState("")
        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")
        const [specialty, setSpecialty] = useState("")
        const [aboutMe, setAboutMe] = useState("")
        const [theMeal, setTheMeal] = useState("")

  // const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const omniPanUser = {name, title, description, specialty, aboutMe, theMeal}
    axios.post('http://localhost:8000/api/omniPan', omniPanUser)
    // come back to here as it may be api/pets
    .then(res => {
      console.log(res)
      navigate("/")
    })
      .catch(err =>{
        console.log(err)
        // const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        // const errorArr = []; // Define a temp error array to push the messages in
        // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
        //     errorArr.push(errorResponse[key].message)
        // }
        // // Set Errors
        // setErrors(errorArr);
    })
  }

  return (
    <div>
        <div className=''>
        <h1>The Kitchen</h1>
        <button className="btn btn-outline-success" ><Link to = {`/`}>back to home</Link></button>
        </div>
        

        <form onSubmit={handleSubmit}>
        {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
          <div>
            <label>Name</label>
            <input type="text" onChange={(e) => {setName(e.target.value)}} />

          </div>
          <div>
            <label>Title</label>
            <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
          </div>
          <div>
          <label>Description</label>
            <input type="text" onChange={(e) => {setDescription(e.target.value)}} />
          </div>
          <div>
          <label>Specialty</label>
            <input type="text" onChange={(e) => {setSpecialty(e.target.value)}} />
          </div>
          <div>
          <label>About Me</label>
            <input type="textarea" onChange={(e) => {setAboutMe(e.target.value)}} />
          </div>
          <div>
          <label>The Meal</label>
            <input type="text" onChange={(e) => {setTheMeal(e.target.value)}} />
          </div>

          <div>
            <button type="submit">SUBMIT</button>
            
          </div>
        </form>
    </div>
  )
}


export default Create