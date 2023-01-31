import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'


const Update = () => {
    const [title, setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description, setDescription] = useState("")

    const [errors, setErrors] = useState([]);

    const [errorObj, setErrorObj] = useState({});
    const {id} = useParams()
    // object 
    const navigate = useNavigate()

    // allows us to grab the data from the item we are using
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + id)
        .then((res)=>{
            console.log("this is my update get request: ", res.data)
            const product = res.data
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
        })
        .catch((err)=>console.log("This is our Update page get request", err))
    }, [])

    // after we do an action we can use a nviagte to go anywhere else
    const handleSubmit = (e) => {
        e.preventDefault()
        const putObj = {title, price, description}
        axios.put(`http://localhost:8000/api/products/${id}`, putObj)
        .then((res)=>{
            if(res.data.errors !== undefined){
                const errorResponse = res.data.errors; 

                const errObj = {
                    titleErr: errorResponse.title?.message,
                    priceErr: errorResponse.price?.message,
                    descriptionErr: errorResponse.description?.message,
                    
                }

                setErrorObj(errObj);
            // console.log(err)
            // const errorArr = []; 
            // for (const key of Object.keys(errorResponse)) { 
            //     errorArr.push(errorResponse[key].message)
            // }
            // setErrors(errorArr);
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
            <h1>Update a Product - Create</h1>
            <form onSubmit={handleSubmit}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <p>{errorObj.titleErr}</p>

                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <p>{errorObj.descriptionErr}</p>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                    <p>{errorObj.priceErr}</p>
                </div>
                <div>
                    <button >Update Product</button>
                    <button className="btn btn-outline-success" ><Link to={`/`}>Cancel</Link></button>

                </div>
            </form>
        </div>
    )
}

export default Update