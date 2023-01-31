//rafce for this standard plate
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Display = () => {
    const [productList, setProductList] = useState([])

    const [ deleteToggle, setDeleteToggle ] = useState(false)


    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then((res) => {
                console.log('This is my display page data', res.data)
                setProductList(res.data)
            })
            .catch((err) => { console.log("This is my display page error: ", err) })
    }, [deleteToggle])
    // use

    const handleDelete = (e, id) => {
        console.log(`Deleting hero ${id}`, e)
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setDeleteToggle(!deleteToggle)

            })
            .catch((err) => { console.log(err) })
    }

    return (
        <div>
            <h1>PRODUCTS</h1>
            <button className="btn btn-outline-success" ><Link to={`/create`}>Create</Link></button>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((product, i) => {
                            return (
                                <tr key={i}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    {/* Condition ? "Truthy" : "Falsey" */}
                                    <td><button className="btn btn-success"><Link to={`/update/${product._id}`}>Edit</Link></button> | <button className="btn btn-danger" onClick={(e) => { handleDelete(e, product._id) }}>Delete</button> | <button className="btn btn-info"><Link to={`/details/${product._id}`}>View</Link></button></td>

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