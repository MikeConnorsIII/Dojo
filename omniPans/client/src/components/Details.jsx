import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


const Details = () => {
    const [recipe, setRecipe] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()
    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/omniPans/${id}`)
        .then((res) => setRecipe(res.data))
        .catch(err => console.log("This is our detail page", + err))
    }, [id])
// dependancy array
const handleDelete = (e, id) => {
    console.log(`Deleting ${id}`, e)
    axios.delete(`http://localhost:8000/api/omniPans/${id}`)
        .then((res) => {
            // setDeleteToggle(!deleteToggle)
            navigate("/")

        })
        .catch((err) => { console.log(err) })
}


var i=0; 
const likeRecipe = () => {           
    
    i=1;       
    document.getElementById('number').innerHTML=i;
}


    return ( 
        <>
        <div className='container'>
        <div className='d-flex justify-content-between'>
            <h1>All Recipes!</h1>
            <p><button className="btn btn-success"><Link to = {"/"}> Home </Link></button></p>
        </div>
        <div>
        <h3>Details about: {recipe.name}</h3>
        <button className="btn btn-danger" onClick={(e) => { handleDelete(e, recipe._id) }}>Delete</button>
        </div>
            <h1>Recipe Details</h1>
        <div className=''>
            <div className='p-2'>
            
            <h3>Description: </h3><p>{recipe.description}</p>
            <h3>About the {recipe.title}!:</h3>
            </div>

            <div className='p-2'>
            <p>{recipe.specialty}</p>
            <p>{recipe.aboutME}</p>
            <p>{recipe.theMeal}</p>
            </div>
        <button class="noDouble" onClick={likeRecipe} className='btn btn-success'>Like {recipe.name}</button>
            
        </div>
        <div>
        
        
        <p><span type="text" id="number" value="0">0 </span>Like(s)</p>
        
        </div>
        </div>
        </>
    )
}

export default Details