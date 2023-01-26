// useEffect, useState, axios, useParams, useNavigate, Link
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

//update - useEffect to bring in the data for the item that were going to update
// axios gets stuff from backect 
// useState
// useParams to grab id
// useNavigate

const Update = () => {
    const [title, setTitle] = useState("")
    const [artist,setArtist] = useState("")
    const [rating, setRating] = useState(5)
    const [top100, setTop100] = useState(true)

    const {id} = useParams()
    // object 
    const navigate = useNavigate()

    // allows us to grab the data from the item we are using
    useEffect(()=>{
        axios.get("http://localhost:8000/api/songs/" + id)
        .then((res)=>{
            console.log("this is my update get request: ", res.data)
            const song = res.data
            setTitle(song.title)
            setArtist(song.artist)
            setRating(song.rating)
            setTop100(song.top100)
        })
        .catch((err)=>console.log("This is our Update page get request", err))
    }, [id])

    // after we do an action we can use a nviagte to go anywhere else
    const handleSubmit = (e) => {
        e.preventDefault()
        const putObj = {title, artist, rating, top100}
        axios.put(`http://localhost:8000/api/songs/${id}`, putObj)
        .then((res)=>{
            navigate("/")
        })
        .catch(err=>console.log("This is our update put request error: ", err))
    }

    return (
        <div>
            <h1>Update a Song - Create</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />

                </div>
                <div>
                    <label>Artist</label>
                    <input type="text" value={artist} onChange={(e) => { setArtist(e.target.value) }} />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="number" value={rating} onChange={(e) => { setRating(e.target.value) }} />
                </div>
                <div>
                    <label>Top 100</label>
                    <input type="checkbox" checked={top100} onChange={(e) => { setTop100(e.target.checked) }} />
                </div>
                <div>
                    <button type="submit">Add a Song</button>
                    <button className="btn btn-outline-success" ><Link to={`/`}>Cancel</Link></button>

                </div>
            </form>
        </div>
    )
}

export default Update