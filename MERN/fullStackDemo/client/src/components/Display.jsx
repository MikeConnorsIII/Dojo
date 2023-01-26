//rafce for this standard plate
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Display = () => {
    const [songList, setSongList] = useState([])

    const [ deleteToggle, setDeleteToggle ] = useState(false)


    useEffect(() => {
        axios.get('http://localhost:8000/api/songs')
            .then((res) => {
                console.log('This is my display page data', res.data)
                setSongList(res.data)
            })
            .catch((err) => { console.log("This is my display page error: ", err) })
    }, [deleteToggle])
    // use

    const handleDelete = (e, id) => {
        console.log(`Deleting hero ${id}`, e)
        axios.delete(`http://localhost:8000/api/songs/${id}`)
            .then((res) => {
                setDeleteToggle(!deleteToggle)

            })
            .catch((err) => { console.log(err) })
    }

    return (
        <div>
            <h1>Song Bird</h1>
            <button className="btn btn-outline-success" ><Link to={`/create`}>Create</Link></button>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Rating</th>
                        <th>Top 100</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songList.map((song, i) => {
                            return (
                                <tr key={i}>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.rating}</td>
                                    {/* Condition ? "Truthy" : "Falsey" */}
                                    <td>{song.top100 ? "Yes" : "No"}</td>
                                    <td><button className="btn btn-success"><Link to={`/update/${song._id}`}>Edit</Link></button> | <button className="btn btn-danger" onClick={(e) => { handleDelete(e, song._id) }}>Delete</button> | <button className="btn btn-info"><Link to={`/details/${song._id}`}>View</Link></button></td>

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