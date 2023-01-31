import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Details = () => {
    const [product, setProduct] = useState("")
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch(err => console.log("This is our detail page", + err))
    }, [id])
// dependancy array

    return ( 
        <div>
            <h1>Product Details</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p><button className="btn btn-primary"><Link to = {"/"}> Home </Link></button></p>
        </div>
    )
}

export default Details