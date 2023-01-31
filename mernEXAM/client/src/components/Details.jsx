import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


const Details = () => {
    const [pet, setPet] = useState("")
    const {id} = useParams()

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res) => setPet(res.data))
        .catch(err => console.log("This is our detail page", + err))
    }, [id])
// dependancy array
const handleDelete = (e, id) => {
    console.log(`Adopting ${id}`, e)
    axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then((res) => {
            setDeleteToggle(!deleteToggle)

        })
        .catch((err) => { console.log(err) })
}


var i=0; 
const likeAnimal = () => {           
    
    i=1;       
    document.getElementById('number').innerHTML=i;
}


    return ( 
        <>
        <div className='d-flex justify-content-between'>
            <h1>Pet Shelter</h1>
            <p><button className="btn btn-success"><Link to = {"/"}> Home </Link></button></p>
        </div>
        <div>
        <h3>Details about: {pet.name}</h3>
        <button className="btn btn-danger" onClick={(e) => { handleDelete(e, pet._id) }}>Delete</button>
        </div>
        <div>
            <h1>Pet Details</h1>
            <p>Type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Skills:   </p>
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>
            
        </div>
        <div>
        <button class="noDouble" onClick={likeAnimal} className='btn btn-success'>Like {pet.name}</button>
        
        
        <p><span type="text" id="number" value="0">0 </span>Like(s)</p>
        
        </div>
        </>
    )
}

export default Details