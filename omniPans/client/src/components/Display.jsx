//rafce for this standard plate
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Display = () => {
    const [omniList, setOmniList] = useState([])

    


    useEffect(() => {
        axios.get('http://localhost:8000/api/omniPan')
            .then((res) => {
                console.log('This is my display page data', res.data)
                setOmniList(res.data)
            })
            .catch((err) => { console.log("This is my display page error: ", err) })
    }, [])
    // use

    
    return (
        <div className='container'>
            <div className='d-flex justify-content-between '>
            <h1>The Cook Book</h1>
            <button className="btn btn-outline-success" ><Link to={`/create`}>Add a recipe!</Link></button>
            </div>

            <h3>All Recipes</h3>

            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th id="myTable">Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="omniList">
                    {
                        omniList.map((recipe, i) => {
                            return (
                                <tr key={i}>
                                    <td>{recipe.name}</td>
                                    
                                    <td>{recipe.type}</td>

                                    <td>
                                        <button className="btn btn-success"><Link to={`/update/${recipe._id}`}>Edit</Link></button> |  | <button className="btn btn-info"><Link to={`/details/${recipe._id}`}>Details</Link></button></td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Display