import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'


const Update = () => {
        const [name, setName] = useState("")
        const [title, setTitle] = useState("")
        const [description, setDescription] = useState("")
        const [specialty, setSpecialty] = useState("")
        const [aboutMe, setAboutMe] = useState("")
        const [theMeal, setTheMeal] = useState("")

    const [errors, setErrors] = useState([]);

    const [errorObj, setErrorObj] = useState({});
    const {id} = useParams()
    
    const navigate = useNavigate()

    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/omniPans/" + id)
        .then((res)=>{
            console.log("this is my update get request: ", res.data)
            const recipe = res.data
            setName(recipe.name)
            setTitle(recipe.title)
            setDescription(recipe.description)
            setSpecialty(recipe.specialty)
            setAboutMe(recipe.aboutMe)
            setTheMeal(recipe.theMeal)
        })
        .catch((err)=>console.log("This is our Update page get request", err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const putObj = {name, title, description, specialty, aboutMe, theMeal}
        axios.put(`http://localhost:8000/api/omniPans/${id}`, putObj)
        .then((res)=>{
            if(res.data.errors !== undefined){
                const errorResponse = res.data.errors; 
                const errObj = {
                    nameErr: errorResponse.name?.message,
                    titleErr: errorResponse.title?.message,
                    descriptionErr: errorResponse.description?.message,
                    specialtyErr: errorResponse.specialty?.message,
                    aboutmeErr: errorResponse.aboutme?.message,
                    theMealErr: errorResponse.theMeal?.message,
                    
                }
                setErrorObj(errObj);
            }
            else{
                console.log("successfully updated",res)
                navigate("/")
            }

        })
        .catch(err =>{
            console.log(err)
            const errorResponse = err.response.data.errors; 
            // console.log(err)
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    return (
        <div>
            <div>
            <h1>Pet Shelter</h1>
            <button className="btn btn-outline-success" ><Link to={`/`}>back to home</Link></button>
            </div>

            <form onSubmit={handleSubmit}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <p>{errorObj.nameErr}</p>
                </div>

                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <p>{errorObj.typeErr}</p>
                </div>

                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <p>{errorObj.descriptionErr}</p>
                </div>

                <div>
                    <label>Specialty</label>
                    <input type="text" value={specialty} onChange={(e) => { setSpecialty(e.target.value) }} />
                    <p>{errorObj.specialtyErr}</p>
                </div>

                <div>
                    <label>About me</label>
                    <input type="textarea" value={aboutMe} onChange={(e) => { setAboutMe(e.target.value) }} />
                    <p>{errorObj.aboutmeErr}</p>
                </div>
                
                <div>
                    <label>The Meal</label>
                    <input type="text" value={theMeal} onChange={(e) => { setTheMeal(e.target.value) }} />
                    <p>{errorObj.theMealErr}</p>
                </div>

                <div>
                    <button >Edit Recipe</button>
                </div>

            </form>
        </div>
    )
}

export default Update