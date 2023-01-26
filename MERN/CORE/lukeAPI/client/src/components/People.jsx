import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate } from 'react-router-dom'

const People = () => {
    const { id } = useParams()
    const [people, setPeople] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://swapi.dev/api/people/${id}`)
            .then((res) => {
                setPeople(res.data)
                console.log(people)
            })
            .catch((err) => console.log("These aren't the droids you're looking for!", err, navigate(`/error`))) 
    }, [id])

    return (
        <div>
            <h1>Name: {people.name}</h1>
            <h1>Height: {people.height}</h1>
            <h1>Hair Colors: {people.hair_color}</h1>
            <h1>Skin Color: {people.skin_color}</h1>
        </div>
    )
}

export default People