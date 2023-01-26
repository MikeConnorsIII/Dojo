import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Planets = () => {
    const [planets, setPlanets] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://swapi.dev/api/planets/${id}`)
            .then((res) => {
                setPlanets(res.data)
                console.log(planets)
            })
            .catch((err) => console.log("Planet page", err))
    }, [id])

    return (
        <div>
            <h1>NAME: {planets.name}</h1>
            <h1>CLIMATE: {planets.climate}</h1>
            <h1>TERRAIN: {planets.terrain}</h1>
            <h1>WATER: {planets.surface_water}</h1>
            <h1>POPULATION: {planets.population}</h1>
        </div>
    )
}

export default Planets

