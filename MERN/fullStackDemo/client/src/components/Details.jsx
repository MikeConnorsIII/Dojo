import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Details = () => {
    const [song, setSong] = useState("")
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/songs/${id}`)
        .then((res) => setSong(res.data))
        .catch(err => console.log("This is our detail page", + err))
    }, [id])
// dependancy array

    return ( 
        <div>
            <h1>Song Details</h1>
            <p>Title: {song.title}</p>
            <p>Artist: {song.artist}</p>
            <p>Rating: {song.rating}</p>
            <p>Top 100: {song.top100 ? "Yes" : "No"}</p>
            <p><button className="btn btn-primary"><Link to = {"/"}> Home </Link></button></p>
        </div>
    )
}

export default Details